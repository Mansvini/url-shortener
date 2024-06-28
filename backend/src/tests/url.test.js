const request = require('supertest');
const {app} = require('../server');
const Url = require('../models/urlModel');
const User = require('../models/userModel');

describe('URL Generation', () => {
  let token;

  beforeAll(async () => {
    await User.deleteMany({});
    await Url.deleteMany({});

    await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        password: 'password123'
      });

    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'password123'
      });

    token = response.body.token;
  });

  it('should generate a hashed URL', async () => {
    const response = await request(app)
      .post('/generate')
      .set('Authorization', `Bearer ${token}`)
      .send({
        originalUrl: 'http://example.com',
        usageLimit: 3
      });

    expect(response.status).toBe(201);
    expect(response.body.hashedUrl).toBeDefined();
  });

  it('should redirect to the original URL and track usage', async () => {
    const generateResponse = await request(app)
      .post('/generate')
      .set('Authorization', `Bearer ${token}`)
      .send({
        originalUrl: 'http://example.com',
        usageLimit: 3
      });

    const hash = generateResponse.body.hashedUrl;
    const redirectResponse = await request(app)
      .get(`/tiny/${hash}`);

    expect(redirectResponse.status).toBe(302);
    expect(redirectResponse.header.location).toBe('http://example.com');
  });

  it('should prevent redirection when usage limit is exceeded', async () => {
    const generateResponse = await request(app)
      .post('/generate')
      .set('Authorization', `Bearer ${token}`)
      .send({
        originalUrl: 'http://example2.com',
        usageLimit: 1
      });

    const hash = generateResponse.body.hashedUrl;

    await request(app)
      .get(`/tiny/${hash}`);

    const secondRedirectResponse = await request(app)
      .get(`/tiny/${hash}`);

    expect(secondRedirectResponse.status).toBe(403);
    expect(secondRedirectResponse.body.error).toBe('URL usage limit exceeded');
  });
});
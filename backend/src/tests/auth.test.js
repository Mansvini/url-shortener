const request = require('supertest');
const {app} = require('../server');
const User = require('../models/userModel');

describe('Authentication', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        password: 'password123'
      });
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('User registered successfully');
  });

  it('should login an existing user', async () => {
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
    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  it('should not login with invalid credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'invaliduser',
        password: 'password123'
      });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid credentials');
  });
});
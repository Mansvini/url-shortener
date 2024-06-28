const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { server } = require('./src/server');

dotenv.config({ path: './.env.test' });

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
  server.close();
});
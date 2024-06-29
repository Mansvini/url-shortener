const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'URL Hashing API',
      version: '1.0.0',
      description: 'A simple Express URL hashing API',
    },
    servers: [
      {
        url: process.env.API_URL,
      },
    ],
  },
  apis: ['./src/routes/*.js', './src/models/*.js'], // files containing annotations for API documentation
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
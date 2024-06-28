### README.md

# URL Hashing System

## Overview

This project implements a URL hashing system designed to manage long URLs with UTM tracking efficiently. The system provides a secure and scalable way to generate hashed URLs, track their usage, and ensure privacy-aware click tracking.

## Architecture Choice and Reasoning

1. **Backend**: 
   - **Node.js with Express**: Chosen for its simplicity, performance, and wide community support.
   - **MongoDB**: NoSQL database chosen for its scalability and flexibility in handling dynamic schemas.
   - **JWT for Authentication**: Secure token-based authentication ensuring only authorized users can generate URLs.

2. **Frontend**: 
   - **React**: A popular frontend library for building interactive user interfaces.
   - **Axios**: For making HTTP requests to the backend.

3. **Deployment**:
   - Localhost for development and testing.
   - Potential for cloud deployment (AWS) if needed, using services like Lambda, DynamoDB, API Gateway, and S3 for scalability and high availability. (I have used up my AWS free tier hence not deploying it there.)

4. **Documentation**:
   - **Swagger**: Integrated for interactive API documentation.

5. **Testing**:
   - **Jest and Supertest**: Jest handles the overall test structure and assertions, while Supertest handles HTTP requests and responses. This combination allows us to write both unit tests and integration tests effectively.

### Features

- User registration and login with JWT-based authentication.
- URL generation with single-use, limited-use, or infinite-use options.
- Associate generated URLs with users.
- Click tracking with privacy-aware redirection.
- Interactive API documentation using Swagger.
- User-friendly interface for URL generation.
- Backend tests.

### Usage Count
The system tracks the number of times a URL has been used or clicked through the `usageCount` field.

### Default Usage Limit
The default usage limit for generated URLs is unlimited unless specified otherwise. This means that unless a usage limit is explicitly provided, the URLs will not have any restrictions on the number of times they can be used.
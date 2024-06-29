### setup.md

# Local Setup Instructions

## Prerequisites

- Node.js
- MongoDB

## Backend Setup

### 1. Clone the Repository

Clone the repository to your local machine:
```bash
git clone git@github.com:Mansvini/url-shortener.git
cd url-shortener
```

### 2. Navigate to the Backend Directory

Change to the backend directory:
```bash
cd backend
```

### 3. Install Backend Dependencies

Install the required dependencies for the backend:
```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in this directory and add the following environment variables:
```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/urlHashingSystem
JWT_SECRET=your_jwt_secret
API_URL=http://localhost:5001
```

### 5. Start MongoDB

Ensure MongoDB is running locally. You can start MongoDB with the following command if it's installed as a service:
```bash
sudo service mongod start
```

Please troubleshoot if needed to start MongoDB on your local machine.

### 6. Start the Server

Start the Express server:
```bash
npm start
```

The server should be running on `http://localhost:5001`.

## Frontend Setup

### 1. Open a new terminal window.

### 2. Navigate to the Frontend Directory of this project.

Navigate to the frontend directory:
```bash
cd url-shortener
cd frontend
```

### 3. Install Frontend Dependencies

Install the required dependencies for the React application:
```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in this directory and add the following environment variables:
```env
REACT_APP_API_URL=http://localhost:5001
```

### 5. Start the React Application

Start the React development server:
```bash
npm start
```

The frontend application should be running on `http://localhost:3000`.

## Running Tests

### 1. Navigate to the Backend Directory

### 2. Install Backend Dependencies (if not already installed)

Install the required dependencies for the backend:
```bash
npm install
```

### 3. Configure Test Environment

Create a `.env.test` file in the backend directory and add the following environment variables:
```env
PORT=5002
MONGO_URI=mongodb://localhost:27017/urlHashingSystemTest
JWT_SECRET=your_jwt_secret
```

### 4. Run Tests

Run the tests using Jest:
```bash
npm test
```

This command will execute the tests and provide a report of the results.

## Usage Instructions

### 1. Register a User

- Navigate to the frontend at `http://localhost:3000` or `https://urlhash.netlify.app/`.
- Fill out the registration form with a username and password, then submit.

### 2. Log In

- After registering, log in with the same credentials.
- Upon successful login, a token will be stored for authentication.

### 3. Generate a Hashed URL

- After logging in, use the URL generation form to input an original URL and optionally set a usage limit.
- If no usage limit is specified, the default limit is set to unlimited.
- Submit the form to generate a hashed URL.
- The hashed URL will be displayed and can be used for redirection.

### 4. Use the Hashed URL

- Click on the hashed URL to be redirected to the original URL.
- The system tracks the usage of the hashed URL based on the set usage limit.

## Additional Notes

- Ensure MongoDB is running before starting the backend server.
- Use the Swagger documentation at `http://localhost:5001/api-docs` or `https://url-hasher-backend-a35890f98bb4.herokuapp.com/api-docs` for detailed API endpoint information.
- The test database is separate from the development database to prevent data contamination during testing.

This setup guide provides all necessary steps to deploy and use the URL hashing application, including running tests to ensure the application functions as expected.
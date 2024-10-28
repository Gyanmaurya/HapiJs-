# Secure MERN Stack API

This project is a secure RESTful API built with the MERN stack, specifically using Hapi.js for the server and Sequelize.js for database handling. The API allows for secure user registration and login, with features such as encrypted storage for Personally Identifiable Information (PII), request validation, error handling, and a CI/CD pipeline.





# Features
User Authentication: Register and login with secure password hashing using bcrypt.
Token-based Authorization: JWT for session management and secure data access.
Validation: Joi schema validation to ensure secure and proper data handling.
CI/CD Integration: GitHub Actions for automated testing and deployment.
Docker Support: Containerized environment for easy deployment and scaling.

# Run the project

git clone https://github.com/yourusername/secure-mern-api.git
cd secure-mern-api
npm install
DATABASE_URL=<your_database_url>
JWT_SECRET=<your_jwt_secret>
PORT=<your_server_port>
npm start
npm test

# Simple Node.js Docker Application

This is a basic Node.js application configured to run in a Docker container.

## Application Structure

- `server.js` - The main application file that sets up an Express server
- `package.json` - Defines the application dependencies and scripts
- `public/index.html` - A simple frontend for the application
- `Dockerfile` - Instructions for building the Docker image

## Prerequisites

- [Node.js](https://nodejs.org/) (for local development)
- [Docker](https://www.docker.com/get-started)

## Building and Running Locally

1. Install dependencies:
   ```
   npm install
   ```

2. Start the application:
   ```
   npm start
   ```

3. Access the application at http://localhost:3000

## Building and Running with Docker

1. Build the Docker image:
   ```
   docker build -t simple-nodejs-app .
   ```

2. Run the Docker container:
   ```
   docker run -p 3000:3000 simple-nodejs-app
   ```

3. Access the application at http://localhost:3000

## API Endpoints

- `GET /` - Returns the main HTML page
- `GET /api/info` - Returns JSON information about the application

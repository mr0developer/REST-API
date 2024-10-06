


# Simple Express Server

This repository contains a simple Express.js application that serves a basic health check endpoint.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Error Handling](#error-handling)

## Overview

This application uses the Express framework to create a simple web server that listens for HTTP requests. The main functionality of the app is to provide a health check endpoint that returns the status of the server.

## Installation

To get started with this application, you need to have Node.js installed on your machine. Follow these steps to set up the application:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**

   Run the following command to install Express:

   ```bash
   npm install express
   ```

3. **Set up the environment:**

   You can set the environment variable `PORT` to define which port the server should listen on. If not set, the server will default to port `3000`.

## Usage

After installing the dependencies, you can start the server by running:

```bash
node app.js
```
*Replace `app.js` with the name of your main file if it differs.*

Once the server is running, you can access it by visiting `http://localhost:3000/status` in your web browser or using a tool like Postman or curl.

## Endpoints

### `GET /status`

- **Description**: Returns the current status of the server.
- **Response**:

  ```json
  {
    "status": "running"
  }
  ```

- **Status Codes**:
  - 200 OK: If the server is running and the request is successful.
  - 500 Internal Server Error: If an unexpected error occurs on the server.

## Error Handling

The application includes basic error handling. If any unforeseen error occurs while processing a request, the server will log the error to the console and respond with a `500 Internal Server Error` status, along with an error message in JSON format:

```json
{
  "error": "internal server error"
}
```

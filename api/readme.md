# Pet Services API

Welcome to the Pet Services API, a backend application built with Node.js, Express, and TypeScript to provide various pet services.

## Features

- Get a list of available pet services.
- Get a single pet service.
- Update existing pet services.


## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (https://nodejs.org)
- npm (Node Package Manager)

## Getting Started

1. Clone the repository:

2. Navigate to the project folder: 'cd api'

3. Install the dependencies: npm-install

## Running the Server

To start the API server using Nodemon (development mode):

in your terminal run: nodemon

The server will run at http://localhost:8000 by default. You can change the port in the `src/app.ts` file if needed.

## API Endpoints

- `GET /api/v1/services/?email=youremail@email.com: Get a list of all pet services for a given user.
- `GET api/v1/services/:id`: Retrieve an existing pet service by ID.
- `PATCH api/v1/services/:id`: Update an existing pet service by ID.





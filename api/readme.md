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

1. Navigate to the project folder:
   ```bash
     cd api
   ```
2. Install the dependencies:
   ```bash
     npm install
   ```

## Adding Data

Following the advice for the challenge, there is no database, a simple json file has the data to serve in this api.
To add data, locate the file called "services.json" in the folder src, and add data with tihs schema:

```json
{
    "id": "1",
    "title": "Pet Walk",
    "user_email": "user1@email.com",
    "pet_sitter_id": "10",
    "pet_name": "Doky",
    "pet_img": "https://placedog.net/640/480?random",
    "pet_sitter_img": "https://xsgames.co/randomusers/avatar.php?g=male",
    "price": "9000",
    "status": "paid"
  }
```

the pet_img and pet_sitter id url provide a random image to be displayed in the frontend.

## Running the Server

To start the API server using Nodemon (development mode):

```bash
  nodemon
```

The server will run at http://localhost:8000 by default. You can change the port in the `src/app.ts` file if needed.

## API Endpoints

- `GET /api/v1/services/?email=youremail@email.com: Get a list of all pet services for a given user.
- `GET api/v1/services/:id`: Retrieve an existing pet service by ID.
- `PATCH api/v1/services/:id`: Update an existing pet service by ID.





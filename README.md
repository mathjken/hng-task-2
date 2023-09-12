# Simple REST API for Managing Persons

This is a simple REST API for managing persons. It allows you to create, read, update, and delete person records. The API is built using Node.js, Express, and MongoDB.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Creating a Person](#creating-a-person)
  - [Fetching Person Details](#fetching-person-details)
  - [Updating Person Details](#updating-person-details)
  - [Deleting a Person](#deleting-a-person)
- [Documentation](DOCUMENTATION.md)
- [Known Limitations](#known-limitations)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine.
- MongoDB installed and running.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-api.git

2. Navigate to the project directory
    ```bash
    cd mongoose_Ex

3. Install dependencies
    ```bash
    npm install

4. Start the server
    ```bash
    node app.js

- Your API should now be running at 'http://localhost:{port}'

### Usage
You can interact with the API using HTTP requests. Here are some examples

### Creating a Person
To add a new person, send a POST request to /api with the person's name in the request body.
- Example:
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe"}' http://localhost:5000/api 

### Fetching Person Details
To fetch details of a person by ID, send a GET request to /api/{id} where {id} is the person's ID.
- Example:
    ```bash
    curl http://localhost:5000/api/1

### Updating Person Details
To update the details of an existing person by ID, send a PUT request to /api/{id} with the updated name in the request body.
- Example:
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Name"}' http://localhost:5000/api/1

### Deleting a Person
To remove a person by ID, send a DELETE request to /api/{id} where {id} is the person's ID.
- Example:
curl -X DELETE http://localhost:5000/api/1

For more detailed documentation and response formats, please refer to the DOCUMENTATION.md file.

### Known Limitations
* This is a simplified example and may not cover all production-level concerns such as authentication and validation.
* No authentication or authorization mechanisms are implemented.
* Error handling is minimal and should be improved for production use.

### License
This project is licensed under the MIT License. See the [LICENCE](https://chat.openai.com/c/LICENSE) file for details.
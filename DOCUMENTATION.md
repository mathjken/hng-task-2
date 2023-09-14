# API Documentation

## Standard Request and Response Formats

### Create a new Person (POST `/api/:name`)

* Request Format:

    ```json
        {
            "name": "John Doe"
        }

* Response Format (Success):

    ```json
         {
            "_id": "6501e7a90e14d7a71a34ee83",
            "name": "John Doe",
            "createdAt": "2023-09-13T16:47:37.854Z",
            "updatedAt": "2023-09-13T16:47:37.854Z",
            "__v": 0
        }

### Retrieves a list of all persons in the database (GET /api)
* Response Format (Success):

    ```json
       [
        {
            "_id": "6501e7a90e14d7a71a34ee83",
            "name": "John Doe",
            "createdAt": "2023-09-13T16:47:37.854Z",
            "updatedAt": "2023-09-13T16:47:37.854Z",
            "__v": 0
        }
       ]
### Fetch Person Details (GET /api/:name)
* Response Format (Success):

    ```json
       {
            "_id": "6501e7a90e14d7a71a34ee83",
            "name": "John Doe",
            "createdAt": "2023-09-13T16:47:37.854Z",
            "updatedAt": "2023-09-13T16:47:37.854Z",
            "__v": 0
        }
* Response Format (Error - Person not found):

    ```json
        {
            "error": "Person not found"
        }

### Update a new Person (PUT `/api/:name`)

Request Format:

    ```json
        {
            "name": "John Doe"
        }

* Response Format (Success):

    ```json
         {
            "_id": "6501e7a90e14d7a71a34ee83",
            "name": "John Doe",
            "createdAt": "2023-09-13T16:47:37.854Z",
            "updatedAt": "2023-09-13T16:47:37.854Z",
            "__v": 0
        }

### Delete a Person (DELETE `/api/:name`)

* Request Format:

    ```json
        {
            "name": "John Doe"
        }

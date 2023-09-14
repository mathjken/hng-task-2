# API Documentation

## Standard Request and Response Formats

### Create a Person (POST `/api/users/name`)

**Request Format:**
    ```json
        {
            "name": "John Doe"
        }

***Response Format (Success):**
    ```json
         {
            "_id": "6501e7a90e14d7a71a34ee83",
            "name": "John Doe",
            "createdAt": "2023-09-13T16:47:37.854Z",
            "updatedAt": "2023-09-13T16:47:37.854Z",
            "__v": 0
        }

### Fetch Person Details (GET /api/users/name)
***Response Format (Success):**
    ```json
       {
            "_id": "6501e7a90e14d7a71a34ee83",
            "name": "John Doe",
            "createdAt": "2023-09-13T16:47:37.854Z",
            "updatedAt": "2023-09-13T16:47:37.854Z",
            "__v": 0
        }
***Response Format (Error - Person not found):**
    ```json
        {
            "error": "Person not found"
        }

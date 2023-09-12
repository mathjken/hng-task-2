# API Documentation

## Standard Request and Response Formats

### Create a Person (POST `/api`)

**Request Format:**
    ```json
        {
            "name": "John Doe"
        }

***Response Format (Success):**
    ```json
        {
            "id": "1",
            "name": "John Doe"
        }

### Fetch Person Details (GET /api/{id})
***Response Format (Success):**
    ```json
        {
            "id": "1",
            "name": "John Doe"
        }
***Response Format (Error - Person not found):**
    ```json
        {
            "error": "Person not found"
        }

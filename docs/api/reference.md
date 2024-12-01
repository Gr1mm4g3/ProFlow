# API Reference

## Authentication

### POST /api/auth/[...nextauth]
NextAuth.js authentication endpoints for handling user sessions.

**Features:**
- Sign in
- Sign out
- Session handling
- JWT token management

## Projects

### GET /api/projects
Retrieve all projects for the authenticated user.

**Response:**
```json
{
  "projects": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "createdAt": "string",
      "updatedAt": "string",
      "userId": "string"
    }
  ]
}
```

### POST /api/projects
Create a new project.

**Request Body:**
```json
{
  "name": "string",
  "description": "string"
}
```

### GET /api/projects/[projectId]
Retrieve a specific project by ID.

**Response:**
```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "createdAt": "string",
  "updatedAt": "string",
  "userId": "string"
}
```

### PUT /api/projects/[projectId]
Update a specific project.

**Request Body:**
```json
{
  "name": "string",
  "description": "string"
}
```

### DELETE /api/projects/[projectId]
Delete a specific project.

## Tasks (Planned)

### GET /api/tasks
Retrieve all tasks for a project.

### POST /api/tasks
Create a new task.

### GET /api/tasks/[taskId]
Retrieve a specific task.

### PUT /api/tasks/[taskId]
Update a specific task.

### DELETE /api/tasks/[taskId]
Delete a specific task.

## Error Responses

All API endpoints follow a consistent error response format:

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

Common error codes:
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `429`: Too Many Requests
- `500`: Internal Server Error

## Authentication

All API endpoints (except authentication endpoints) require a valid session token. The token should be included in the request headers:

```
Authorization: Bearer [token]
```

## Rate Limiting

API requests are rate-limited to prevent abuse. Current limits:
- 100 requests per minute per IP
- 1000 requests per hour per user

## Versioning

The API currently doesn't use explicit versioning as it's in early development. Breaking changes will be communicated through the changelog.

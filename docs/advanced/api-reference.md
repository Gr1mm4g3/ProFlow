# API Reference

ProFlow provides a comprehensive REST API that allows you to integrate and extend the platform's functionality.

## Authentication

### API Keys
```bash
# Request header format
Authorization: Bearer YOUR_API_KEY
```

### OAuth 2.0
- Authorization Code Flow
- Client Credentials Flow
- Refresh Token Flow

## Base URL
```
https://api.proflow.com/v1
```

## Rate Limiting
- 1000 requests per hour per API key
- Rate limit headers included in response
- Exponential backoff recommended

## Projects API

### List Projects
```http
GET /projects

Parameters:
- page (integer): Page number
- per_page (integer): Items per page
- status (string): Project status
- team_id (string): Team identifier

Response: 200 OK
{
  "data": [{
    "id": "project_id",
    "name": "Project Name",
    "description": "Project Description",
    "status": "active",
    "created_at": "2024-01-20T12:00:00Z",
    "updated_at": "2024-01-20T12:00:00Z"
  }],
  "meta": {
    "total": 100,
    "page": 1,
    "per_page": 10
  }
}
```

### Create Project
```http
POST /projects

Request Body:
{
  "name": "New Project",
  "description": "Project Description",
  "team_id": "team_id",
  "status": "active"
}

Response: 201 Created
{
  "id": "project_id",
  "name": "New Project",
  "description": "Project Description",
  "status": "active",
  "created_at": "2024-01-20T12:00:00Z",
  "updated_at": "2024-01-20T12:00:00Z"
}
```

## Tasks API

### List Tasks
```http
GET /tasks

Parameters:
- project_id (string): Project identifier
- status (string): Task status
- assignee_id (string): Assignee identifier
- priority (string): Task priority

Response: 200 OK
{
  "data": [{
    "id": "task_id",
    "title": "Task Title",
    "description": "Task Description",
    "status": "todo",
    "priority": "high",
    "assignee_id": "user_id",
    "created_at": "2024-01-20T12:00:00Z",
    "updated_at": "2024-01-20T12:00:00Z"
  }],
  "meta": {
    "total": 100,
    "page": 1,
    "per_page": 10
  }
}
```

### Create Task
```http
POST /tasks

Request Body:
{
  "title": "New Task",
  "description": "Task Description",
  "project_id": "project_id",
  "assignee_id": "user_id",
  "priority": "high",
  "status": "todo"
}

Response: 201 Created
{
  "id": "task_id",
  "title": "New Task",
  "description": "Task Description",
  "status": "todo",
  "priority": "high",
  "assignee_id": "user_id",
  "created_at": "2024-01-20T12:00:00Z",
  "updated_at": "2024-01-20T12:00:00Z"
}
```

## Teams API

### List Teams
```http
GET /teams

Parameters:
- organization_id (string): Organization identifier
- status (string): Team status

Response: 200 OK
{
  "data": [{
    "id": "team_id",
    "name": "Team Name",
    "description": "Team Description",
    "status": "active",
    "created_at": "2024-01-20T12:00:00Z",
    "updated_at": "2024-01-20T12:00:00Z"
  }],
  "meta": {
    "total": 100,
    "page": 1,
    "per_page": 10
  }
}
```

## Users API

### List Users
```http
GET /users

Parameters:
- team_id (string): Team identifier
- role (string): User role
- status (string): User status

Response: 200 OK
{
  "data": [{
    "id": "user_id",
    "name": "User Name",
    "email": "user@example.com",
    "role": "developer",
    "status": "active",
    "created_at": "2024-01-20T12:00:00Z",
    "updated_at": "2024-01-20T12:00:00Z"
  }],
  "meta": {
    "total": 100,
    "page": 1,
    "per_page": 10
  }
}
```

## Time Tracking API

### Log Time
```http
POST /time-entries

Request Body:
{
  "task_id": "task_id",
  "user_id": "user_id",
  "duration": 3600,
  "description": "Work description",
  "started_at": "2024-01-20T12:00:00Z"
}

Response: 201 Created
{
  "id": "entry_id",
  "task_id": "task_id",
  "user_id": "user_id",
  "duration": 3600,
  "description": "Work description",
  "started_at": "2024-01-20T12:00:00Z",
  "created_at": "2024-01-20T12:00:00Z"
}
```

## Webhooks

### Register Webhook
```http
POST /webhooks

Request Body:
{
  "url": "https://your-domain.com/webhook",
  "events": ["task.created", "task.updated"],
  "secret": "webhook_secret"
}

Response: 201 Created
{
  "id": "webhook_id",
  "url": "https://your-domain.com/webhook",
  "events": ["task.created", "task.updated"],
  "created_at": "2024-01-20T12:00:00Z"
}
```

## Error Handling

### Error Codes
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 422: Validation Error
- 429: Rate Limit Exceeded
- 500: Internal Server Error

### Error Response Format
```json
{
  "error": {
    "code": "validation_error",
    "message": "The given data was invalid",
    "details": {
      "field": ["Error message"]
    }
  }
}
```

## Best Practices

### Rate Limiting
1. Implement exponential backoff
2. Cache responses when possible
3. Use bulk operations
4. Monitor usage

### Security
1. Keep API keys secure
2. Use HTTPS
3. Validate webhooks
4. Monitor activity

## Next Steps

- Explore [Webhooks](webhooks.md)
- Learn about [Integrations](integrations.md)
- Review [Security Best Practices](../security/best-practices.md)
- Set up [Monitoring](../administration/monitoring.md)

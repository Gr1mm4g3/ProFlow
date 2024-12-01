# Development Environment Setup

This guide will help you set up your development environment for ProFlow.

## Prerequisites

### Required Software
- Node.js (v20.x or later)
- PostgreSQL (v15.x or later)
- Redis (v7.x or later)
- Git

### Recommended Tools
- VS Code with extensions:
  - ESLint
  - Prettier
  - GitLens
  - Docker
- Postman for API testing
- Docker Desktop

## Initial Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Gr1mm4g3/ProFlow.git
cd ProFlow
```

### 2. Environment Setup
```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your local settings
# Required variables:
# - DATABASE_URL
# - REDIS_URL
# - JWT_SECRET
# - OPENAI_API_KEY (for AI features)
```

### 3. Database Setup
```bash
# Start PostgreSQL (if not running)
sudo service postgresql start

# Create database
createdb proflow_dev

# Run migrations (once implemented)
npm run migrate
```

### 4. Install Dependencies
```bash
# Install project dependencies
npm install

# Install development dependencies
npm install --save-dev
```

### 5. Start Development Servers
```bash
# Start backend server
npm run dev:server

# Start frontend development server
npm run dev:client

# Start worker processes
npm run dev:worker
```

## Development Workflow

### 1. Create Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 2. Development Process
1. Make your changes
2. Write/update tests
3. Run linting: `npm run lint`
4. Run tests: `npm test`
5. Format code: `npm run format`

### 3. Commit Changes
```bash
git add .
git commit -m "feat: your feature description"
```

### 4. Push and Create PR
```bash
git push origin feature/your-feature-name
# Create PR on GitHub
```

## Testing

### Running Tests
```bash
# Run all tests
npm test

# Run specific test file
npm test -- path/to/test

# Run with coverage
npm run test:coverage
```

### Test Environment
- Tests use a separate database: `proflow_test`
- Separate Redis instance for testing
- Mock external services

## Docker Development

### Using Docker Compose
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## Common Issues

### Database Connection
- Check PostgreSQL is running
- Verify database exists
- Check connection string in .env

### Redis Connection
- Verify Redis is running
- Check Redis connection string
- Clear Redis cache if needed

### Node.js Issues
- Clear node_modules: `rm -rf node_modules`
- Clear npm cache: `npm cache clean --force`
- Reinstall dependencies: `npm install`

## IDE Setup

### VS Code Settings
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Recommended Extensions
1. ESLint
2. Prettier
3. GitLens
4. Docker
5. PostgreSQL
6. Redis

## Next Steps

- Review [Architecture Overview](architecture.md)
- Check [API Documentation](../advanced/api-reference.md)
- Read [Contributing Guidelines](../CONTRIBUTING.md)

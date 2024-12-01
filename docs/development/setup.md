# Development Environment Setup

This guide will help you set up your development environment for ProFlow.

## Prerequisites

### Required Software
- Node.js (v18 or higher)
- pnpm (v8 or higher)
- Git
- PostgreSQL (v14 or later)
- Redis (v6 or later)

### Recommended Tools
- VS Code with extensions:
  - ESLint
  - Prettier
  - Prisma
  - Tailwind CSS IntelliSense
  - GitLens
- Postman for API testing
- Docker Desktop

## Initial Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/proflow.git
cd proflow
```

### 2. Environment Setup
```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your local settings
# Required variables:
# - NEXT_PUBLIC_APP_URL
# - DATABASE_URL
# - NEXTAUTH_URL
# - NEXTAUTH_SECRET
# - REDIS_URL
# - Optional Services: OPENAI_API_KEY, S3_BUCKET, AWS_ACCESS_KEY, AWS_SECRET_KEY
```

### 3. Database Setup
```bash
# Start PostgreSQL (if not running)
sudo service postgresql start

# Create database
createdb proflow_dev

# Initialize the database:
pnpm prisma generate
pnpm prisma db push
```

### 4. Install Dependencies
```bash
# Install project dependencies
pnpm install

# Install development dependencies
pnpm install --save-dev
```

### 5. Start Development Servers
```bash
# Start backend server
pnpm dev

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
3. Run linting: `pnpm lint`
4. Run tests: `pnpm test`
5. Format code: `pnpm format`

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
pnpm test

# Run specific test file
pnpm test -- path/to/test

# Run with coverage
pnpm run test:coverage
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
3. Prisma
4. Tailwind CSS IntelliSense
5. GitLens
6. PostgreSQL
7. Redis

## Next Steps

- Review [Architecture Overview](architecture.md)
- Check [API Documentation](../advanced/api-reference.md)
- Read [Contributing Guidelines](../CONTRIBUTING.md)

## Project Structure

```
proflow/
├── docs/               # Documentation
├── prisma/            # Database schema and migrations
├── public/            # Static assets
├── scripts/           # Utility scripts
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # React components
│   ├── lib/          # Utility functions and configurations
│   └── styles/       # Global styles
└── tests/            # Test files
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run tests
- `pnpm prisma studio` - Open Prisma Studio

## Code Style

We use:
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Tailwind CSS for styling

## Troubleshooting

### Common Issues

1. Database Connection Issues
   - Ensure your database URL is correct in `.env`
   - Run `pnpm prisma generate` after schema changes

2. Next.js Build Errors
   - Clear `.next` directory: `rm -rf .next`
   - Reinstall dependencies: `pnpm install`

3. Authentication Issues
   - Verify NEXTAUTH_SECRET is set
   - Check NEXTAUTH_URL matches your development URL

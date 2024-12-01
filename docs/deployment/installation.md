# Installation Guide

This guide walks you through the process of deploying ProFlow in various environments.

## System Requirements

### Minimum Requirements
- Node.js 18.x or higher
- PostgreSQL 13.x or higher
- Redis 6.x or higher
- 4GB RAM
- 2 CPU cores
- 20GB storage

### Recommended Requirements
- Node.js 20.x
- PostgreSQL 15.x
- Redis 7.x
- 8GB RAM
- 4 CPU cores
- 50GB SSD storage

## Installation Methods

### Docker (Recommended)
```bash
# Pull the latest images
docker pull proflow/api:latest
docker pull proflow/web:latest
docker pull proflow/worker:latest

# Create a network
docker network create proflow-network

# Start PostgreSQL
docker run -d \
  --name proflow-db \
  --network proflow-network \
  -e POSTGRES_DB=proflow \
  -e POSTGRES_USER=proflow \
  -e POSTGRES_PASSWORD=your_password \
  postgres:15

# Start Redis
docker run -d \
  --name proflow-redis \
  --network proflow-network \
  redis:7

# Start API server
docker run -d \
  --name proflow-api \
  --network proflow-network \
  -e DATABASE_URL=postgres://proflow:your_password@proflow-db:5432/proflow \
  -e REDIS_URL=redis://proflow-redis:6379 \
  -p 3000:3000 \
  proflow/api:latest

# Start web server
docker run -d \
  --name proflow-web \
  --network proflow-network \
  -e API_URL=http://proflow-api:3000 \
  -p 80:80 \
  proflow/web:latest
```

### Manual Installation

#### 1. Database Setup
```bash
# Install PostgreSQL
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib

# Create database
sudo -u postgres psql
CREATE DATABASE proflow;
CREATE USER proflow WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE proflow TO proflow;
```

#### 2. Redis Setup
```bash
# Install Redis
sudo apt-get install redis-server

# Configure Redis
sudo nano /etc/redis/redis.conf
# Set supervised to systemd
# Save and exit

# Restart Redis
sudo systemctl restart redis.service
```

#### 3. Backend Setup
```bash
# Clone repository
git clone https://github.com/proflow/proflow.git
cd proflow/api

# Install dependencies
npm install

# Configure environment
cp .env.example .env
nano .env

# Run migrations
npm run migrate

# Start server
npm run start
```

#### 4. Frontend Setup
```bash
# Navigate to frontend
cd ../web

# Install dependencies
npm install

# Configure environment
cp .env.example .env
nano .env

# Build and start
npm run build
npm run start
```

## Configuration

### Environment Variables
```bash
# Database
DATABASE_URL=postgres://user:password@host:5432/database

# Redis
REDIS_URL=redis://localhost:6379

# Server
PORT=3000
NODE_ENV=production

# Security
JWT_SECRET=your_secret_key
COOKIE_SECRET=your_cookie_secret

# Email
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_user
SMTP_PASS=your_password

# AI Services
OPENAI_API_KEY=your_api_key
```

### SSL Configuration
```nginx
# Nginx configuration
server {
    listen 443 ssl;
    server_name your-domain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Cloud Deployment

### AWS
1. Set up VPC and security groups
2. Launch RDS for PostgreSQL
3. Create ElastiCache for Redis
4. Deploy using ECS or EKS
5. Configure load balancer

### Google Cloud
1. Set up VPC network
2. Create Cloud SQL instance
3. Set up Memorystore for Redis
4. Deploy using GKE
5. Configure Cloud Load Balancing

### Azure
1. Create Virtual Network
2. Set up Azure Database for PostgreSQL
3. Configure Azure Cache for Redis
4. Deploy using AKS
5. Set up Application Gateway

## Monitoring Setup

### Basic Monitoring
```bash
# Install monitoring agent
npm install -g pm2

# Start with PM2
pm2 start ecosystem.config.js

# Monitor logs
pm2 logs

# Monitor metrics
pm2 monit
```

### Advanced Monitoring
- Set up Prometheus
- Configure Grafana dashboards
- Enable error tracking
- Configure log aggregation

## Security Setup

### Firewall Configuration
```bash
# Allow necessary ports
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 3000/tcp

# Enable firewall
sudo ufw enable
```

### SSL Certificate
```bash
# Install certbot
sudo apt-get install certbot

# Get certificate
sudo certbot certonly --standalone -d your-domain.com
```

## Backup Setup

### Database Backup
```bash
# Create backup script
#!/bin/bash
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
pg_dump -U proflow proflow > backup_$TIMESTAMP.sql

# Schedule backup
crontab -e
0 0 * * * /path/to/backup-script.sh
```

### File Backup
- Configure S3 bucket
- Set up backup rotation
- Schedule regular backups

## Troubleshooting

### Common Issues
1. Database Connection
   - Check credentials
   - Verify network access
   - Check firewall rules

2. Redis Connection
   - Verify Redis service
   - Check configuration
   - Test connectivity

3. Web Server
   - Check logs
   - Verify ports
   - Test SSL configuration

## Next Steps

- Configure [Monitoring](../administration/monitoring.md)
- Set up [Security](../security/best-practices.md)
- Review [Maintenance](maintenance.md)
- Explore [Scaling](scaling.md)

# 🚀 NestJS API with PostgreSQL, Kafka, Redis, and Swagger

## Overview

This project is a robust API built with **NestJS**, leveraging a range of technologies to provide scalable and performant functionality. It includes a user module with full CRUD operations, integrates **PostgreSQL** for persistent data storage, utilizes **Kafka** for event-driven architecture, implements **Redis** for caching to optimize performance, and uses **Swagger** for comprehensive API documentation.

## 🛠️ Features

- **User Module**: Complete CRUD operations for managing users.
- **PostgreSQL**: Reliable and efficient relational database management.
- **Kafka**: Asynchronous event processing with producer and consumer setup.
- **Redis**: Caching layer to improve application performance.
- **Swagger**: API documentation for easy reference and testing.

## 🚢 Deployment

### Prerequisites

- **Docker** and **Docker Compose** installed on your machine.

### Build and Run with Docker

1. **Build the Docker image**:
   ```bash
    docker build -t nestjs-app .
    docker run -d -p 3000:3000 --name user-app user-app
    docker-compose up -d
   ```

The API will be accessible at http://localhost:3000.

## 📄 API Documentation

Swagger is integrated into the project for API documentation. Once the application is running, access it at:

  ```bash
    http://localhost:3000/api
  ```

## 🛡️ License
This project is licensed under the MIT License. 


Developed with ❤️ by Gustavo Iafelix.
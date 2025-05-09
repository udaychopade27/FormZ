# Project Deployment Guide with Docker and Docker Compose

![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## Table of Contents
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)


## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/) (version 20.10.0+)
- [Docker Compose](https://docs.docker.com/compose/install/) (version 1.29.0+)
- (For development) Node.js 16+ and npm/yarn

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/project.git
   cd project

2. Set up environment variables:
   ```bash
   touch formz-env-file
   ```
   add below variables in this file 
   ```bash
   PORT=5000    # port for your backend
   MONGODB_URL=mongodb://mongodb:27017/  # url for you mongo database
   REACT_APP_API_URL=http://localhost:3313 # base url for api or url of your backend
   ```


3. Build the containers:
   ```bash
   docker-compose -f docker-compose.yml build
   ``` 

4. Start the container with env file 
   ```bash
   docker-compose -f docker-compose.yml --env-file formz-env-file up -d 
   ```




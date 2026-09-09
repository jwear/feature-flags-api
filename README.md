# Feature Flags API

A lightweight REST API for managing application feature flags.

This project is built with Node.js and Express and focuses on common backend API patterns including routing, request handling, validation, error handling, and CRUD operations.

## Tech Stack

- Node.js
- Express
- JavaScript

## Endpoints

| Method | Endpoint     | Description              |
| ------ | ------------ | ------------------------ |
| POST   | `/flags`     | Create a feature flag    |
| GET    | `/flags`     | Get all feature flags    |
| GET    | `/flags/:id` | Get a feature flag by ID |
| PATCH  | `/flags/:id` | Update a feature flag    |
| DELETE | `/flags/:id` | Delete a feature flag    |

## Getting Started

Install dependencies:

```bash
npm install
```

## Run in development

Start the server with nodemon:

```bash
npm run dev
```

Nodemon automatically restarts the server when source files change.

## Run normally

Start the server with Node.js:

```bash
npm start
```

The API runs locally at:

```bash
http://localhost:3000
```

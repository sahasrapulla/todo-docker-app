# Containerized To-Do List

A simple To-Do application matching the supplied screenshot, packaged as a Docker container.

## Requirements

- Docker Desktop / Docker Engine
- Docker Compose

## Run

From this directory:

```bash
docker compose up --build -d
```

Open:

http://localhost:8081

## Stop

```bash
docker compose down
```

## Features

- Add tasks
- Delete tasks
- Tasks persist in the browser using localStorage
- Runs inside an Nginx Docker container
- Host port: `8081`
- Container port: `80`

## Useful commands

Check the container:

```bash
docker ps
```

View logs:

```bash
docker compose logs -f
```

Rebuild after changes:

```bash
docker compose up --build -d
```

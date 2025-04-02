# Full Stack Challenge
A simple full-stack app with a Python (FastAPI) backend and React frontend, running in Docker.

## How to Run

1. **Clone the repository:**
   ```bash
   git clone <REPOSITORY_URL>
   cd fullstack-challenge
   ```

2. **Start the app:**
   ```bash
   docker compose up --build
   ```

3. **Open the frontend:**
   - Go to `http://localhost:3000` in your browser.

4. **Login credentials:**
   - Username: `admin`, Password: `1234`
   - Username: `user`, Password: `abcd`

5. **Stop the app:**
   ```bash
   docker compose down
   ```

## Requirements

- Docker and Docker Compose installed.
- Ports `3000` and `8000` free.
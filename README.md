# Chat Frontend

A simple real-time chat interface built with Next.js and TypeScript for the Doodle frontend challenge.

## Tech Stack

- **Next.js 16** with App Router
- **TypeScript**
- **Tailwind CSS**
- **SWR** for data fetching and polling

## Getting Started

### 1. Set up the backend

This app requires the [Chat API](https://github.com/DoodleScheduling/frontend-challenge-chat-api) running locally. Follow the setup instructions in that repository — it runs on port `3000` by default.

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

| Variable | Default | Description |
|---|---|---|
| `CHAT_API_BASE` | `http://localhost:3000/api/v1` | Backend API base URL |
| `CHAT_API_TOKEN` | `super-secret-doodle-token` | Bearer token for API auth |

### 3. Run NPM Install

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

## Architecture

The frontend proxies all API requests through Next.js route handlers (`/app/api/messages`), keeping the bearer token server-side and out of the browser.

```
Browser → Next.js API route → Chat API backend
```
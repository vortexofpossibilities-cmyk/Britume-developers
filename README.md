# BRITUME DEVELOPERS

A new, separate developer-management console project. It is not the BRITUME Social app.

## Stack
- React + TypeScript + Vite
- Tailwind CSS
- Express + TypeScript API
- PostgreSQL + Prisma
- React Router

## Requirements
- Node.js 20+
- npm 10+
- PostgreSQL 14+ (needed when enabling the backend database)

## Run the frontend
```bash
npm install
npm run dev
```
Open http://localhost:5173.

## Run the API
Copy `.env.example` to `server/.env`, configure `DATABASE_URL` and a strong `SESSION_SECRET`, then:
```bash
npm run dev:server
```
API health check: http://localhost:4000/api/health

## Database
```bash
npm run db:generate
npm run db:migrate -- --name init
```
The Prisma schema is an initial foundation and will evolve as features are implemented.

## Build and checks
```bash
npm run build
npm test
npm run lint
```

## Important implementation status
This ZIP is the initial project scaffold. Navigation, theme switching, page shells and the API health endpoint are implemented. Registration, email delivery, Google Play OAuth/API operations, uploads, analytics, review replies, subscriptions and production security integrations are **not yet live**. They require provider configuration, backend implementation, testing and policy review. No Google password should ever be collected.

## Security before deployment
- Use HTTPS and secure, HTTP-only cookies.
- Store password hashes using a modern password-hashing algorithm (Argon2id recommended).
- Keep secrets only in server environment variables / a secret manager.
- Use OAuth state and PKCE where applicable; request least-privilege scopes.
- Encrypt provider refresh tokens at rest and support revocation.
- Add rate limits, CSRF protections, audit logging, backups and account deletion workflows.
- Never commit `.env` files or signing keys.

## Project phases
1. Foundation: app shell, identity, database, authentication and Google connection.
2. Developer tools: applications, app overview, releases, analytics and reviews.
3. Complete platform: notifications, teams, security, settings, support and billing.

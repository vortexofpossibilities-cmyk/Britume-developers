# Architecture

The repository is split into a React client (`src/`) and Express API (`server/`).
The browser must never receive database credentials, OAuth client secrets, session
secrets or provider refresh tokens. The API owns authentication, authorization,
database access, integrations and audit events.

## Initial boundaries
- `src/pages`: route-level screens
- `src/components`: reusable presentation and navigation
- `src/features`: feature-specific UI and client services
- `server/src/routes`: HTTP endpoints
- `server/src/controllers`: request/response handling
- `server/src/services`: business rules and integrations
- `server/prisma`: database schema

## Trust boundaries
Google Play access must use official Google OAuth and supported APIs. Access and
data availability depend on account authorization, API permissions and Google
policy. Do not claim every Play Console operation is available through APIs.

# BRITUME DEVELOPERS

React + TypeScript + Vite developer workspace with an initial Supabase integration.

## Start locally
Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Connect Supabase
The local `.env.local` contains this project's Supabase URL and publishable key. It is excluded from Git by `.gitignore`. Do not commit private credentials or ever expose a Supabase secret/service-role key.

Before testing registration or application records, run the SQL migration in `supabase/migrations/202611260001_initial_schema.sql` from the Supabase SQL Editor. Then enable Email authentication and configure the email template to use `{{ .Token }}` for the six-digit OTP. See `docs/SUPABASE_SETUP.md`.

## Current working scope
- Root npm project setup and Vite scripts.
- Supabase browser client.
- Email/password signup and six-digit OTP verification.
- Profile creation trigger and RLS-protected per-user application table.
- Application create, list and delete UI.
- Existing dashboard, navigation and screen shells retained.

## Not yet live
Login and password reset, teams, workspace sharing, Google Play OAuth/API, app bundle uploads, publishing, Play analytics/reviews, notifications, billing, support ticket submission and production deployment are not implemented. The Express server remains a basic API foundation.

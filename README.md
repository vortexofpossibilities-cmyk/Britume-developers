# BRITUME DEVELOPERS

A React + TypeScript + Vite developer workspace foundation. It provides account screens (Supabase configuration required), a dashboard, application records, a seven-stage guided application setup, and workspace navigation.

## Run locally
1. Install Node.js 22.13 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` if using Supabase authentication and cloud records.
4. Run `npm run dev`.

Without Supabase configuration, the guided application wizard stores app drafts and demo app records in this browser only. With Supabase configured, it saves the supported application fields to the `applications` table.

## Important implementation boundaries
- Free workspace selection is available. Pro/Team are informational placeholders; no checkout or payment processing is active.
- The guided setup is a BRITUME checklist and record-keeping workflow. It does not submit Google Play declarations, upload APK/AAB files, run tests, or publish apps.
- Google Play OAuth, Android Publisher API integration, analytics ingestion, reviews sync, and live notifications are not implemented yet.
- GitHub Pages hosts the static frontend only. It does not run the Express server. A hosted backend is required for server-side functionality.

See `docs/` and `supabase/migrations/` for setup notes.

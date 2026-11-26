# Supabase setup for BRITUME DEVELOPERS

1. Open the BRITUME DEVELOPERS project in Supabase.
2. Open SQL Editor, create a query, paste `supabase/migrations/202611260001_initial_schema.sql`, and run it.
3. In Authentication > Providers, enable Email. Keep email confirmation enabled.
4. Configure the email template to send a six-digit token using `{{ .Token }}`. Add `http://localhost:5173/**` to the allowed redirect URLs.
5. Keep `.env.local` private and out of GitHub. The browser uses only the Supabase publishable key; never use a secret/service-role key in frontend code.
6. Run `npm install`, then `npm run dev`. Open `http://localhost:5173` and register with an email inbox you can access.
7. Verify the email, then open Applications and create a test record. It should appear in Supabase Table Editor under `applications`.

This migration currently provides profiles and per-user application records with RLS. Workspaces, team invitations, Play Console OAuth, publishing, analytics, reviews, billing and support workflows are not yet connected.

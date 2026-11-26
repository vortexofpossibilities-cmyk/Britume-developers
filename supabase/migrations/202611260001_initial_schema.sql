-- Run in Supabase Dashboard > SQL Editor. Enables private per-user application records.
create extension if not exists pgcrypto;
create table if not exists public.profiles (
 id uuid primary key references auth.users(id) on delete cascade,
 full_name text not null default '', country text not null default '',
 account_type text not null default 'individual' check(account_type in ('individual','company')),
 created_at timestamptz not null default now()
);
create table if not exists public.applications (
 id uuid primary key default gen_random_uuid(),
 owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
 name text not null,
 package_name text not null,
 description text,
 status text not null default 'draft' check(status in ('draft','active','archived')),
 created_at timestamptz not null default now(),
 unique(owner_id,package_name)
);
create index if not exists applications_owner_id_idx on public.applications(owner_id);
create or replace function public.create_developer_profile() returns trigger language plpgsql security definer set search_path=public as $$
begin
 insert into public.profiles(id,full_name,country,account_type)
 values(new.id,coalesce(new.raw_user_meta_data->>'full_name',''),coalesce(new.raw_user_meta_data->>'country',''),coalesce(new.raw_user_meta_data->>'account_type','individual'))
 on conflict(id) do nothing;
 return new;
end; $$;
drop trigger if exists britume_auth_user_profile on auth.users;
create trigger britume_auth_user_profile after insert on auth.users for each row execute procedure public.create_developer_profile();
alter table public.profiles enable row level security;
alter table public.applications enable row level security;
drop policy if exists profile_read_self on public.profiles;
create policy profile_read_self on public.profiles for select to authenticated using(id=auth.uid());
drop policy if exists profile_update_self on public.profiles;
create policy profile_update_self on public.profiles for update to authenticated using(id=auth.uid()) with check(id=auth.uid());
drop policy if exists applications_read_self on public.applications;
create policy applications_read_self on public.applications for select to authenticated using(owner_id=auth.uid());
drop policy if exists applications_insert_self on public.applications;
create policy applications_insert_self on public.applications for insert to authenticated with check(owner_id=auth.uid());
drop policy if exists applications_update_self on public.applications;
create policy applications_update_self on public.applications for update to authenticated using(owner_id=auth.uid()) with check(owner_id=auth.uid());
drop policy if exists applications_delete_self on public.applications;
create policy applications_delete_self on public.applications for delete to authenticated using(owner_id=auth.uid());
grant select,update on public.profiles to authenticated;
grant select,insert,update,delete on public.applications to authenticated;

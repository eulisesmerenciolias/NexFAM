-- NexFAM initial schema. Apply in Supabase SQL Editor when ready.
create extension if not exists pgcrypto;

create table if not exists public.family_groups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.member_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  family_id uuid references public.family_groups(id) on delete set null,
  display_name text not null,
  role_label text,
  created_at timestamptz not null default now()
);

create table if not exists public.conversations (
  id uuid primary key default gen_random_uuid(),
  family_id uuid references public.family_groups(id) on delete cascade,
  created_by uuid not null references auth.users(id) on delete cascade,
  title text not null default 'Nueva conversación',
  is_shared boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  author_id uuid not null references auth.users(id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);

alter table public.family_groups enable row level security;
alter table public.member_profiles enable row level security;
alter table public.conversations enable row level security;
alter table public.messages enable row level security;

-- Access policies will be added with the invitation and family-membership flow.
-- No broad read/write policies are created here: private data stays closed by default.

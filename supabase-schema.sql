-- Run this in Supabase SQL Editor: supabase.com → your project → SQL Editor

-- User profiles (extends Supabase auth.users)
create table public.user_profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  subjects text[] not null default '{}',
  session_year integer not null default 2026,
  zone integer not null default 4,
  stripe_customer_id text,
  subscription_status text check (subscription_status in ('trialing','active','canceled','past_due')),
  trial_end timestamptz,
  created_at timestamptz default now()
);

-- Topic progress (0=unchecked, 1=learning, 2=confident)
create table public.topic_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  topic_key text not null,
  state smallint not null default 0 check (state in (0,1,2)),
  updated_at timestamptz default now(),
  unique(user_id, topic_key)
);

-- Daily study activity (for streak heatmap)
create table public.study_activity (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  date date not null,
  minutes integer not null default 0,
  actions integer not null default 0,
  unique(user_id, date)
);

-- Past paper attempts
create table public.paper_attempts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  subject text not null,
  paper text not null,
  year text not null,
  score integer not null,
  max integer not null,
  date date not null default current_date,
  created_at timestamptz default now()
);

-- Per-topic personal notes
create table public.topic_notes (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  topic_key text not null,
  content text not null default '',
  updated_at timestamptz default now(),
  unique(user_id, topic_key)
);

-- Flashcard spaced repetition state
create table public.flashcard_sr (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  card_id text not null,
  interval integer not null default 1,
  next_review bigint not null default 0,
  last_passed boolean not null default false,
  unique(user_id, card_id)
);

-- Mock exam results
create table public.mock_results (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  score integer not null,
  max integer not null,
  breakdown jsonb not null default '{}',
  created_at timestamptz default now()
);

-- Row Level Security: users can only see/edit their own data
alter table public.user_profiles   enable row level security;
alter table public.topic_progress   enable row level security;
alter table public.study_activity   enable row level security;
alter table public.paper_attempts   enable row level security;
alter table public.topic_notes      enable row level security;
alter table public.flashcard_sr     enable row level security;
alter table public.mock_results     enable row level security;

-- RLS policies
create policy "own profile"     on public.user_profiles   for all using (auth.uid() = id);
create policy "own progress"    on public.topic_progress  for all using (auth.uid() = user_id);
create policy "own activity"    on public.study_activity  for all using (auth.uid() = user_id);
create policy "own attempts"    on public.paper_attempts  for all using (auth.uid() = user_id);
create policy "own notes"       on public.topic_notes     for all using (auth.uid() = user_id);
create policy "own sr"          on public.flashcard_sr    for all using (auth.uid() = user_id);
create policy "own mock"        on public.mock_results    for all using (auth.uid() = user_id);

-- Auto-create profile row when user signs up
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.user_profiles (id) values (new.id) on conflict do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Kör en gång i Supabase → SQL Editor
create table if not exists public.varvet_telemetry (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  user_id uuid default auth.uid(),
  session text not null,
  kind text not null check (kind in ('session','perf','error')),
  data jsonb not null
);
alter table public.varvet_telemetry enable row level security;
create policy "alla får skicka telemetri" on public.varvet_telemetry
  for insert to anon, authenticated with check (true);
-- Ingen select-policy: bara du (via dashboarden) kan läsa.
create index if not exists varvet_telemetry_created on public.varvet_telemetry (created_at desc);

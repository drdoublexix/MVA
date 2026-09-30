create table if not exists public.mva_rise_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  age smallint not null check (age between 15 and 99),
  preferred_track text not null,
  motivation text not null,
  created_at timestamptz not null default now()
);

alter table public.mva_rise_applications enable row level security;

grant insert on public.mva_rise_applications to anon;

create policy "Public can submit MVA Rise applications"
  on public.mva_rise_applications
  for insert
  to anon
  with check (age between 15 and 99);

create table if not exists public.nominee_registrations (
  id uuid primary key default gen_random_uuid(),
  nominee_name text not null,
  email text not null,
  phone text not null,
  category text not null,
  location text not null,
  achievements_summary text not null,
  payment_receipt_path text not null,
  payment_confirmed boolean not null default false check (payment_confirmed),
  registration_fee_ngn integer not null default 1000 check (registration_fee_ngn = 1000),
  created_at timestamptz not null default now()
);

alter table public.nominee_registrations enable row level security;

grant insert on public.nominee_registrations to anon;

create policy "Public can submit nominee registrations"
  on public.nominee_registrations
  for insert
  to anon
  with check (payment_confirmed and registration_fee_ngn = 1000);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'nominee-payment-receipts',
  'nominee-payment-receipts',
  false,
  10485760,
  array['application/pdf', 'image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do nothing;

create policy "Public can upload nominee payment receipts"
  on storage.objects
  for insert
  to anon
  with check (bucket_id = 'nominee-payment-receipts');

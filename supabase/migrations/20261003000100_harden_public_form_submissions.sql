alter table public.nominee_registrations
  add constraint nominee_registrations_name_length
    check (char_length(btrim(nominee_name)) between 2 and 120) not valid,
  add constraint nominee_registrations_email_format
    check (
      email = btrim(email)
      and char_length(email) between 3 and 254
      and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
    ) not valid,
  add constraint nominee_registrations_phone_format
    check (
      phone = btrim(phone)
      and phone ~ '^[+]?[0-9(). -]{6,29}$'
      and char_length(regexp_replace(phone, '[^0-9]', '', 'g')) >= 7
    ) not valid,
  add constraint nominee_registrations_category_allowed
    check (category in (
      'Best Content Creator of the Year',
      'Best DJ of the Year',
      'Song of the Year',
      'Best Dancer of the Year',
      'Best Male PR Content Creator of the Year',
      'Best Female PR Content Creator of the Year',
      'Visual Artist of the Year',
      'Music Artist of the Year',
      'Photographer/Videographer of the Year',
      'Beauty and Aesthetics Professional of the Year',
      'Entrepreneur of the Year',
      'Best Fashion Designer of the Year',
      'Public Figure of the Year'
    )) not valid,
  add constraint nominee_registrations_location_length
    check (char_length(btrim(location)) between 2 and 120) not valid,
  add constraint nominee_registrations_achievements_length
    check (char_length(btrim(achievements_summary)) between 20 and 3000) not valid,
  add constraint nominee_registrations_receipt_path_uuid
    check (payment_receipt_path ~* '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$') not valid;

alter table public.mva_rise_applications
  add constraint mva_rise_applications_name_length
    check (char_length(btrim(full_name)) between 2 and 120) not valid,
  add constraint mva_rise_applications_email_format
    check (
      email = btrim(email)
      and char_length(email) between 3 and 254
      and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
    ) not valid,
  add constraint mva_rise_applications_phone_format
    check (
      phone = btrim(phone)
      and phone ~ '^[+]?[0-9(). -]{6,29}$'
      and char_length(regexp_replace(phone, '[^0-9]', '', 'g')) >= 7
    ) not valid,
  add constraint mva_rise_applications_track_allowed
    check (preferred_track in (
      'Digital & Emerging Tech',
      'Creative Enterprise & Fashion',
      'Beauty Enterprise & Lifestyle',
      'Digital Media & Creator Economy',
      'Venture Incubation & Leadership',
      'Green Energy & CleanTech'
    )) not valid,
  add constraint mva_rise_applications_motivation_length
    check (char_length(btrim(motivation)) between 20 and 3000) not valid;

update storage.buckets
set public = false,
    file_size_limit = 10485760,
    allowed_mime_types = array['application/pdf', 'image/jpeg', 'image/png', 'image/webp']
where id = 'nominee-payment-receipts';

drop policy if exists "Public can upload nominee payment receipts" on storage.objects;

create policy "Public can upload nominee payment receipts"
  on storage.objects
  for insert
  to anon
  with check (
    bucket_id = 'nominee-payment-receipts'
    and name ~* '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'
  );
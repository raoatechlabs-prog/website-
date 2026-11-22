-- Partnership and contact enquiries submitted from the website.
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  track text not null check (track in ('talent', 'grants', 'investment', 'general')),
  name text not null check (char_length(name) between 1 and 200),
  email text not null check (char_length(email) between 3 and 320),
  organisation text check (char_length(organisation) <= 200),
  message text not null check (char_length(message) between 1 and 5000)
);

alter table public.enquiries enable row level security;

-- Anyone may submit an enquiry; nobody can read them with the public key.
-- Read enquiries from the Supabase dashboard or with the service role key.
drop policy if exists "Anyone can submit an enquiry" on public.enquiries;
create policy "Anyone can submit an enquiry"
  on public.enquiries for insert
  to anon, authenticated
  with check (true);

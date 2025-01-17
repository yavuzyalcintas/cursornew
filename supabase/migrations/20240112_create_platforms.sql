-- Create platforms table
create table if not exists public.platforms (
    id text primary key,
    name text not null,
    description text not null,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- Insert default platform options
insert into public.platforms (id, name, description) values
    ('web', 'Web Application', 'Build for browsers with responsive design'),
    ('mobile', 'Mobile Application', 'Native or cross-platform mobile apps'),
    ('desktop', 'Desktop Application', 'Cross-platform desktop applications');

-- Enable RLS
alter table public.platforms enable row level security;

-- Create policy to allow read access to all authenticated users
create policy "Enable read access for all authenticated users"
    on public.platforms for select
    to authenticated
    using (true); 
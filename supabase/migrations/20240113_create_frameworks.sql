-- Create frameworks table
create type framework_type as enum ('frontend', 'backend');

create table if not exists public.frameworks (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    value text not null unique,
    description text not null,
    icon text not null,
    type framework_type,
    platform text not null,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- Add some initial data
insert into public.frameworks (name, value, description, icon, type, platform) values
-- Web Frontend
('Next.js', 'next', 'React framework for production', 'SiNextdotjs', 'frontend', 'web'),
('React', 'react', 'JavaScript library for user interfaces', 'SiReact', 'frontend', 'web'),
('Vue.js', 'vue', 'Progressive JavaScript framework', 'SiVuedotjs', 'frontend', 'web'),
('Angular', 'angular', 'Platform for building web applications', 'SiAngular', 'frontend', 'web'),

-- Web Backend
('Express.js', 'express', 'Fast, unopinionated web framework for Node.js', 'SiNodedotjs', 'backend', 'web'),
('NestJS', 'nest', 'Progressive Node.js framework', 'SiNestjs', 'backend', 'web'),
('Django', 'django', 'High-level Python web framework', 'SiDjango', 'backend', 'web'),
('Laravel', 'laravel', 'PHP web application framework', 'SiLaravel', 'backend', 'web'),

-- Mobile
('React Native', 'react-native', 'Build native apps using React', 'SiReact', null, 'mobile'),
('Flutter', 'flutter', 'Google''s UI toolkit for mobile', 'SiFlutter', null, 'mobile'),
('Ionic', 'ionic', 'Cross-platform mobile app development', 'SiIonic', null, 'mobile'),

-- Desktop
('Electron', 'electron', 'Build cross-platform desktop apps', 'SiElectron', null, 'desktop'),
('Tauri', 'tauri', 'Build smaller, faster desktop apps', 'SiTauri', null, 'desktop');

-- Down Migration
drop table if exists public.frameworks;
drop type if exists framework_type; 
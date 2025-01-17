-- Create packages table
create table if not exists public.packages (
    id text primary key,
    name text not null,
    description text not null,
    framework_id text not null references public.frameworks(value) on delete cascade,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- Add RLS policies
alter table public.packages enable row level security;

create policy "Packages are viewable by everyone"
on public.packages for select
to authenticated, anon
using (true);

-- Create updated_at trigger
create trigger handle_updated_at before update on public.packages
  for each row execute procedure moddatetime (updated_at);

-- Insert package data
insert into public.packages (id, name, description, framework_id)
values
    -- React packages
    ('tailwind', 'Tailwind CSS', 'Utility-first CSS framework', 'react'),
    ('shadcn', 'shadcn/ui', 'Re-usable UI components', 'react'),
    ('redux', 'Redux', 'State management for JavaScript apps', 'react'),
    ('zustand', 'Zustand', 'Small, fast state management', 'react'),
    ('mui', 'Material-UI', 'React UI framework', 'react'),
    ('chakra', 'Chakra UI', 'Simple, modular component library', 'react'),
    ('styled-components', 'Styled Components', 'CSS-in-JS styling solution', 'react'),
    ('react-query', 'React Query', 'Data-fetching and caching library', 'react'),

    -- React Native packages
    ('native-base', 'Native Base', 'Universal UI components', 'react-native'),
    ('paper', 'React Native Paper', 'Material Design components', 'react-native'),
    ('react-navigation', 'React Navigation', 'Routing and navigation', 'react-native'),
    ('redux-rn', 'Redux', 'State management for JavaScript apps', 'react-native'),
    ('async-storage', 'Async Storage', 'Data storage system', 'react-native'),

    -- Next.js packages
    ('tailwind-next', 'Tailwind CSS', 'Utility-first CSS framework', 'next'),
    ('shadcn-next', 'shadcn/ui', 'Re-usable UI components', 'next'),
    ('zustand-next', 'Zustand', 'Small, fast state management', 'next'),
    ('next-auth', 'NextAuth.js', 'Authentication for Next.js', 'next'),
    ('swr', 'SWR', 'React Hooks for Data Fetching', 'next'),
    ('prisma-next', 'Prisma', 'Next-generation ORM', 'next'),

    -- Vue packages
    ('tailwind-vue', 'Tailwind CSS', 'Utility-first CSS framework', 'vue'),
    ('vuetify', 'Vuetify', 'Material Design component framework', 'vue'),
    ('pinia', 'Pinia', 'Intuitive state management', 'vue'),
    ('vueuse', 'VueUse', 'Collection of Vue Composition Utilities', 'vue'),
    ('vue-router', 'Vue Router', 'Official router for Vue.js', 'vue'),
    ('quasar', 'Quasar', 'Vue.js based framework', 'vue'),

    -- Angular packages
    ('tailwind-ng', 'Tailwind CSS', 'Utility-first CSS framework', 'angular'),
    ('angular-material', 'Angular Material', 'Material Design components', 'angular'),
    ('ngrx', 'NgRx', 'Reactive State Management', 'angular'),
    ('primeng', 'PrimeNG', 'Rich UI component library', 'angular'),
    ('ngx-bootstrap', 'NGX-Bootstrap', 'Bootstrap components', 'angular'),

    -- Svelte packages
    ('tailwind-svelte', 'Tailwind CSS', 'Utility-first CSS framework', 'svelte'),
    ('svelte-material', 'Svelte Material UI', 'Material Design components', 'svelte'),
    ('svelte-kit', 'SvelteKit', 'Application framework', 'svelte'),
    ('svelte-query', 'Svelte Query', 'Data management library', 'svelte'),
    ('svelte-motion', 'Motion', 'Animation library', 'svelte'),
    ('svelte-head', 'Svelte Head', 'Document head manager', 'svelte'),
    ('svelte-forms', 'Svelte Forms', 'Form validation', 'svelte'),
    ('svelte-i18n', 'Svelte I18n', 'Internationalization', 'svelte'),

    -- Nuxt packages
    ('tailwind-nuxt', 'Tailwind CSS', 'Utility-first CSS framework', 'nuxt'),
    ('vuetify-nuxt', 'Vuetify', 'Material Design component framework', 'nuxt'),
    ('pinia-nuxt', 'Pinia', 'Intuitive state management', 'nuxt'),
    ('nuxt-content', 'Nuxt Content', 'Content management system', 'nuxt'),
    ('nuxt-auth', 'Nuxt Auth', 'Authentication module', 'nuxt'),
    ('nuxt-i18n', 'Nuxt I18n', 'Internationalization', 'nuxt'),
    ('nuxt-image', 'Nuxt Image', 'Image optimization', 'nuxt'),
    ('nuxt-pwa', 'Nuxt PWA', 'Progressive Web App module', 'nuxt'),

    -- Remix packages
    ('tailwind-remix', 'Tailwind CSS', 'Utility-first CSS framework', 'remix'),
    ('remix-auth', 'Remix Auth', 'Authentication for Remix', 'remix'),
    ('prisma-remix', 'Prisma', 'Next-generation ORM', 'remix'),
    ('remix-utils', 'Remix Utils', 'Collection of utilities', 'remix'),
    ('remix-seo', 'Remix SEO', 'SEO utilities', 'remix'),
    ('remix-i18n', 'Remix I18n', 'Internationalization', 'remix'),
    ('remix-forms', 'Remix Forms', 'Form handling', 'remix'),
    ('remix-validated', 'Remix Validated', 'Data validation', 'remix'),

    -- Astro packages
    ('tailwind-astro', 'Tailwind CSS', 'Utility-first CSS framework', 'astro'),
    ('astro-seo', 'Astro SEO', 'SEO optimization', 'astro'),
    ('astro-image', 'Astro Image', 'Image optimization', 'astro'),
    ('astro-auth', 'Astro Auth', 'Authentication', 'astro'),
    ('astro-i18n', 'Astro I18n', 'Internationalization', 'astro'),
    ('astro-sitemap', 'Astro Sitemap', 'Sitemap generator', 'astro'),
    ('astro-forms', 'Astro Forms', 'Form handling', 'astro'),
    ('astro-icons', 'Astro Icons', 'Icon integration', 'astro'),

    -- Solid packages
    ('tailwind-solid', 'Tailwind CSS', 'Utility-first CSS framework', 'solid'),
    ('solid-app-router', 'Solid App Router', 'Routing solution', 'solid'),
    ('solid-meta', 'Solid Meta', 'Document head management', 'solid'),
    ('solid-auth', 'Solid Auth', 'Authentication', 'solid'),
    ('solid-query', 'Solid Query', 'Data management', 'solid'),
    ('solid-forms', 'Solid Forms', 'Form handling', 'solid'),
    ('solid-i18n', 'Solid I18n', 'Internationalization', 'solid'),
    ('solid-motion', 'Solid Motion', 'Animation library', 'solid'),

    -- Qwik packages
    ('tailwind-qwik', 'Tailwind CSS', 'Utility-first CSS framework', 'qwik'),
    ('qwik-city', 'Qwik City', 'Meta-framework for Qwik', 'qwik'),
    ('qwik-auth', 'Qwik Auth', 'Authentication solution', 'qwik'),
    ('qwik-ui', 'Qwik UI', 'UI component library', 'qwik'),
    ('qwik-store', 'Qwik Store', 'State management', 'qwik'),
    ('vite-qwik', 'Vite', 'Next Generation Frontend Tooling', 'qwik'),

    -- Express packages
    ('prisma-express', 'Prisma', 'Next-generation ORM', 'express'),
    ('mongoose', 'Mongoose', 'MongoDB ODM', 'express'),
    ('passport', 'Passport', 'Authentication middleware', 'express'),
    ('swagger-express', 'Swagger UI', 'API documentation', 'express'),
    ('express-validator', 'Express Validator', 'Input validation', 'express'),
    ('multer', 'Multer', 'File upload handling', 'express'),
    ('helmet', 'Helmet', 'Security middleware', 'express'),
    ('rate-limiter', 'Rate Limiter', 'Rate limiting', 'express'),

    -- Django packages
    ('django-rest', 'Django REST', 'REST framework', 'django'),
    ('celery', 'Celery', 'Distributed task queue', 'django'),
    ('channels', 'Django Channels', 'Async support', 'django'),
    ('django-allauth', 'Django Allauth', 'Authentication', 'django'),
    ('django-storages', 'Django Storages', 'Storage backends', 'django'),
    ('django-cors', 'Django CORS', 'CORS handling', 'django'),
    ('django-filter', 'Django Filter', 'Dynamic queryset filtering', 'django'),
    ('django-debug', 'Django Debug Toolbar', 'Debugging tool', 'django'),

    -- Laravel packages
    ('livewire', 'Livewire', 'Full-stack framework', 'laravel'),
    ('sanctum', 'Laravel Sanctum', 'API authentication', 'laravel'),
    ('horizon', 'Laravel Horizon', 'Queue monitoring', 'laravel'),
    ('telescope', 'Laravel Telescope', 'Debug assistant', 'laravel'),
    ('socialite', 'Laravel Socialite', 'OAuth authentication', 'laravel'),
    ('scout', 'Laravel Scout', 'Full-text search', 'laravel'),
    ('cashier', 'Laravel Cashier', 'Subscription billing', 'laravel'),
    ('nova', 'Laravel Nova', 'Administration panel', 'laravel'),

    -- Nest packages
    ('typeorm', 'TypeORM', 'ORM for TypeScript', 'nest'),
    ('swagger-nest', 'Swagger', 'API documentation', 'nest'),
    ('passport-nest', 'Passport', 'Authentication', 'nest'),
    ('cache-manager', 'Cache Manager', 'Caching', 'nest'),
    ('bull', 'Bull', 'Queue management', 'nest'),
    ('config', 'Config', 'Configuration', 'nest'),
    ('graphql', 'GraphQL', 'GraphQL integration', 'nest'),
    ('terminus', 'Terminus', 'Health checks', 'nest'),

    -- Spring packages
    ('spring-security', 'Spring Security', 'Security framework', 'spring'),
    ('spring-data-jpa', 'Spring Data JPA', 'Data persistence', 'spring'),
    ('spring-cloud', 'Spring Cloud', 'Cloud-native development', 'spring'),

    -- FastAPI packages
    ('sqlalchemy', 'SQLAlchemy', 'SQL toolkit and ORM', 'fastapi'),
    ('pydantic', 'Pydantic', 'Data validation', 'fastapi'),
    ('alembic', 'Alembic', 'Database migrations', 'fastapi'),

    -- Rails packages
    ('devise', 'Devise', 'Authentication solution', 'rails'),
    ('sidekiq', 'Sidekiq', 'Background processing', 'rails'),
    ('rspec', 'RSpec', 'Testing framework', 'rails'),

    -- .NET packages
    ('ef-core', 'Entity Framework Core', 'ORM for .NET', 'dotnet'),
    ('identity', 'ASP.NET Identity', 'Authentication & authorization', 'dotnet'),
    ('signalr', 'SignalR', 'Real-time functionality', 'dotnet'),

    -- Fiber packages
    ('gorm', 'GORM', 'ORM library for Go', 'fiber'),
    ('jwt-go', 'JWT Go', 'JWT implementation', 'fiber'),
    ('fiber-swagger', 'Fiber Swagger', 'API documentation', 'fiber'),
    ('fiber-cache', 'Fiber Cache', 'Cache middleware', 'fiber'),
    ('fiber-monitor', 'Fiber Monitor', 'Real-time monitoring', 'fiber'),
    ('fiber-cors', 'Fiber CORS', 'CORS middleware', 'fiber'),

    -- Phoenix packages
    ('ecto', 'Ecto', 'Database wrapper', 'phoenix'),
    ('absinthe', 'Absinthe', 'GraphQL toolkit', 'phoenix'),
    ('guardian', 'Guardian', 'Authentication solution', 'phoenix'),
    ('phoenix-live-view', 'LiveView', 'Real-time UI updates', 'phoenix'),
    ('phoenix-pubsub', 'PubSub', 'Real-time communication', 'phoenix'),
    ('swoosh', 'Swoosh', 'Email handling', 'phoenix'),

    -- Flutter packages
    ('provider', 'Provider', 'State management', 'flutter'),
    ('get-it', 'Get It', 'Dependency injection', 'flutter'),
    ('bloc', 'Bloc', 'Business logic components', 'flutter'),
    ('dio', 'Dio', 'HTTP client', 'flutter'),
    ('hive', 'Hive', 'Lightweight database', 'flutter'),
    ('flutter-form', 'Flutter Form Builder', 'Form management', 'flutter'),
    ('image-picker', 'Image Picker', 'Media selection', 'flutter'),
    ('flutter-local', 'Flutter Localizations', 'Internationalization', 'flutter'),

    -- Ionic packages
    ('capacitor-ionic', 'Capacitor', 'Native runtime', 'ionic'),
    ('ionic-storage', 'Ionic Storage', 'Storage engine', 'ionic'),
    ('ionic-native', 'Ionic Native', 'Native functionality', 'ionic'),
    ('ionic-animations', 'Ionic Animations', 'Animation utilities', 'ionic'),
    ('ionic-auth', 'Ionic Auth Connect', 'Authentication service', 'ionic'),
    ('ionic-pwa', 'PWA Elements', 'Progressive Web App toolkit', 'ionic'),

    -- Kotlin packages
    ('coroutines', 'Coroutines', 'Asynchronous programming', 'kotlin'),
    ('ktor', 'Ktor', 'Web framework', 'kotlin'),
    ('room', 'Room', 'Database persistence', 'kotlin'),
    ('koin', 'Koin', 'Dependency injection', 'kotlin'),
    ('retrofit', 'Retrofit', 'HTTP client', 'kotlin'),
    ('compose', 'Jetpack Compose', 'UI toolkit', 'kotlin'),
    ('datastore', 'DataStore', 'Data storage', 'kotlin'),
    ('navigation', 'Navigation', 'Navigation component', 'kotlin'),

    -- Swift packages
    ('combine', 'Combine', 'Reactive programming', 'swift'),
    ('swiftui-navigation', 'SwiftUI Navigation', 'Navigation stack', 'swift'),
    ('swift-charts', 'Swift Charts', 'Data visualization', 'swift'),
    ('core-data', 'Core Data', 'Data persistence', 'swift'),
    ('alamofire', 'Alamofire', 'Networking library', 'swift'),
    ('swift-lint', 'SwiftLint', 'Code quality enforcement', 'swift'),

    -- Capacitor packages
    ('ionic-cap', 'Ionic Framework', 'UI components', 'capacitor'),
    ('storage-cap', 'Storage', 'Data persistence', 'capacitor'),
    ('camera-cap', 'Camera', 'Camera access', 'capacitor'),
    ('geolocation-cap', 'Geolocation', 'Location services', 'capacitor'),
    ('push-notifications-cap', 'Push Notifications', 'Notification handling', 'capacitor'),
    ('app-auth-cap', 'App Auth', 'Authentication handling', 'capacitor'),

    -- NativeScript packages
    ('ns-ui', 'NativeScript UI', 'UI components', 'nativescript'),
    ('ns-core', 'Core Theme', 'Base theme', 'nativescript'),
    ('ns-firebase', 'Firebase', 'Firebase integration', 'nativescript'),
    ('ns-payments', 'Payments', 'Payment processing', 'nativescript'),
    ('ns-geolocation', 'Geolocation', 'Location services', 'nativescript'),
    ('ns-camera', 'Camera', 'Camera functionality', 'nativescript'),

    -- Expo packages
    ('expo-ui', 'Expo UI Kitten', 'UI framework', 'expo'),
    ('expo-router', 'Expo Router', 'File-based routing', 'expo'),
    ('expo-auth', 'Expo Auth', 'Authentication', 'expo'),
    ('expo-image', 'Expo Image', 'Image handling', 'expo'),
    ('expo-location', 'Expo Location', 'Location services', 'expo'),
    ('expo-notifications', 'Expo Notifications', 'Push notifications', 'expo'),
    ('expo-storage', 'Expo SecureStore', 'Secure storage', 'expo'),
    ('expo-updates', 'Expo Updates', 'OTA updates', 'expo'),

    -- Framework7 packages
    ('f7-core', 'Framework7 Core', 'Core components', 'framework7'),
    ('f7-vue', 'Framework7 Vue', 'Vue integration', 'framework7'),
    ('f7-react', 'Framework7 React', 'React integration', 'framework7'),
    ('f7-icons', 'Framework7 Icons', 'Icon pack', 'framework7'),
    ('f7-store', 'Framework7 Store', 'State management', 'framework7'),
    ('cordova', 'Apache Cordova', 'Mobile development', 'framework7'),

    -- Electron packages
    ('tailwind-electron', 'Tailwind CSS', 'Utility-first CSS framework', 'electron'),
    ('shadcn-electron', 'shadcn/ui', 'Re-usable UI components', 'electron'),
    ('redux-electron', 'Redux', 'State management for JavaScript apps', 'electron'),
    ('electron-store', 'Electron Store', 'Data persistence', 'electron'),
    ('electron-builder', 'Electron Builder', 'Application packaging and distribution', 'electron'),
    ('electron-updater', 'Electron Updater', 'Auto-update functionality', 'electron'),
    ('electron-log', 'Electron Log', 'Logging utility', 'electron'),
    ('electron-devtools', 'DevTools Installer', 'Development tools integration', 'electron'),
    ('electron-contextmenu', 'Context Menu', 'Native context menu', 'electron'),
    ('electron-window-state', 'Window State', 'Window state persistence', 'electron'),
    ('electron-reload', 'Hot Reload', 'Development hot reloading', 'electron'),
    ('electron-squirrel', 'Squirrel', 'Windows installer and updater', 'electron'),
    ('electron-dl', 'Download Manager', 'File download management', 'electron'),
    ('electron-is-dev', 'Is Dev', 'Development environment detection', 'electron'),
    ('electron-serve', 'Static File Server', 'Static file serving', 'electron'),
    ('electron-debug', 'Debug', 'Debugging utilities', 'electron'),

    -- Tauri packages
    ('tauri-ui', 'Tauri UI', 'UI components', 'tauri'),
    ('tauri-store', 'Tauri Store', 'State persistence', 'tauri'),
    ('tauri-plugin-sql', 'SQL Plugin', 'Database integration', 'tauri'),
    ('tauri-plugin-fs', 'File System', 'File system access', 'tauri'),
    ('tauri-plugin-window', 'Window Manager', 'Window management', 'tauri'),
    ('tauri-bundler', 'Bundler', 'Application bundling', 'tauri'),

    -- Qt packages
    ('qt-quick', 'Qt Quick', 'UI framework', 'qt'),
    ('qt-charts', 'Qt Charts', 'Charting components', 'qt'),
    ('qt-network', 'Qt Network', 'Networking capabilities', 'qt'),
    ('qt-multimedia', 'Qt Multimedia', 'Media handling', 'qt'),
    ('qt-webengine', 'Qt WebEngine', 'Web content integration', 'qt'),
    ('qt-sql', 'Qt SQL', 'Database integration', 'qt'),

    -- GTK packages
    ('gtk-rs', 'GTK-rs', 'Rust bindings for GTK', 'gtk'),
    ('libadwaita', 'Libadwaita', 'GNOME components', 'gtk'),
    ('gtk-source', 'GTK Source View', 'Source code editing', 'gtk'),
    ('gtk-layer-shell', 'Layer Shell', 'Wayland integration', 'gtk'),
    ('gtk-sys', 'GTK Sys', 'Low-level bindings', 'gtk'),
    ('gio', 'GIO', 'File system operations', 'gtk'),

    -- WPF packages
    ('material-design', 'Material Design', 'UI components', 'wpf'),
    ('prism', 'Prism', 'MVVM framework', 'wpf'),
    ('mahapps', 'MahApps.Metro', 'Modern UI toolkit', 'wpf'),
    ('caliburn', 'Caliburn.Micro', 'MVVM framework', 'wpf'),
    ('extended-wpf', 'Extended WPF', 'Additional controls', 'wpf'),
    ('wpf-toolkit', 'WPF Toolkit', 'Extra controls', 'wpf'),
    ('oxyplot', 'OxyPlot', 'Plotting library', 'wpf'),
    ('live-charts', 'Live Charts', 'Data visualization', 'wpf'),

    -- JavaFX packages
    ('controlsfx', 'ControlsFX', 'UI controls', 'javafx'),
    ('jfoenix', 'JFoenix', 'Material Design', 'javafx'),
    ('tilesfx', 'TilesFX', 'Dashboard tiles', 'javafx'),
    ('medusa', 'Medusa', 'Gauges and indicators', 'javafx'),
    ('formsfx', 'FormsFX', 'Form handling', 'javafx'),
    ('validatorfx', 'ValidatorFX', 'Input validation', 'javafx'),
    ('ikonli', 'Ikonli', 'Icon packs', 'javafx'),
    ('afterburner', 'Afterburner', 'Dependency injection', 'javafx'),

    -- Avalonia packages
    ('avalonia-ui', 'Avalonia UI', 'UI framework', 'avalonia'),
    ('reactive-ui', 'ReactiveUI', 'MVVM framework', 'avalonia'),
    ('avalonia-controls', 'Controls', 'Additional controls', 'avalonia'),
    ('avalonia-xaml', 'XAML Behaviors', 'XAML behaviors', 'avalonia'),
    ('avalonia-themes', 'Themes', 'Theming support', 'avalonia'),
    ('avalonia-svg', 'SVG Icons', 'SVG support', 'avalonia'),
    ('avalonia-markup', 'Markup', 'UI markup extensions', 'avalonia'),
    ('avalonia-diagnostics', 'Diagnostics', 'Development tools', 'avalonia'),

    -- wxWidgets packages
    ('wx-core', 'wxWidgets Core', 'Core components', 'wxwidgets'),
    ('wx-extra', 'wxWidgets Extra', 'Additional controls', 'wxwidgets'),
    ('wx-gl', 'OpenGL Canvas', '3D graphics support', 'wxwidgets'),
    ('wx-media', 'Media Library', 'Multimedia support', 'wxwidgets'),
    ('wx-net', 'Network Library', 'Networking capabilities', 'wxwidgets'),
    ('wx-xml', 'XML Support', 'XML processing', 'wxwidgets'),

    -- Neutralino packages
    ('neu-js', 'Neutralino.js', 'Core framework', 'neutralino'),
    ('neu-storage', 'Storage', 'Data persistence', 'neutralino'),
    ('neu-filesystem', 'File System', 'File operations', 'neutralino'),
    ('neu-os', 'OS', 'Operating system integration', 'neutralino'),
    ('neu-updater', 'Auto Updater', 'Application updates', 'neutralino'),
    ('neu-debug', 'Debug Tools', 'Debugging utilities', 'neutralino'),

    -- Wails packages
    ('wails-ui', 'Wails UI', 'UI components', 'wails'),
    ('wails-runtime', 'Runtime', 'Core runtime', 'wails'),
    ('wails-events', 'Events', 'Event system', 'wails'),
    ('wails-store', 'Store', 'State management', 'wails'),
    ('wails-dialog', 'Dialog', 'Native dialogs', 'wails'),
    ('wails-clipboard', 'Clipboard', 'Clipboard management', 'wails'),

    -- MAUI packages
    ('maui-toolkit', 'MAUI Toolkit', 'UI controls', 'maui'),
    ('maui-essentials', 'MAUI Essentials', 'Core features', 'maui'),
    ('maui-graphics', 'Graphics', 'Graphics capabilities', 'maui'),
    ('maui-maps', 'Maps', 'Mapping integration', 'maui'),
    ('maui-media', 'Media', 'Media handling', 'maui'),
    ('maui-auth', 'Authentication', 'Authentication services', 'maui')
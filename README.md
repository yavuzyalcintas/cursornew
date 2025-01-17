# cursor.new

Generate production-ready projects with automated documentation and industry best practices.

## Features

- 🤖 **AI-Powered Setup**

  - Intelligent tech stack recommendations
  - Framework selection for web, mobile, and desktop
  - Testing tools and configuration
  - Project-specific optimizations

- 📚 **Smart Documentation**

  - Automated PRD & technical specs
  - Development guidelines generation
  - Code style documentation
  - AI-optimized prompts and rules

- ⚡ **Modern Development Standards**

  - TypeScript configuration
  - ESLint and Prettier setup
  - Pre-commit hooks
  - CI/CD templates for GitHub Actions

- 🔄 **Smart Dependencies**

  - Curated package selection
  - Automatic security scanning
  - Version management
  - Dependency conflict resolution

- 🛠️ **Developer Tooling**

  - Custom Cursor AI rules
  - Project presets
  - Team workflow templates
  - Code review prompts

- 🎨 **Technology Support**
  - Frontend: React, Vue, Next.js, TypeScript
  - Backend: Node.js, Python, Go
  - Mobile: React Native, Flutter, Kotlin, Swift
  - Desktop: Electron, Tauri, macOS, Windows

## Tech Stack

- **Frontend**: Next.js 15+ with TypeScript
- **Backend**: Supabase
- **UI**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand
- **Data Fetching**: React Query
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **Analytics**: Vercel Analytics
- **Performance**: Vercel Speed Insights

## Prerequisites

- Node.js 18+
- pnpm
- Supabase CLI (for local development)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yavuzyalcintas/cursornew.git
cd cursornew
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build production bundle
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm supabase:generate` - Generate Supabase types
- `pnpm generate:og` - Generate OG images

## Project Structure

```
app/                  # Next.js 13+ app directory
  (auth)/            # Authentication routes
  api/               # API routes
  projects/          # Project-related pages
components/          # React components
  ui/               # UI components
  forms/            # Form components
  projects/         # Project-specific components
  shared/           # Shared components
lib/                # Utilities and services
  supabase/        # Supabase services
  store/           # State management
  hooks/           # Custom hooks
  utils/           # Helper functions
public/             # Static assets
scripts/            # Build and utility scripts
supabase/           # Supabase configuration
  migrations/      # Database migrations
docs/               # Documentation
```

## Development Guidelines

### Code Style

- Follow TypeScript best practices with strict type checking
- Use ESLint and Prettier for code formatting
- Follow component naming conventions (PascalCase)
- Organize imports according to the style guide
- Write comprehensive documentation for new features

### State Management

- Use Zustand for global state
- Keep state close to where it's used
- Use React Query for server state
- Implement proper caching strategies

### Testing

- Write tests for all new features
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies
- Test edge cases and error scenarios

### Performance

- Implement proper code splitting
- Use Next.js Image component for images
- Implement proper caching strategies
- Minimize bundle size
- Use proper lazy loading

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software licensed under the Cursor New Proprietary License - see the [LICENSE](LICENSE) file for details. The software is not open source and requires a valid license for use. For licensing inquiries, please contact myavuzyalcintas@gmail.com.

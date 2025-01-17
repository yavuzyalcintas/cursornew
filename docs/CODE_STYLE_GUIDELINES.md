# Code Style Guidelines

## Table of Contents

- [General Principles](#general-principles)
- [TypeScript Guidelines](#typescript-guidelines)
- [React/Next.js Best Practices](#reactnextjs-best-practices)
- [File Structure](#file-structure)
- [Naming Conventions](#naming-conventions)
- [Documentation](#documentation)
- [Testing](#testing)
- [State Management](#state-management)
- [CSS/Tailwind Guidelines](#csstailwind-guidelines)
- [Code Review Process](#code-review-process)

## General Principles

- Write clean, readable, and maintainable code
- Follow DRY (Don't Repeat Yourself) principles
- Keep functions small and focused on a single responsibility
- Prioritize code readability over clever solutions
- Comment only when necessary to explain complex logic
- Use meaningful variable and function names

## TypeScript Guidelines

### Type Definitions

```typescript
// DO
interface UserProps {
  id: string;
  name: string;
  email: string;
}

// DON'T
interface Props {
  id: string;
  n: string;
  e: string;
}
```

### Type Assertions

- Prefer type annotations over type assertions
- Use `as` syntax over angle brackets

```typescript
// DO
const user = response as User;

// DON'T
const user = <User>response;
```

### Null Checks

- Use optional chaining and nullish coalescing

```typescript
// DO
const userName = user?.name ?? "Anonymous";

// DON'T
const userName = user && user.name ? user.name : "Anonymous";
```

## React/Next.js Best Practices

### Component Structure

```typescript
// DO
const ProjectCard: React.FC<ProjectCardProps> = ({ name, description }) => {
  return (
    <div className="rounded-lg p-4">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

// DON'T
function ProjectCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
}
```

### Hooks Usage

- Place hooks at the top of the component
- Use custom hooks for reusable logic
- Follow hooks naming convention (use'Hook')

```typescript
// DO
const useProjectConfig = () => {
  const [config, setConfig] = useState<ProjectConfig>();
  // ... hook logic
  return { config, setConfig };
};

// DON'T
const getProjectConfig = () => {
  const [config, setConfig] = useState();
  // ... logic
};
```

## File Structure

```
├── app/                            # Next.js 13+ app directory
│   ├── (auth)/                    # Authentication route group
│   │   ├── login/
│   │   └── signup/
│   ├── api/                       # API routes
│   ├── projects/                  # Project-related routes
│   └── layout.tsx                 # Root layout
├── components/
│   ├── ui/                        # ShadcN UI components
│   ├── forms/                     # Form components
│   ├── projects/                  # Project-specific components
│   └── shared/                    # Shared components
├── config/                        # Configuration files
│   ├── site.ts
│   └── navigation.ts
├── hooks/                         # Custom React hooks
├── lib/                          # Utility libraries
│   ├── supabase/                 # Supabase client & utils
│   ├── utils/                    # General utilities
│   └── validations/              # Form validations
├── public/                       # Static assets
├── styles/                       # Global styles
│   └── globals.css
├── types/                        # TypeScript type definitions
│   ├── api.ts
│   ├── projects.ts
│   └── supabase.ts
├── middleware.ts                 # Next.js middleware
├── next.config.js               # Next.js configuration
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies
```

### Directory Purposes

- `app/`: Next.js 13+ app directory for file-based routing
- `components/`: Reusable React components
  - `ui/`: ShadcN UI components
  - `forms/`: Form-related components
  - `projects/`: Project setup wizard components
  - `shared/`: Common components used across features
- `config/`: Application configuration files
- `hooks/`: Custom React hooks for shared logic
- `lib/`: Utility functions and external service integrations
- `public/`: Static assets (images, fonts, etc.)
- `styles/`: Global styles and Tailwind utilities
- `types/`: TypeScript type definitions and interfaces

### Key Files

- `middleware.ts`: Authentication and routing middleware
- `next.config.js`: Next.js configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration

## Naming Conventions

### Files and Folders

- React components: PascalCase (e.g., `ProjectCard.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useProjectConfig.ts`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Test files: Same name as source with `.test` suffix

### Variables and Functions

- Variables: camelCase
- React components: PascalCase
- Interfaces/Types: PascalCase with descriptive names
- Constants: UPPER_SNAKE_CASE

## Documentation

### Component Documentation

```typescript
/**
 * ProjectCard displays project information in a card format
 * @param {string} name - The name of the project
 * @param {string} description - Project description
 * @param {ProjectConfig} config - Project configuration
 * @returns {JSX.Element}
 */
```

### Function Documentation

```typescript
/**
 * Formats project configuration for API submission
 * @param {ProjectConfig} config - Raw project configuration
 * @returns {APIProjectConfig} Formatted configuration
 * @throws {ValidationError} If required fields are missing
 */
```

## Testing

### Test Structure

```typescript
describe("ProjectCard", () => {
  it("should render project name and description", () => {
    // Test implementation
  });

  it("should handle empty props gracefully", () => {
    // Test implementation
  });
});
```

### Testing Guidelines

- Write tests for all new features
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies
- Test edge cases and error scenarios

## State Management

### Local State

- Use `useState` for simple component state
- Use `useReducer` for complex state logic
- Keep state as close to where it's used as possible

### Global State

- Use Supabase for persistent data
- Consider React Context for shared UI state
- Document state management decisions

## CSS/Tailwind Guidelines

### Class Organization

```typescript
// DO
<div className="
  flex items-center justify-between  // Layout
  p-4 m-2                           // Spacing
  bg-white rounded-lg               // Visual
  hover:bg-gray-50                  // Interactive
  transition-all duration-200       // Animation
">

// DON'T
<div className="p-4 hover:bg-gray-50 flex m-2 items-center bg-white justify-between rounded-lg">
```

### Custom Classes

- Use @apply for repeated utility combinations
- Keep custom CSS to a minimum
- Document custom utility classes

## Code Review Process

### Pre-submission Checklist

- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] Documentation is updated
- [ ] No console.log statements
- [ ] No unused imports/variables
- [ ] Proper error handling
- [ ] Performance considerations addressed

### Review Guidelines

- Review for functionality and style
- Check for security implications
- Verify error handling
- Ensure proper typing
- Validate documentation
- Consider performance impact

## Commit Messages

### Format

```
type(scope): description

[optional body]

[optional footer]
```

### Types

- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes
- refactor: Code refactoring
- test: Adding tests
- chore: Maintenance tasks

Example:

```
feat(project-config): add technology stack selection

- Implements framework selection dropdown
- Adds validation for compatible choices
- Updates configuration preview

Closes #123
```

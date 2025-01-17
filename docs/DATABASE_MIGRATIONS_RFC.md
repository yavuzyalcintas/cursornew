# Database Migrations RFC

## Short Summary

This RFC establishes the guidelines and processes for managing Supabase database migrations in the project. It ensures consistent, traceable, and reversible database changes while maintaining data integrity and type safety.

## Background and Motivation

As our application evolves, we need a reliable way to:

- Track database schema changes
- Maintain version control for database structure
- Enable team collaboration on database changes
- Ensure safe rollback capabilities
- Keep TypeScript types in sync with the database schema

## Technical Architecture

### 1. Migration Directory Structure

```
supabase/
  migrations/
    YYYYMMDDHHMMSS_initial_schema.sql
    YYYYMMDDHHMMSS_add_user_preferences.sql
    YYYYMMDDHHMMSS_create_projects_table.sql
  seed/
    seed.sql
  types/
    supabase.ts
```

### 2. Migration File Format

```sql
-- Migration: Add user preferences
-- Created at: 2024-01-11 14:30:00
-- Description: Adds user preferences table with theme and notification settings

-- Up Migration
create table if not exists public.user_preferences (
    id uuid references auth.users(id) primary key,
    theme text not null default 'system',
    notifications_enabled boolean not null default true,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

comment on table public.user_preferences is 'Stores user preference settings';

-- Down Migration
drop table if exists public.user_preferences;
```

### 3. Type Generation Process

```bash
# After applying migrations
supabase gen types typescript --project-id <project-id> > lib/supabase/database.types.ts
```

## Implementation Strategy

### Phase 1: Setup (Day 1)

1. Create migration directory structure
2. Set up Supabase CLI in CI/CD
3. Document migration commands
4. Create initial schema migration

### Phase 2: Process Implementation (Day 2)

1. Create migration templates
2. Set up type generation workflow
3. Document rollback procedures
4. Create test database for migration testing

### Phase 3: Team Training (Day 3)

1. Document migration guidelines
2. Create example migrations
3. Set up review process
4. Create troubleshooting guide

## Migration Guidelines

### Creating New Migrations

1. Never modify existing migrations
2. One logical change per migration
3. Include both up and down migrations
4. Test migrations locally first
5. Update types after migration
6. Commit migration and updated types together

### Naming Conventions

- Use timestamp prefix: YYYYMMDDHHMMSS
- Use descriptive names: add_user_preferences
- Separate words with underscores
- Include operation type: create_table, add_column, etc.

### Safety Checks

- Use `if exists` and `if not exists` clauses
- Include appropriate constraints
- Add table and column comments
- Consider existing data
- Test down migrations

## Additional Considerations

### Security

- No sensitive data in migrations
- Use RLS policies for table access
- Add appropriate indices
- Consider performance impact

### Testing

- Test up and down migrations
- Verify data integrity
- Check foreign key constraints
- Validate type generation

### Monitoring

- Log migration applications
- Track schema version
- Monitor migration duration
- Check for failed migrations

## Success Metrics

1. Zero failed migrations in production
2. Complete type coverage
3. Successful rollbacks when needed
4. Clear migration history
5. Minimal downtime during migrations

## Commands Reference

```bash
# Create new migration
supabase migration new add_user_preferences

# Apply migrations
supabase db reset

# Generate types
supabase gen types typescript --project-id <project-id> > lib/supabase/database.types.ts

# Verify migration status
supabase db status
```

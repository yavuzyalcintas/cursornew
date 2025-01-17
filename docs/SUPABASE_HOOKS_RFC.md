# Supabase Services and Hooks Architecture RFC

## Short Summary

This RFC proposes a standardized approach for implementing Supabase queries and mutations using a service layer pattern combined with React Query hooks. This architecture ensures consistent data fetching, caching, and state management across the application.

## Background and Motivation

- Need for consistent data access patterns across the application
- Centralized error handling and type safety
- Efficient caching and state management with React Query
- Reusable service layer for Supabase operations

## Technical Architecture

### Service Layer Structure

```typescript
// lib/supabase/services/[entity]-service.ts
export class EntityService extends BaseService {
  private static instance: EntityService;

  private constructor() {
    super();
  }

  public static getInstance(): EntityService {
    if (!EntityService.instance) {
      EntityService.instance = new EntityService();
    }
    return EntityService.instance;
  }

  // Query methods
  async getEntity(id: string): Promise<Entity | null> {
    return this.handleError(async () => {
      const { data, error } = await this.supabase
        .from("entity")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data;
    });
  }

  // Mutation methods
  async updateEntity(id: string, updates: Partial<Entity>): Promise<Entity> {
    return this.handleError(async () => {
      const { data, error } = await this.supabase
        .from("entity")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    });
  }
}
```

### React Query Hooks Structure

```typescript
// lib/hooks/use-entity.ts
export function useEntity(id: string) {
  const service = EntityService.getInstance();

  return useQuery({
    queryKey: ["entity", id],
    queryFn: () => service.getEntity(id),
  });
}

export function useUpdateEntity() {
  const service = EntityService.getInstance();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<Entity> }) =>
      service.updateEntity(id, updates),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["entity", data.id] });
    },
  });
}
```

## Implementation Strategy

### Phase 1: Base Infrastructure

1. Implement BaseService with error handling and Supabase client management
2. Create utility types and error handling mechanisms
3. Set up React Query provider and configuration

### Phase 2: Service Implementation

1. Create service classes for each entity
2. Implement CRUD operations in services
3. Add type safety and validation

### Phase 3: Hook Implementation

1. Create React Query hooks for each service
2. Implement optimistic updates
3. Set up proper cache invalidation

### Phase 4: Migration

1. Replace existing direct Supabase calls with new hooks
2. Update components to use new data fetching pattern
3. Add error boundaries and loading states

## Additional Considerations

### Error Handling

- Centralized error handling in BaseService
- Custom error types for different scenarios
- Error boundaries in React components

### Performance

- Proper React Query cache configuration
- Optimistic updates for better UX
- Batch operations where possible

### Security

- Row Level Security (RLS) policies
- Type-safe database operations
- Proper error message sanitization

### Testing

- Unit tests for services
- Integration tests for hooks
- Mock Supabase client for testing

## Success Metrics

- Reduced duplicate code
- Improved type safety
- Better error handling
- Faster development velocity
- Improved application performance

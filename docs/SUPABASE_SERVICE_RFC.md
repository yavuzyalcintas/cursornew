# Supabase Service Layer and React Query Integration RFC

## Short Summary

This RFC proposes implementing a dedicated service layer for Supabase interactions and integrating React Query for state management and data fetching. This change will improve code organization, type safety, and caching while reducing direct Supabase client usage throughout the application.

## Background and Motivation

Currently, Supabase client calls are scattered throughout the application, leading to:

- Duplicated logic
- Inconsistent error handling
- No standardized caching strategy
- Difficult testing and mocking
- Type safety challenges

## Technical Architecture

### 1. Service Layer Structure

```typescript
// services/supabase/types.ts
export interface Project {
  id: string;
  name: string;
  // ... other fields
}

// services/supabase/projects.ts
export class ProjectService {
  constructor(private supabase: SupabaseClient) {}

  async getProject(id: string): Promise<Project> {
    const { data, error } = await this.supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw new DatabaseError(error.message);
    return data;
  }

  // Other CRUD operations...
}
```

### 2. React Query Integration

```typescript
// hooks/projects.ts
export function useProject(id: string) {
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => projectService.getProject(id),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useUpdateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateProjectData) => projectService.updateProject(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project"] });
    },
  });
}
```

### 3. Error Handling

```typescript
// services/supabase/errors.ts
export class DatabaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DatabaseError";
  }
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}
```

## Alternatives Considered

### 1. Direct Supabase Usage with Custom Hooks

- Pros: Simpler implementation, fewer abstractions
- Cons: No standardized error handling, harder to test, duplicated logic

### 2. Redux + Supabase

- Pros: Centralized state management
- Cons: More boilerplate, manual cache invalidation, higher complexity

### 3. SWR Instead of React Query

- Pros: Lighter bundle size
- Cons: Less feature-rich, smaller ecosystem

## Implementation Strategy

### Phase 1: Service Layer (Week 1)

1. Create base service classes and types
2. Implement core CRUD operations
3. Add error handling and validation

### Phase 2: React Query Integration (Week 2)

1. Set up React Query provider
2. Create base query hooks
3. Implement optimistic updates

### Phase 3: Migration (Week 2-3)

1. Identify all direct Supabase usage
2. Gradually replace with new service layer
3. Update components to use React Query hooks

### Phase 4: Testing and Documentation (Week 4)

1. Add unit tests for services
2. Add integration tests for hooks
3. Update documentation

## Additional Considerations

### Security

- Service layer will enforce access control
- Type-safe database operations
- Input validation before queries

### Performance

- Implement proper caching strategies
- Optimize query invalidation
- Use suspense for loading states

### Testing Strategy

```typescript
// services/__tests__/projects.test.ts
describe("ProjectService", () => {
  it("should fetch a project by id", async () => {
    const mockProject = { id: "1", name: "Test" };
    const mockSupabase = {
      from: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockResolvedValue({ data: mockProject }),
    };

    const service = new ProjectService(mockSupabase);
    const result = await service.getProject("1");
    expect(result).toEqual(mockProject);
  });
});
```

### Monitoring

- Add error tracking
- Implement query timing metrics
- Monitor cache hit rates

## Success Metrics

1. Reduced duplicate code
2. Improved type safety coverage
3. Faster average query response times
4. Reduced network requests
5. Improved error handling consistency

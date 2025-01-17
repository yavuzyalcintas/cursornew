import { type BaseTemplate, type TemplateRepository } from "./types";

export class FileSystemTemplateRepository implements TemplateRepository {
  private templates: Map<string, BaseTemplate[]>;

  constructor() {
    this.templates = new Map();
    this.initializeTemplates();
  }

  private initializeTemplates() {
    // Initialize with default templates
    this.templates.set("prd", [
      {
        id: "default",
        name: "Default PRD",
        description: "Standard product requirements document template",
        content: `You are an expert product manager tasked with creating a detailed Product Requirements Document (PRD) for {{project.name}}. 

# {{project.name}} - Product Requirements Document

## Project Overview
{{project.description}}

## Project Context
Platform: {{project.platform}}
Framework: {{project.framework}}
Dependencies: {{#each project.packages}}
- {{this}}
{{/each}}

## Document Sections

### 1. Executive Summary
Write a concise overview that includes:
- Product vision and goals
- Target audience
- Key value propositions
- Success metrics and KPIs
- Project timeline overview

### 2. Problem Statement
Describe:
- Current pain points and challenges
- Market opportunity
- User needs and feedback
- Business impact and goals
- Competitive analysis

### 3. Product Scope
Detail:
- Core features and capabilities
- User personas and journey maps
- Use cases and user stories
- Out of scope items
- Future considerations

### 4. Technical Requirements
Specify:
- System architecture overview
- Platform requirements ({{project.platform}})
- Framework specifications ({{project.framework}})
- Integration requirements
- Performance criteria
- Security requirements
- Scalability considerations

### 5. Feature Specifications
For each feature, include:
- Detailed description
- User stories
- Acceptance criteria
- Technical constraints
- Dependencies
- Priority level
- Effort estimation

### 6. Non-Functional Requirements
Address:
- Performance metrics
- Security standards
- Accessibility requirements
- Internationalization needs
- Compliance requirements
- Browser/device support

### 7. Implementation Plan
Outline:
- Development phases
- Resource requirements
- Timeline and milestones
- Risk assessment
- Testing strategy
- Launch criteria

### 8. Success Metrics
Define:
- Key performance indicators
- Success criteria
- Monitoring plan
- Feedback collection methods
- Iteration strategy

## Writing Guidelines

1. Technical Detail:
- Provide implementation-ready specifications
- Include clear acceptance criteria
- Define measurable success metrics
- Document technical constraints

2. Clarity:
- Use clear, unambiguous language
- Define technical terms
- Include visual aids where helpful
- Provide examples for complex features

3. Scope:
- Clearly define what's in/out of scope
- Prioritize features and requirements
- Document dependencies and assumptions
- Include future considerations

4. Implementation Focus:
- Consider technical feasibility
- Address scalability concerns
- Document integration requirements
- Include performance criteria

After generating the content, save it to the PRD.md file using the appropriate file writing command or editor.

Please generate a comprehensive PRD following this structure, ensuring all sections are thoroughly detailed and technically accurate. The final document should be saved as 'PRD.md' in the project root directory.

Note: Make sure to replace any placeholders with actual project-specific information and remove any sections that are not applicable to your project.`,
        variables: [],
      },
    ]);

    this.templates.set("code_style", [
      {
        id: "default",
        name: "Default Code Style Guide",
        description: "Standard code style guidelines template",
        content: `You are an expert software architect tasked with creating comprehensive code style guidelines for {{project.name}}. 

# Code Style Guidelines for {{project.name}}

## Project Overview
{{project.description}}

This document defines the coding standards and style guidelines for {{project.name}}, ensuring consistency and maintainability across the codebase.

### Technical Stack
- Platform: {{project.platform}}
- Framework: {{project.framework}}
- Key Dependencies:
{{#each project.packages}}
- {{this}}
{{/each}}

## Style Guide Sections

### 1. File Organization
Define standards for:
- Directory structure
- File naming conventions
- Module organization
- Import/export patterns
- Code grouping within files

### 2. Code Formatting
Specify:
- Indentation (spaces/tabs)
- Line length limits
- Line breaks and spacing
- Bracket placement
- Quotes (single/double)
- Semicolon usage
- Trailing commas
- Comments formatting

### 3. Naming Conventions
Detail rules for:
- Variables (camelCase, PascalCase, etc.)
- Functions and methods
- Classes and interfaces
- Constants and enums
- File names
- Component naming
- Test file naming

### 4. TypeScript/JavaScript Guidelines
Establish:
- Type annotations usage
- Interface vs Type aliases
- Generics conventions
- Null/undefined handling
- Error handling patterns
- Async/await patterns
- Default values
- Optional chaining usage

### 5. Component Guidelines
Define:
- Component composition
- Props interface definitions
- State management
- Event handling
- Lifecycle methods usage
- Custom hooks patterns
- Render optimization
- Error boundaries

### 6. Documentation Standards
Specify:
- JSDoc requirements
- README structure
- Code comments style
- API documentation
- Type documentation
- Example usage
- Changelog format

### 7. Testing Standards
Detail:
- Test file organization
- Naming conventions
- Test structure (Arrange-Act-Assert)
- Mock data handling
- Test coverage requirements
- Integration test patterns
- E2E test guidelines

### 8. Performance Guidelines
Cover:
- Bundle optimization
- Code splitting
- Lazy loading
- Memory management
- State management
- Rendering optimization
- Asset optimization

### 9. Security Guidelines
Address:
- Authentication handling
- Data validation
- API security
- Dependency management
- Environment variables
- Sensitive data handling
- Security best practices

### 10. Development Workflow
Define:
- Git workflow
- Branch naming
- Commit message format
- PR requirements
- Code review process
- CI/CD practices
- Version control guidelines

## Enforcement and Tools

### Linting and Formatting
- ESLint configuration
- Prettier setup
- TypeScript compiler options
- Git hooks
- CI checks

### IDE Configuration
- VS Code settings
- Extensions
- Snippets
- Debugging setup

## Best Practices

### 1. Code Quality
- Keep functions small and focused
- Follow DRY principles
- Maintain separation of concerns
- Use meaningful names
- Write self-documenting code
- Handle errors appropriately

### 2. Performance
- Optimize bundle size
- Implement code splitting
- Use proper caching
- Optimize rendering
- Follow lazy loading patterns

### 3. Maintainability
- Write clear documentation
- Use consistent patterns
- Implement proper error handling
- Follow SOLID principles
- Keep dependencies updated

### 4. Collaboration
- Write clear commit messages
- Document breaking changes
- Maintain changelog
- Review code thoroughly
- Share knowledge

After generating the content, save it to the CODE_STYLE.md file using the appropriate file writing command or editor.

Please generate comprehensive code style guidelines following this structure, ensuring all sections are thoroughly detailed and technically accurate. The final document should be saved as 'CODE_STYLE.md' in the project root directory.

Note: 
- Customize the guidelines based on your project's specific needs and tech stack
- Remove any sections that don't apply to your project
- Add project-specific conventions and requirements
- Include examples for complex patterns or rules`,
        variables: [],
      },
    ]);

    this.templates.set("cursorrules", [
      {
        id: "default",
        name: "Default Cursor Rules",
        description: "Standard Cursor AI rules template",
        content: `You are an expert software architect tasked with creating comprehensive rules for Cursor AI to follow when working with {{project.name}}. 

# Cursor AI Rules for {{project.name}}

## Project Overview
{{project.description}}

## Project Context
This document defines the rules and guidelines for Cursor AI when working with {{project.name}}.

### Technical Stack
- Platform: {{project.platform}}
- Framework: {{project.framework}}
- Key Dependencies:
{{#each project.packages}}
- {{this}}
{{/each}}

## Code Generation Rules

### 1. Project Structure
Follow these directory and file organization rules:
- Maintain the established project structure
- Place components in appropriate directories
- Follow file naming conventions
- Respect module boundaries
- Keep related files together

### 2. Code Style
Adhere to these formatting rules:
- Use consistent indentation
- Follow line length limits
- Apply proper spacing
- Use appropriate brackets
- Maintain consistent naming
- Follow TypeScript best practices

### 3. Component Guidelines
When generating components:
- Follow component composition patterns
- Implement proper prop typing
- Use appropriate state management
- Handle errors correctly
- Implement proper event handling
- Follow lifecycle best practices
- Optimize rendering performance

### 4. Type System
For TypeScript implementation:
- Use strict type checking
- Create proper interfaces
- Implement generics correctly
- Handle null/undefined properly
- Use type guards when needed
- Document complex types
- Avoid any type

### 5. API Integration
When working with APIs:
- Follow RESTful conventions
- Implement proper error handling
- Use type-safe requests
- Handle authentication correctly
- Validate API responses
- Document API usage
- Implement proper caching

### 6. State Management
For managing application state:
- Use appropriate state solutions
- Follow immutability principles
- Implement proper actions/reducers
- Handle side effects correctly
- Optimize state updates
- Document state structure
- Implement proper selectors

### 7. Testing Requirements
Generate tests following these rules:
- Write comprehensive unit tests
- Implement integration tests
- Follow testing best practices
- Use proper mocking
- Test error scenarios
- Maintain test coverage
- Document test cases

### 8. Security Guidelines
Enforce security practices:
- Validate all inputs
- Sanitize data output
- Handle authentication properly
- Protect sensitive data
- Follow OWASP guidelines
- Implement proper CORS
- Use secure dependencies

### 9. Performance Rules
Optimize for performance:
- Implement code splitting
- Use lazy loading
- Optimize bundle size
- Minimize re-renders
- Use proper caching
- Optimize assets
- Follow performance best practices

### 10. Documentation
Generate documentation that:
- Is clear and concise
- Includes JSDoc comments
- Provides usage examples
- Documents edge cases
- Explains complex logic
- Includes type information
- Follows documentation standards




## Best Practices

### 1. Code Quality
- Write self-documenting code
- Keep functions small and focused
- Follow DRY principles
- Use meaningful names
- Implement proper error handling
- Write maintainable code

### 2. Performance
- Optimize bundle size
- Implement code splitting
- Use proper caching
- Optimize rendering
- Follow lazy loading patterns

### 3. Security
- Validate user input
- Sanitize data output
- Use proper authentication
- Protect sensitive data
- Follow security best practices

After generating the content, save it to the .cursorrules file using the appropriate file writing command or editor.

Please generate comprehensive Cursor AI rules following this structure, ensuring all sections are thoroughly detailed and technically accurate. The final document should be saved as '.cursorrules' in the project root directory.

Note: 
- Customize rules based on project requirements
- Add project-specific patterns and conventions
- Include examples for complex rules
- Update rules as project evolves
- Remove any sections that don't apply`,
        variables: [],
      },
    ]);

    this.templates.set("progress", [
      {
        id: "default",
        name: "Default Progress Tracker",
        description: "Standard progress tracking template",
        content: `You are an expert project manager tasked with creating a comprehensive progress tracking document for {{project.name}}. 

# {{project.name}} - Project Progress Tracker

## Project Overview
{{project.description}}

### Technical Stack
- Platform: {{project.platform}}
- Framework: {{project.framework}}
- Key Dependencies:
{{#each project.packages}}
- {{this}}
{{/each}}

## Project Status Dashboard

### Quick Status
- Project Start Date: [Date]
- Current Phase: [Phase Name]
- Overall Progress: [X]%
- Next Milestone: [Milestone Name]
- Current Sprint: [Sprint Number]
- Latest Release: [Version]

### Key Metrics
- Features Completed: [X]/[Total]
- Open Issues: [Number]
- Test Coverage: [X]%
- Performance Score: [Score]
- Security Score: [Score]

## Development Phases

### 1. Project Setup [Status: ]
#### Completed
- [ ] Repository initialization
- [ ] Development environment setup
- [ ] CI/CD pipeline configuration
- [ ] Documentation structure
- [ ] Initial architecture design

#### In Progress
- [ ] Task 1: [Description]
- [ ] Task 2: [Description]

#### Blocked
- [ ] Task: [Description]
  - Blocker: [Description]
  - Required Action: [Action]

### 2. Core Infrastructure [Status: ]
#### Completed
- [ ] Base project structure
- [ ] Authentication system
- [ ] Database setup
- [ ] API foundation
- [ ] Testing framework

#### In Progress
- [ ] Task 1: [Description]
- [ ] Task 2: [Description]

#### Next Up
- [ ] Task 1: [Description]
- [ ] Task 2: [Description]

### 3. Feature Development [Status: ]
#### Core Features
- [ ] Feature 1: [Description]
  - Progress: [X]%
  - Remaining Tasks: [List]
  - Dependencies: [List]
- [ ] Feature 2: [Description]
  - Progress: [X]%
  - Remaining Tasks: [List]
  - Dependencies: [List]

#### Additional Features
- [ ] Feature 1: [Description]
  - Priority: [High/Medium/Low]
  - Status: [Not Started/In Progress/Review]
- [ ] Feature 2: [Description]
  - Priority: [High/Medium/Low]
  - Status: [Not Started/In Progress/Review]

### 4. Testing and Quality [Status: ]
#### Unit Testing
- [ ] Core Components
- [ ] API Services
- [ ] State Management
- [ ] Utilities

#### Integration Testing
- [ ] API Integration
- [ ] Database Operations
- [ ] Authentication Flow
- [ ] User Workflows

#### Performance Testing
- [ ] Load Testing
- [ ] Stress Testing
- [ ] Memory Usage
- [ ] Bundle Size

### 5. Deployment and Launch [Status: ]
#### Environment Setup
- [ ] Development
- [ ] Staging
- [ ] Production

#### Launch Checklist
- [ ] Security Audit
- [ ] Performance Optimization
- [ ] Documentation Complete
- [ ] User Acceptance Testing
- [ ] Monitoring Setup

## Timeline and Milestones

### Completed Milestones
1. [Milestone 1]: [Date]
   - Key Achievements: [List]
   - Metrics: [List]

2. [Milestone 2]: [Date]
   - Key Achievements: [List]
   - Metrics: [List]

### Upcoming Milestones
1. [Milestone 3]: [Target Date]
   - Goals: [List]
   - Dependencies: [List]
   - Risk Factors: [List]

2. [Milestone 4]: [Target Date]
   - Goals: [List]
   - Dependencies: [List]
   - Risk Factors: [List]

## Current Sprint Details

### Sprint [Number] ([Date Range])
#### Goals
- [Goal 1]
- [Goal 2]

#### In Progress
- Task 1: [Owner] - [Status]
- Task 2: [Owner] - [Status]

#### Completed
- [Task 1]
- [Task 2]

#### Blocked
- [Task]: [Blocker]

## Risks and Mitigation

### Active Risks
1. Risk: [Description]
   - Impact: [High/Medium/Low]
   - Probability: [High/Medium/Low]
   - Mitigation: [Strategy]

2. Risk: [Description]
   - Impact: [High/Medium/Low]
   - Probability: [High/Medium/Low]
   - Mitigation: [Strategy]

### Resolved Risks
1. Risk: [Description]
   - Resolution: [Description]
   - Date Resolved: [Date]

## Dependencies and Blockers

### External Dependencies
- [Dependency 1]: [Status]
- [Dependency 2]: [Status]

### Internal Dependencies
- [Dependency 1]: [Status]
- [Dependency 2]: [Status]

### Current Blockers
1. Blocker: [Description]
   - Impact: [Description]
   - Required Action: [Action]
   - Owner: [Name]

## Notes and Updates

### Recent Updates
- [Date]: [Update]
- [Date]: [Update]

### Important Decisions
- [Date]: [Decision]
- [Date]: [Decision]

### Next Actions
1. [Immediate Action]
2. [Short-term Action]
3. [Long-term Action]

After generating the content, save it to the PROGRESS.md file using the appropriate file writing command or editor.

Please generate a comprehensive progress tracking document following this structure, ensuring all sections are thoroughly detailed and up-to-date. The final document should be saved as 'PROGRESS.md' in the project root directory.

Note: 
- Update progress regularly
- Keep metrics current
- Track all blockers and dependencies
- Document important decisions
- Remove any sections that don't apply
- Add project-specific tracking needs`,
        variables: [],
      },
    ]);
  }

  async getTemplate(type: string, id: string): Promise<BaseTemplate | null> {
    const templates = this.templates.get(type);
    if (!templates) {
      return null;
    }
    return templates.find((t) => t.id === id) || null;
  }

  async getAllTemplates(type: string): Promise<BaseTemplate[]> {
    return this.templates.get(type) || [];
  }
}

# Project Requirements Document (PRD) for cursor.new

## 1. Product Overview

cursor.new is a web-based project initialization tool designed to streamline the setup process for Cursor AI projects. It provides a guided, interactive experience for developers to configure their projects with standardized documentation and best practices.

### 1.2 Target Audience

- Software developers using Cursor AI
- Development teams seeking standardized project initialization
- Technical leads managing multiple projects

## 2. Product Features

### 2.1 Project Configuration

#### Core Features

- Project naming and description interface
- Platform selection (web/mobile/desktop)
- Technology stack selection based on platform choice
- Package and tool selection interface
- Dynamic prompt customization from boilerplate templates

#### Documentation Assistance

System maintains boilerplate prompts that are dynamically customized based on project information for:

- PRD.md (Product Requirements Document)
- CODE_STYLE_GUIDELINES.md
- .cursorrules (Technology-specific rules)
- TASK_LIST.md
- PROGRESS.md

### 2.2 Technical Architecture

- Frontend: Next.js with TypeScript
- Backend: Supabase
- UI Framework: Tailwind CSS + ShadcN UI
- Authentication: Supabase Auth
- Database: Supabase PostgreSQL

## 3. User Flows

### 3.1 Project Creation Flow

1. User visits cursor.new
2. Enters project name and description
3. Selects project platform
4. Chooses technology stack
5. Selects additional packages and tools
6. Reviews and confirms selections
7. System generates documentation
8. User downloads or syncs with repository

### 3.2 Documentation Assistance Flow

1. System loads appropriate boilerplate prompts
2. Processes user inputs and project configuration
3. Dynamically customizes prompts with project-specific information
4. Provides preview of customized prompts
5. Allows manual prompt refinement
6. Facilitates user documentation creation

## 4. Feature Requirements

### 4.1 Project Configuration

- **Project Basics**

  - Project name (required)
  - Project description (required)
  - Version control preferences
  - License selection

- **Platform Selection**

  - Web (React, Angular, Vue, etc.)
  - Mobile (React Native, Flutter, etc.)
  - Desktop (Electron, Tauri, etc.)

- **Technology Stack**
  - Framework selection
  - Language selection
  - Database selection
  - UI library selection

### 4.2 Documentation Assistance

The system maintains boilerplate prompts that are dynamically customized with:

- **Base Prompt Structure**

  - Standard sections and formatting
  - Best practices templates
  - Industry-standard guidelines
  - Common patterns and conventions

- **Dynamic Elements**
  - Project name and description
  - Selected technology stack
  - Platform-specific requirements
  - Chosen packages and tools
  - Custom configurations

The customized prompts will cover:

- **For PRD.md**

  - Product overview details
  - Feature specifications
  - Technical requirements
  - User flows
  - Integration points

- **For CODE_STYLE_GUIDELINES.md**

  - Language-specific conventions
  - Formatting rules
  - Naming conventions
  - Documentation standards
  - Code review checklist

- **For .cursorrules**

  - AI coding guidelines
  - Technology-specific rules
  - Code generation preferences
  - Integration settings

- **For TASK_LIST.md**

  - Feature breakdown
  - Development phases
  - Priority levels
  - Effort estimates
  - Dependencies

- **For PROGRESS.md**
  - Task status structure
  - Milestone tracking format
  - Blockers and issues template
  - Timeline update format

## 5. Non-Functional Requirements

### 5.1 Performance

- Page load time < 2 seconds
- Boilerplate prompt loading < 1 second
- Dynamic customization < 3 seconds
- Real-time preview updates

### 5.2 Security

- Secure user authentication
- Data encryption
- Safe repository integration

### 5.3 Usability

- Intuitive navigation
- Responsive design
- Clear error messaging
- Helpful tooltips and guides

### 5.4 Reliability

- 99.9% uptime
- Automatic saving
- Error recovery
- Backup generation

## 6. Future Considerations

### 6.1 Planned Enhancements

- Template customization
- Team collaboration features
- Integration with additional IDEs
- Custom rule creation
- AI-powered suggestions

### 6.2 Integration Points

- Version control systems (GitHub, GitLab, etc.)
- CI/CD platforms
- Project management tools
- Code quality tools

## 7. Success Metrics

- User adoption rate
- Prompt customization accuracy
- User satisfaction scores
- Time saved in project setup
- Quality of resulting documentation

## 8. Timeline and Milestones

- Phase 1: Core project configuration (Week 1-2)
- Phase 2: Documentation generation (Week 3-4)
- Phase 3: Integration features (Week 5-6)
- Phase 4: Testing and refinement (Week 7-8)
- Phase 5: Launch and monitoring (Week 9-10)

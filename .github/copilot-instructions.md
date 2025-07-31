# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Context
This is an Angular project for a school website focused on visual presentation only. The project includes:

- **Purpose**: School website for information display and presentation
- **No Authentication**: This project does not include login functionality or user authentication
- **No Administration**: No admin panel or administrative features
- **Frontend Only**: Pure presentation layer for showcasing school information

## Code Guidelines
- Use Angular best practices with TypeScript
- Follow Angular style guide conventions
- Use SCSS for styling
- Implement responsive design patterns
- Focus on clean, readable component structure
- Use Angular Material or similar UI library for consistent design
- Prioritize accessibility and SEO optimization

## Component Structure
- Create reusable components for school sections (about, courses, faculty, contact, etc.)
- Use Angular routing for navigation between different school pages
- Implement lazy loading for optimal performance
- Structure components in feature modules
- **Organized folder structure:**
  - `src/app/components/` - All reusable components
  - `src/app/pages/` - Page-level components
  - `src/app/services/` - Business logic and data services
  - `src/app/models/` - TypeScript interfaces and models
  - `src/app/shared/` - Shared modules, pipes, and directives

## Styling Guidelines
- Use SCSS variables for consistent theming
- Implement mobile-first responsive design
- Use CSS Grid and Flexbox for layouts
- Follow BEM methodology for CSS class naming

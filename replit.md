# Overview

This is a modern full-stack web application built with React, TypeScript, Express.js, and Drizzle ORM. The application serves as a portfolio website for BhardwajDeveloper, showcasing mobile applications including Programming Buddy, Quizillo, and Indian Bike Game. The architecture follows a monorepo structure with clear separation between client-side React application, server-side Express API, and shared database schema.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui styling system
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: React Query (TanStack Query) for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Session Management**: In-memory storage with interface for database persistence
- **Development**: Hot reloading with Vite integration

### Project Structure
```
├── client/          # React frontend application
├── server/          # Express.js backend API
├── shared/          # Shared TypeScript types and database schema
├── migrations/      # Database migration files
└── dist/           # Production build output
```

## Key Components

### Frontend Components
- **Landing Page**: Single-page application showcasing mobile apps
- **UI System**: Complete component library using Radix UI primitives
- **Navigation**: Responsive navigation with smooth scrolling
- **Sections**: Hero, apps showcase, features, screenshots, testimonials, FAQ, contact
- **Forms**: Contact form with validation and toast notifications

### Backend Services
- **API Routes**: RESTful API structure (currently minimal setup)
- **Storage Interface**: Abstracted storage layer supporting both memory and database persistence
- **User Management**: Basic user schema with authentication foundation
- **Middleware**: Request logging, error handling, and CORS support

### Database Schema
- **Users Table**: Basic user management with username/password fields
- **Schema Validation**: Zod integration for runtime type checking
- **Type Safety**: Full TypeScript integration with Drizzle

## Data Flow

1. **Frontend Requests**: React components use React Query for API calls
2. **API Processing**: Express routes handle requests and interact with storage layer
3. **Data Persistence**: Storage interface abstracts database operations
4. **Response Handling**: Structured JSON responses with error handling
5. **State Updates**: React Query manages client-side cache updates

## External Dependencies

### Frontend Dependencies
- **UI Library**: Radix UI for accessible components
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Hookform Resolvers
- **Date Handling**: date-fns for date manipulation

### Backend Dependencies
- **Database**: Neon Database (PostgreSQL) for production
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Store**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for schema validation

### Development Tools
- **Build Tool**: Vite with React plugin
- **TypeScript**: Strict type checking across the stack
- **Error Handling**: Replit runtime error overlay for development

## Deployment Strategy

### Development Mode
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx for TypeScript execution with auto-restart
- **Database**: Drizzle Kit for schema management and migrations

### Production Build
- **Frontend**: Vite builds to `dist/public` directory
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Static Serving**: Express serves built frontend assets
- **Environment**: NODE_ENV-based configuration

### Database Management
- **Migrations**: Drizzle Kit handles schema migrations
- **Connection**: Environment-based database URL configuration
- **Schema**: Centralized schema definition in `shared/schema.ts`

### Key Design Decisions

1. **Monorepo Structure**: Enables code sharing between frontend and backend while maintaining clear boundaries
2. **TypeScript Throughout**: Ensures type safety across the entire application stack
3. **Abstracted Storage**: Interface-based storage allows easy switching between memory and database persistence
4. **Component-First UI**: Modular component architecture with consistent design system
5. **Environment Flexibility**: Configuration supports both development and production deployments
# SmartFlow Automation Agency

## Overview

SmartFlow Automation Agency is a landing page and lead generation website for an AI and workflow automation consultancy targeting small businesses. The application showcases automation services (n8n, Make, Zapier, ChatGPT integration) and collects client information through a contact form that redirects to Calendly for scheduling consultations.

The project is built as a single-page React application with a clean, minimal design inspired by modern SaaS landing pages (Linear, Vercel, Stripe). The focus is on professional approachability, trust-building through transparent communication, and smooth user interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (currently single route: home page)
- **Single Page Application (SPA)** pattern with all content on the home page

**UI Component System**
- **Shadcn/ui** component library (New York style variant) built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Class Variance Authority (CVA)** for managing component variants
- Design system emphasizes clean minimalism, generous whitespace, and subtle interactions
- Color palette centered on teal primary color (180 65% 45%) with soft off-white backgrounds
- Typography uses Inter font family throughout

**State Management & Data Fetching**
- **TanStack React Query** for server state management and API interactions
- Custom query client configuration with disabled refetching (staleTime: Infinity)
- **React Hook Form** with Zod schema validation for form handling
- Forms use `@hookform/resolvers` for Zod integration

**Component Organization**
- Path aliases configured: `@/` for client source, `@shared/` for shared types, `@assets/` for static assets
- Components organized in `/components/ui/` following Shadcn conventions
- Pages in `/client/src/pages/` (home page and 404 not-found page)
- Reusable hooks in `/client/src/hooks/` (mobile detection, toast notifications)

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript running on Node.js
- ESM module system (type: "module")
- Development server uses `tsx` for TypeScript execution
- Production build uses `esbuild` for bundling server code

**Development vs Production Setup**
- Vite dev server with HMR in development (middleware mode)
- Static file serving in production from `dist/public`
- Replit-specific plugins in development: cartographer (code navigation), dev banner, runtime error modal
- Request/response logging middleware for API routes

**API Structure**
- Routes prefixed with `/api` (currently minimal implementation)
- Request logging captures method, path, status code, duration, and response preview
- JSON body parsing with raw body capture for webhook support
- URL-encoded form parsing enabled

**Storage Layer**
- In-memory storage implementation (`MemStorage`) as the default
- Storage interface (`IStorage`) designed for CRUD operations on users
- User schema includes id, username, and password fields
- UUID generation for user IDs using Node.js crypto module
- Architecture prepared for database integration (Drizzle ORM configured but not actively used)

### Database Architecture (Configured but Not Active)

**ORM & Schema**
- **Drizzle ORM** configured for PostgreSQL with Neon serverless driver
- Database URL expected via `DATABASE_URL` environment variable
- Schema location: `shared/schema.ts`
- Migrations directory: `./migrations`
- Type-safe schema definitions with Drizzle-Zod integration

**Schema Design**
- Users table with varchar UUID primary key, unique username, and password text fields
- Zod schemas generated from Drizzle tables for validation
- Type exports for Insert and Select operations

### External Dependencies

**Third-Party Services**
- **Calendly** integration for appointment scheduling (contact form redirects to Calendly link)
- **Google Fonts CDN** for Inter font family

**Database Provider (Configured)**
- **Neon Database** serverless PostgreSQL (via `@neondatabase/serverless`)
- PostgreSQL session store available via `connect-pg-simple`

**UI Libraries**
- **Radix UI** primitives for accessible, unstyled components (accordion, dialog, dropdown, popover, etc.)
- **Lucide React** for icon components
- **Embla Carousel** for carousel/slider functionality
- **Recharts** for charting capabilities (included but not actively used)
- **Vaul** for drawer/bottom sheet components
- **CMDK** for command palette functionality
- **Input-OTP** for one-time password input
- **React Day Picker** for date selection

**Utilities & Validation**
- **Zod** for runtime type validation and schema definition
- **date-fns** for date manipulation
- **clsx** and **tailwind-merge** for conditional class name merging

**Development Tools**
- **Drizzle Kit** for database migrations and schema management
- Replit development plugins for enhanced DX (cartographer, dev banner, error overlay)
- **TypeScript** strict mode enabled with path mapping support
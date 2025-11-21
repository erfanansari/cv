# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A minimalist CV/resume web application built with Next.js 14 (App Router), React, TypeScript, and Tailwind CSS. Features a print-friendly layout and includes a GraphQL API endpoint for querying resume data.

## Package Manager

This project uses **pnpm** (v9.6.0). Always use `pnpm` for package management operations:
- Install dependencies: `pnpm i`
- Add package: `pnpm add <package>`
- Remove package: `pnpm remove <package>`

## Common Commands

### Development
```bash
pnpm dev          # Start development server (http://localhost:3000)
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Docker
```bash
docker compose build   # Build the container
docker compose up -d   # Run the container in detached mode
docker compose down    # Stop the container
```

## Architecture

### Data Layer
- **Resume data**: Centralized in `src/data/resume-data.ts` as a single source of truth
- All resume content (work experience, education, skills, etc.) is defined in the `RESUME_DATA` constant
- This data powers both the UI and GraphQL API

### GraphQL API
- **Endpoint**: `/graphql` (accessible at `/graphql` in development)
- **Framework**: Apollo Server with TypeGraphQL decorators
- **Schema**: Defined using TypeGraphQL class-based decorators in `src/apollo/type-defs.ts`
- **Resolver**: `MeResolver` in `src/apollo/resolvers.ts` returns the resume data
- **Query**: Single `me` query that returns all resume information
- Uses TypeScript decorators (`emitDecoratorMetadata: true` and `experimentalDecorators: true` in tsconfig)

### UI Components
- **Component library**: shadcn/ui (based on Radix UI primitives)
- **Styling**: Tailwind CSS with custom theme configuration
- **Icons**: Lucide React + custom SVG icons in `src/components/icons/`
- **Utility function**: `cn()` in `src/lib/utils.ts` for merging Tailwind classes (clsx + tailwind-merge)

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (main CV display)
│   └── graphql/            # GraphQL API route
├── apollo/                 # GraphQL setup
│   ├── resolvers.ts        # GraphQL resolvers
│   └── type-defs.ts        # TypeGraphQL schema definitions
├── components/             # React components
│   ├── ui/                 # shadcn/ui components
│   └── icons/              # Custom icon components
├── data/                   # Data layer
│   └── resume-data.ts      # Single source of truth for CV data
├── lib/                    # Utility functions
│   └── utils.ts            # Tailwind class merger
└── images/                 # Static images (logos, etc.)
```

### Styling System
- **Tailwind config**: `tailwind.config.js` with custom theme extending default
- **CSS variables**: Theme uses HSL color values defined as CSS custom properties
- **Dark mode**: Configured with class-based strategy
- **Prettier plugin**: Automatic Tailwind class sorting via `prettier-plugin-tailwindcss`

### Path Aliases
- `@/*` maps to `src/*` (configured in tsconfig.json)
- Use absolute imports: `import { RESUME_DATA } from "@/data/resume-data"`

## TypeScript Configuration

- **Target**: ES2021
- **Strict mode**: Enabled
- **Decorators**: Enabled for TypeGraphQL (required for GraphQL schema definitions)
- **JSX**: Preserve (handled by Next.js)
- **Module resolution**: Bundler

## Key Dependencies

- **Next.js 14.2.4**: React framework with App Router
- **React 18**: UI library
- **TypeScript 5**: Type safety
- **Tailwind CSS 3.4**: Utility-first CSS
- **Apollo Server**: GraphQL server
- **TypeGraphQL**: Schema-first GraphQL with TypeScript decorators
- **Radix UI**: Accessible component primitives (via shadcn/ui)
- **Vaul**: Drawer component
- **cmdk**: Command menu (keyboard shortcuts)
- **@vercel/analytics**: Analytics integration

## Development Notes

- **App Router**: This project uses Next.js App Router (not Pages Router)
- **Print styles**: The CV has print-specific styling for clean PDF exports
- **Responsive**: Mobile-first responsive design
- **Analytics**: Vercel Analytics integrated for usage tracking

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Foxes Technology is a Next.js 15 booking and POS platform for tours & activities businesses in Egypt and the GCC region. The project is currently ~75% complete as a marketing website with an AI-powered search system. It's built for operators who need digital booking systems, POS hardware solutions, and business management tools.

**Tech Stack**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, Algolia Search, MongoDB (planned), Firebase (installed but not configured)

**Package Manager**: pnpm (preferred), though npm also works

## Essential Commands

```bash
# Development
pnpm dev                    # Start dev server with Turbopack (http://localhost:3000)
pnpm build                  # Production build
pnpm start                  # Start production server
pnpm lint                   # Run ESLint

# Algolia Search
pnpm algolia:upload         # Index content to Algolia (requires .env.local setup)
# Alternatively: npx ts-node scripts/uploadToAlgolia.ts
```

## Environment Setup

1. Copy `.env.local.example` to `.env.local`
2. Add Algolia credentials from https://www.algolia.com/
3. Required variables:
   - `NEXT_PUBLIC_ALGOLIA_APP_ID`
   - `NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY`
   - `NEXT_PUBLIC_ALGOLIA_INDEX_NAME`
   - `ALGOLIA_ADMIN_API_KEY` (server-side only, for indexing)

After setup, run `pnpm algolia:upload` to index searchable content.

## Architecture

### App Router Structure
- Next.js 15 App Router with TypeScript
- Server Components by default; Client Components use `'use client'` directive
- File-based routing in `app/` directory
- No API routes currently (all backend functionality is planned/unimplemented)

### Path Aliases
Uses `@/*` for root imports via tsconfig.json:
```typescript
import Header from '@/components/Header';
import { searchClient } from '@/lib/algolia';
```

### Layout System
- Root layout: `app/layout.tsx` includes Header/Footer on all pages
- Uses Inter (body) and Poppins (headings) fonts from Google Fonts
- Metadata configured for SEO and social sharing

### Component Patterns

**21 reusable components in `components/`**:
- All UI components are client-side (`'use client'`)
- Animation-heavy using Framer Motion
- Brand colors: Red primary (`bg-red-600`, `hover:bg-red-700`)
- Responsive design with mobile-first approach

**Key components**:
- `Header.tsx`: Navigation with search modal, keyboard shortcuts (CMD/CTRL+K)
- `SearchBar.tsx`: Algolia autocomplete with instant results
- `ComingSoonModal.tsx`: Lead capture (email submission not functional yet)
- Hero variants: `Hero.tsx`, `HeroVariant2.tsx`, `HeroVariant3.tsx`
- Solution showcase components: `Solutions.tsx`, `AIShowcase.tsx`, device mockups

### Search System (Algolia)

**Core files**:
- `lib/algolia.ts`: Search client config, TypeScript types, category filters
- `lib/searchData.ts`: 40+ searchable records (solutions, features, FAQs, pages)
- `components/SearchBar.tsx`: Autocomplete component with popular searches
- `app/search/page.tsx`: Full search page with filters and pagination
- `scripts/uploadToAlgolia.ts`: Content indexing script

**How it works**:
1. Content defined in `lib/searchData.ts` as structured objects
2. Upload script indexes content to Algolia cloud
3. SearchBar uses Algolia's autocomplete library for instant results
4. Search page uses React InstantSearch for advanced filtering

**To add searchable content**:
1. Add records to `searchData.ts` following the existing schema
2. Run `pnpm algolia:upload` to re-index
3. New content is immediately searchable

### Styling Approach
- Tailwind CSS utility-first
- Custom animations via Framer Motion
- No global CSS beyond `app/globals.css` and Tailwind directives
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

### Image Handling
Remote images configured in `next.config.ts`:
- images.unsplash.com
- plus.unsplash.com
- cdn.dribbble.com
- via.placeholder.com
- upload.wikimedia.org (India flag)

Use Next.js `<Image>` component with these domains.

## Current State

### Completed
- ✅ Marketing pages: Home, About, Pricing, Contact, Careers
- ✅ Policy pages: Privacy, Terms, Cookie Policy, Refund Policy
- ✅ One solution page: `/solutions/online-booking` (detailed, production-ready)
- ✅ Algolia search integration with 40+ indexed records
- ✅ Search modal with keyboard shortcuts (CMD/CTRL+K)
- ✅ Responsive design and animations
- ✅ SEO metadata and social sharing tags

### Missing (High Priority)
- ⚠️ **4 solution pages**: `/solutions/pos-hardware`, `/solutions/kiosk`, `/solutions/ai`, `/solutions/analytics`
  - Directories exist but pages not built
  - Should follow `/solutions/online-booking` structure
- ⚠️ **Features page**: `/features` (referenced in navigation)
- ⚠️ **Login/signup system**: No authentication (NextAuth.js recommended)
- ⚠️ **Functional forms**: Contact form, Coming Soon modal don't submit
- ⚠️ **Database**: MongoDB/Mongoose installed but not connected
- ⚠️ **API routes**: No endpoints in `app/api/`

### Not Started
- Backend functionality (booking engine, payments, user dashboard)
- Email integration
- Database models and data persistence

See `PROJECT_COMPLETION_STATUS.md` for detailed roadmap.

## Development Guidelines

### When Adding New Pages
1. Create page in `app/[route]/page.tsx`
2. Add to `lib/searchData.ts` for searchability
3. Run `pnpm algolia:upload` to index
4. Update navigation in `Header.tsx` and `Footer.tsx` if needed
5. Add metadata for SEO

### When Creating Components
- Use `'use client'` for interactive components
- Follow existing naming: PascalCase for components
- Use Framer Motion for animations (maintain consistency)
- Apply brand colors: red-600 primary, slate-800 text
- Make mobile-responsive from the start

### Build Configuration
Next.js config (`next.config.ts`) currently:
- Ignores ESLint errors during build (`ignoreDuringBuilds: true`)
- Ignores TypeScript errors during build (`ignoreBuildErrors: true`)

**Note**: These are temporary settings for rapid development. Remove before production deployment and fix all type/lint errors.

### Solution Page Template
When creating missing solution pages, use `/solutions/online-booking` as template:
- Hero section with solution overview
- Key features grid
- How it works section
- Device mockups (if applicable)
- FAQ section
- CTA section

## Known Issues & Limitations

- Forms simulate submission (no actual backend)
- MongoDB and Firebase installed but not configured
- No authentication or user sessions
- Coming Soon modal doesn't persist emails
- Build ignores TypeScript/ESLint errors (fix before production)
- No API endpoints implemented

## Related Documentation

- `QUICK_START.md`: Getting started guide for new developers
- `ALGOLIA_SETUP_GUIDE.md`: Detailed Algolia configuration and troubleshooting
- `PROJECT_COMPLETION_STATUS.md`: Feature completion tracking and roadmap
- `COMING_SOON_MODAL_UPDATES.md`: Modal implementation details

## External Resources

- [Next.js 15 App Router Docs](https://nextjs.org/docs/app)
- [Algolia React InstantSearch](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)

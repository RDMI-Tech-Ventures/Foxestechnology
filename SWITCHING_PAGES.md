# Switching Between Coming Soon and Full Marketing Site

This guide explains how to switch between the "Coming Soon" page and the full marketing homepage.

## Current State

**Currently Active:** Coming Soon Page (at `/`)

The homepage (`app/page.tsx`) is currently showing the coming soon page with:
- 3-day countdown timer
- Email signup form
- Foxes Technology logo and branding
- Feature preview cards
- Glassmorphism design
- No header or footer

## How to Restore the Full Marketing Homepage

When you're ready to launch the full marketing site, follow these steps:

### Step 1: Update the Root Layout Metadata

Edit `app/layout.tsx` and change the metadata back to:

```typescript
export const metadata: Metadata = {
  title: {
    default: 'Foxes Technology | Booking Systems & POS for Tours & Activities',
    template: '%s | Foxes Technology',
  },
  description: 'Transform your tour & activity business with Foxes Technology. Get our all-in-one booking system, POS hardware, and AI solutions, built for operators in Egypt & the GCC.',
  openGraph: {
    title: 'Foxes Technology | Booking Systems & POS for Tours & Activities',
    description: 'The all-in-one platform to digitize and grow your travel business in Egypt and the GCC.',
    url: 'https://foxestechnology.com',
    siteName: 'Foxes Technology',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foxes Technology | Booking Systems & POS for Tours & Activities',
    description: 'The all-in-one platform to digitize and grow your travel business in Egypt and the GCC.',
    images: ['/og-image.png'],
  },
};
```

### Step 2: Update ConditionalLayout

Edit `components/ConditionalLayout.tsx` and remove `/` from the `noLayoutPages` array:

```typescript
// Pages that should NOT have header and footer
const noLayoutPages = ['/coming-soon']; // Remove '/' from here
```

### Step 3: Restore Homepage Content

Replace the content of `app/page.tsx` with the backup:

```bash
cp app/page.backup.tsx app/page.tsx
```

Or manually copy the content from the backup file to replace the current homepage.

**Note:** You can also delete `app/ComingSoonContent.tsx` as it won't be needed anymore once you restore the marketing homepage.

### Step 4: Test

Run your dev server and verify:
- Homepage shows all marketing content with header/footer
- `/coming-soon` still works as a standalone page

```bash
pnpm dev
```

## Files Reference

- **Current Homepage:** `app/page.tsx` (Coming Soon page)
- **Original Homepage Backup:** `app/page.backup.tsx` (Full marketing site)
- **Coming Soon Standalone:** `app/coming-soon/page.tsx` (Same as current homepage)
- **Layout Controller:** `components/ConditionalLayout.tsx`
- **Metadata:** `app/layout.tsx`

## Quick Command to Switch Back

```bash
# Restore full marketing homepage
cp app/page.backup.tsx app/page.tsx

# Then manually update:
# 1. app/layout.tsx - metadata
# 2. components/ConditionalLayout.tsx - remove '/' from noLayoutPages array
```

## Notes

- The coming soon page will always be available at `/coming-soon` regardless of what's on the homepage
- All your original marketing components are preserved and functional
- You can switch back and forth as many times as needed

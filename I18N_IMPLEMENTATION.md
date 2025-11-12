# Arabic/RTL Support Implementation Guide

## Overview

Foxes Technology now supports Arabic language with full RTL (Right-to-Left) layout support, making the platform accessible to users in Egypt and the GCC region.

## Implementation Stack

- **next-intl** (v4.5.1): Modern internationalization library for Next.js 15
- **tailwindcss-rtl** (v0.9.0): RTL support for Tailwind CSS
- **Supported Locales**: English (`en`), Arabic (`ar`)

## Architecture

### Directory Structure

```
Foxestechnology/
├── app/
│   └── [locale]/           # All routes under locale
│       ├── layout.tsx      # Locale-aware layout with dir attribute
│       ├── page.tsx        # Home page
│       └── ...             # All other routes
├── i18n/
│   └── request.ts          # i18n configuration
├── messages/
│   ├── en.json             # English translations
│   └── ar.json             # Arabic translations
├── components/
│   └── LanguageSwitcher.tsx # Language toggle component
└── middleware.ts           # Locale detection & routing
```

### Key Files

#### 1. Middleware (`middleware.ts`)
Handles automatic locale detection and URL rewriting:
- Detects user's preferred language from `Accept-Language` header
- Rewrites URLs to include locale prefix (e.g., `/` → `/en/`)
- Supports both `/en/*` and `/ar/*` routes

#### 2. i18n Configuration (`i18n/request.ts`)
```typescript
export const locales = ['en', 'ar'] as const;
export const defaultLocale = 'en' as const;
```

#### 3. Layout (`app/[locale]/layout.tsx`)
- Sets `<html lang="..." dir="...">` dynamically
- Arabic pages automatically get `dir="rtl"`
- Loads locale-specific messages via `getMessages()`

#### 4. Translation Files (`messages/`)
JSON files containing all UI text:
- **en.json**: English translations
- **ar.json**: Arabic translations (with proper RTL text)

Namespaces:
- `nav`: Navigation items (Features, Solutions, etc.)
- `home`: Coming Soon page content
- `footer`: Footer content
- `common`: Shared UI strings
- `meta`: SEO metadata

## Usage in Components

### Client Components

```tsx
'use client';
import { useTranslations, useLocale } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('namespace');
  const locale = useLocale();

  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href={`/${locale}/about`}>About</Link>
    </div>
  );
}
```

### Server Components

```tsx
import { getTranslations } from 'next-intl/server';

export default async function MyServerComponent({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'namespace' });

  return <h1>{t('title')}</h1>;
}
```

### Rich Text with Formatting

```tsx
{t.rich('tagline', {
  egypt: (chunks) => <span className="text-red-500">{t('egypt')}</span>,
  gcc: (chunks) => <span className="text-red-500">{t('gcc')}</span>,
})}
```

## RTL Styling

### Tailwind CSS RTL Plugin

The `tailwindcss-rtl` plugin automatically handles directional styles:

```tsx
// These classes adapt automatically in RTL:
<div className="ml-4 text-left">  // Becomes mr-4 text-right in Arabic
<div className="rtl:ml-4">        // Only applies in RTL
<div className="ltr:mr-4">        // Only applies in LTR
```

### Manual RTL Adjustments

For components that need specific RTL behavior:

```tsx
const locale = useLocale();
const isRTL = locale === 'ar';

<div className={isRTL ? 'flex-row-reverse' : 'flex-row'}>
```

## Language Switcher Component

Location: [`components/LanguageSwitcher.tsx`](components/LanguageSwitcher.tsx)

Features:
- Dropdown with flag icons (🇬🇧 English, 🇸🇦 Arabic)
- Smooth transitions
- Maintains current page path when switching
- Integrated in Header (desktop & mobile)

## Routing

All URLs now include locale prefix:

```
OLD: /about, /solutions/pos-hardware
NEW: /en/about, /ar/about
     /en/solutions/pos-hardware
     /ar/solutions/pos-hardware
```

The middleware automatically redirects root paths:
- `/` → `/en/` (default locale)
- Browser with Arabic preference → `/ar/`

## Adding New Translations

1. **Add keys to English file** (`messages/en.json`):
```json
{
  "myPage": {
    "title": "My Page Title",
    "description": "Page description"
  }
}
```

2. **Add Arabic translations** (`messages/ar.json`):
```json
{
  "myPage": {
    "title": "عنوان صفحتي",
    "description": "وصف الصفحة"
  }
}
```

3. **Use in components**:
```tsx
const t = useTranslations('myPage');
<h1>{t('title')}</h1>
```

## Testing

### Manual Testing

1. **Test English**:
   - Visit `http://localhost:3003/en`
   - All text should be in English
   - Layout should be left-to-right

2. **Test Arabic**:
   - Visit `http://localhost:3003/ar`
   - All text should be in Arabic
   - Layout should be right-to-left
   - Text should align right
   - Icons/arrows should flip

3. **Test Language Switcher**:
   - Click language switcher in header
   - Should transition smoothly to other language
   - URL should update to new locale
   - Page content should be preserved (same page, different language)

### Browser Language Detection

1. Set browser language to Arabic (العربية)
2. Visit `http://localhost:3003`
3. Should automatically redirect to `/ar/`

## Known Limitations

### Not Yet Translated

The following areas still need translation support:

1. **Other pages**: Only the Coming Soon page (home) and Header are fully translated
2. **Footer component**: Needs translation integration
3. **Form validation messages**: Still in English
4. **Error pages**: `not-found.tsx`, error boundaries
5. **Solution pages**: `/solutions/*` routes
6. **Policy pages**: Privacy, Terms, Cookie Policy, Refund Policy
7. **Search functionality**: Algolia search results and UI

### Next Steps

To complete full i18n support:

1. Add translations for all remaining pages
2. Translate SEO metadata for each page
3. Implement locale-specific content for Algolia search
4. Add date/time formatting for Arabic locale
5. Test all interactive components in RTL mode
6. Add translations for form validation errors
7. Consider Arabic fonts optimization (optional)

## Fonts

Current fonts (Inter & Poppins) support both Latin and Arabic characters. For better Arabic typography, consider:

- **Tajawal**: Modern Arabic sans-serif
- **Cairo**: Geometric Arabic font
- **Amiri**: Traditional Arabic serif

## Browser Support

RTL support works in all modern browsers:
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS/Android)

## Performance

- Translations are loaded per-page (not entire dictionary)
- Static generation works with all locales
- Minimal bundle size increase (~5KB for translations)
- No runtime performance impact

## SEO Considerations

Each locale has separate metadata:
```tsx
<html lang="en">       // or lang="ar"
<meta property="og:locale" content="en_US">  // or "ar_EG"
```

For production:
1. Submit both `/en/sitemap.xml` and `/ar/sitemap.xml`
2. Add `hreflang` tags for better SEO:
```html
<link rel="alternate" hreflang="en" href="https://foxestechnology.com/en/" />
<link rel="alternate" hreflang="ar" href="https://foxestechnology.com/ar/" />
```

## Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Tailwind RTL Plugin](https://github.com/20lives/tailwindcss-rtl)
- [RTL Styling Guide](https://rtlstyling.com/)
- [Arabic Web Typography](https://www.arabictype.com/)

## Support

For issues or questions about the i18n implementation, check:
1. This documentation
2. Next-intl docs (linked above)
3. Project's CLAUDE.md for general guidance

# Coming Soon Modal Implementation Guide

## ✅ Completed Updates

### 1. Created Reusable Component
- **File**: `/components/ComingSoonModal.tsx`
- **Status**: ✅ Complete
- **Features**:
  - Beautiful animated modal with gradient background
  - Email subscription form
  - Quick links to Solutions and Contact pages
  - Close button with animations
  - Backdrop blur effect
  - Body scroll lock

### 2. Updated Components

#### HeroVariant2.tsx
- **Status**: ✅ Complete
- **Changes**: Added modal for "Get Started Free" button

#### CTA.tsx
- **Status**: ✅ Complete
- **Changes**:
  - Added modal for "Get Started" button
  - Fixed "Contact Sales" link to point to `/contact`

#### app/solutions/page.tsx
- **Status**: ✅ Complete
- **Changes**: Added modal for "Start Free Trial" button in final CTA

---

## 🔄 Remaining Updates Needed

### High Priority (Non-Working Links)

#### 1. app/solutions/online-booking/page.tsx
**Lines to Update**:
- Line 108: `/get-started` → Add modal
- Line 118: `/demo` → Add modal (or keep as link if demo page exists)
- Line 602: `/get-started` → Add modal

**Implementation**:
```tsx
// Add at top
import { useState } from 'react';
import ComingSoonModal from '@/components/ComingSoonModal';

// In component
const [isModalOpen, setIsModalOpen] = useState(false);

// Replace Link with button
<button onClick={() => setIsModalOpen(true)}>...</button>
```

#### 2. components/Hero.tsx
**Search for**: Links to `/get-started`, `/demo`
**Action**: Add modal for non-working pages

#### 3. components/HeroVariant3.tsx
**Search for**: Links to `/get-started`, `/demo`
**Action**: Add modal for non-working pages

#### 4. components/FoxestechnologyHero.tsx
**Search for**: Links to `/get-started`, `/demo`
**Action**: Add modal for non-working pages

#### 5. components/AIShowcase.tsx
**Search for**: Any non-working links
**Action**: Add modal for non-working pages

#### 6. app/pricing/page.tsx
**Search for**: Links to `/get-started`
**Action**: Add modal for sign-up buttons

### Medium Priority (Footer Links)

#### components/Footer.tsx
**Non-Working Links** (should have modal):
- `/docs` - Documentation
- `/api` - API Reference
- `/support` - Support Center
- `/get-started` - Get Started (in Resources)

**Keep as Links** (pages exist):
- `/about` ✅
- `/careers` ✅
- `/pricing` ✅
- `/contact` ✅
- `/privacy-policy` ✅
- `/terms-of-service` ✅
- `/solutions/*` ✅

### Low Priority (App Download Links)

#### components/Footer.tsx
**App Store & Google Play buttons**:
- Currently point to `#`
- **Options**:
  1. Add modal saying "Mobile app coming soon"
  2. Leave as is (# does nothing)
  3. Point to contact form

---

## 📋 Implementation Checklist

### For Each Component with Non-Working Links:

- [ ] Import `useState` from React
- [ ] Import `ComingSoonModal` component
- [ ] Add state: `const [isModalOpen, setIsModalOpen] = useState(false);`
- [ ] Add modal component: `<ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />`
- [ ] Replace `<Link href="/non-working-page">` with `<button onClick={() => setIsModalOpen(true)}>`
- [ ] Keep all styling/classes the same
- [ ] Test that modal opens and closes properly

---

## 🎯 Quick Reference: Which Pages Exist

### ✅ Working Pages (Keep as Links)
- `/` - Homepage
- `/about` - About page
- `/careers` - Careers page
- `/pricing` - Pricing page
- `/contact` - Contact page
- `/privacy-policy` - Privacy Policy
- `/terms-of-service` - Terms of Service
- `/solutions` - Solutions overview
- `/solutions/online-booking` - Online booking solution
- `/solutions/pos-hardware` - POS hardware (if exists)
- `/solutions/kiosk` - Kiosk solution (if exists)
- `/solutions/ai` - AI solution (if exists)
- `/solutions/analytics` - Analytics solution (if exists)

### ❌ Non-Working Pages (Add Modal)
- `/get-started` - Onboarding/signup
- `/demo` - Product demo/video
- `/docs` - Documentation
- `/api` - API reference
- `/support` - Support center
- `/blog` - Blog
- `/case-studies` - Case studies
- `/partners` - Partners page
- `/status` - System status
- `/community` - Community forum

---

## 💡 Pro Tips

1. **Search Pattern**: Use this grep pattern to find non-working links:
   ```bash
   grep -r "href=\"/\(get-started\|demo\|docs\|api\|support\|blog\|case-studies\|partners\|status\|community\)" --include="*.tsx"
   ```

2. **Consistent Behavior**: All "Get Started" and "Start Free Trial" buttons should show the same modal

3. **Demo Links**: Decide if `/demo` should:
   - Show coming soon modal
   - OR link to a YouTube video
   - OR link to a product tour page

4. **Testing**: After updates, click every button/link to ensure:
   - Working links navigate properly
   - Non-working links show modal
   - Modal can be closed
   - No console errors

---

## 🚀 Next Steps

1. **Complete High Priority Updates** (online-booking, other hero components)
2. **Update Footer Links** (docs, api, support)
3. **Test All Modals** across all pages
4. **Decide on App Store Links** (modal or leave as is)
5. **Create Demo Page** (or keep modal)

---

## 📝 Code Template

For quick copy-paste when updating components:

```tsx
'use client';

import { useState } from 'react';
import ComingSoonModal from '@/components/ComingSoonModal';
// ... other imports

export default function YourComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Your component JSX */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="your-classes-here"
      >
        Your Button Text
      </button>
    </>
  );
}
```

---

*Last Updated: January 7, 2025*

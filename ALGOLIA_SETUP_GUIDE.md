# Algolia AI-Powered Search Setup Guide

## 🚀 Overview

Your Foxes Technology project now has a fully integrated **Algolia AI-powered search system** with:

- ✅ Semantic search capabilities
- ✅ Instant search results with autocomplete
- ✅ Advanced filtering by category and tags
- ✅ Beautiful search UI with modal and dedicated search page
- ✅ Keyboard shortcuts (CMD/CTRL + K to open, ESC to close)
- ✅ Mobile-responsive design
- ✅ 40+ searchable records including solutions, features, FAQs, and pages

---

## 📋 What's Been Implemented

### 1. **Algolia Configuration** (`lib/algolia.ts`)
- Search client setup
- Index configuration
- TypeScript types for search results
- Category filters

### 2. **Searchable Content** (`lib/searchData.ts`)
- 40+ pre-populated search records covering:
  - All website pages (Home, About, Contact, Pricing, etc.)
  - Solutions (Online Booking, POS, Kiosk, AI, Analytics, Mobile Apps)
  - Features (Real-time booking, Payments, Multi-language, CRM, etc.)
  - FAQs and Resources
- Each record includes: title, description, content, URL, category, tags, and image

### 3. **Search Components**

#### SearchBar Component (`components/SearchBar.tsx`)
- Autocomplete dropdown with instant results
- Popular search suggestions
- Highlighted matching text
- Click to navigate
- Beautiful animations

#### Search Results Page (`app/search/page.tsx`)
- Full-page search experience
- Advanced filters (by category, tags)
- Pagination
- Stats display
- Refinement chips
- Mobile-responsive layout

#### Header Integration (`components/Header.tsx`)
- Search icon button in desktop header
- Search modal overlay
- Keyboard shortcut support (CMD/CTRL + K)
- ESC to close

### 4. **Upload Script** (`scripts/uploadToAlgolia.ts`)
- Automated script to index all content to Algolia
- Configures optimal search settings
- AI-powered relevancy tuning
- Supports English and Arabic languages

### 5. **New Pages Added**
- ✅ Cookie Policy (`/cookie-policy`)
- ✅ Refund Policy (`/refund-policy`)
- ✅ Search Results Page (`/search`)

---

## 🔧 Setup Instructions

### Step 1: Create an Algolia Account

1. Go to [algolia.com](https://www.algolia.com/) and sign up for a **free account**
2. Create a new application
3. Go to your dashboard

### Step 2: Get Your API Credentials

1. In your Algolia dashboard, go to **Settings → API Keys**
2. You'll need three things:
   - **Application ID** (e.g., `AB12CD34EF`)
   - **Search-Only API Key** (safe to expose publicly)
   - **Admin API Key** (keep this secret!)

### Step 3: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your Algolia credentials:
   ```env
   NEXT_PUBLIC_ALGOLIA_APP_ID=your_app_id_here
   NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY=your_search_api_key_here
   NEXT_PUBLIC_ALGOLIA_INDEX_NAME=foxes_technology
   ALGOLIA_ADMIN_API_KEY=your_admin_api_key_here
   ```

### Step 4: Install Dependencies (Already Done)

The required packages are already installed:
```bash
npm install algoliasearch react-instantsearch @algolia/autocomplete-js @algolia/autocomplete-theme-classic
```

### Step 5: Index Your Content

Run the upload script to send all searchable content to Algolia:

```bash
# Install ts-node if not already installed
npm install -D ts-node dotenv

# Run the upload script
npx ts-node scripts/uploadToAlgolia.ts
```

You should see:
```
🚀 Starting Algolia upload...
📊 Uploading 40 records to index: foxes_technology
⚙️  Index settings configured
✅ Upload complete!
📝 Uploaded 40 records
```

### Step 6: Start Your Development Server

```bash
npm run dev
```

### Step 7: Test the Search

1. Open http://localhost:3000
2. Press **CMD+K** (Mac) or **CTRL+K** (Windows/Linux) to open search
3. Try searching for:
   - "booking"
   - "POS"
   - "mobile apps"
   - "pricing"
   - "AI assistant"

---

## 🎨 Search Features

### Instant Search
- Type in the search bar to see instant results
- Results appear as you type
- Highlighted matching text
- Image thumbnails for visual context

### Smart Suggestions
- When search is empty, see popular searches
- Click any suggestion to search instantly

### Advanced Filtering
On the `/search` page:
- Filter by **Category**: Solutions, Features, Pricing, Resources, Company
- Filter by **Tags**: Multiple tag filtering
- Clear all filters with one click
- See current active filters as chips

### Keyboard Shortcuts
- **CMD/CTRL + K**: Open search modal from anywhere
- **ESC**: Close search modal
- **Enter**: Go to full search page with query

### AI-Powered Features
Algolia's AI includes:
- **Typo tolerance**: "mobil apps" still finds "mobile apps"
- **Synonym matching**: "phone" matches "mobile"
- **Semantic understanding**: Smart relevance ranking
- **Multi-language support**: English and Arabic
- **Stop word removal**: Better search quality

---

## 📱 Mobile Experience

The search is fully responsive:
- Touch-friendly interface
- Optimized for mobile screens
- Swipe gestures supported
- Fast performance on mobile networks

---

## 🔍 Searchable Content Categories

| Category | Records | Examples |
|----------|---------|----------|
| **Solutions** | 7 | Online Booking, POS Hardware, Kiosk, AI Assistant, Analytics, Mobile Apps |
| **Features** | 8 | Real-time Booking, Payments, Multi-language, CRM, Channel Manager, Reviews |
| **Pricing** | 4 | Starter Plan, Professional Plan, Enterprise Plan |
| **Company** | 3 | About Us, Contact, Careers |
| **Resources** | 9 | Privacy Policy, Terms, Cookie Policy, Refund Policy, FAQs |

**Total: 40+ searchable records**

---

## 🎯 Next Steps

### Recommended Enhancements

1. **Add More Content**: As you create new pages/features, add them to `lib/searchData.ts`

2. **Auto-Sync**: Set up automatic indexing when content changes:
   ```typescript
   // In your CMS or after content updates
   import { searchClient, ALGOLIA_INDEX_NAME } from '@/lib/algolia';

   const index = searchClient.initIndex(ALGOLIA_INDEX_NAME);
   await index.saveObject(newRecord);
   ```

3. **Analytics**: Enable Algolia Analytics in your dashboard to see:
   - Popular searches
   - No-result searches
   - Click-through rates
   - Conversion tracking

4. **A/B Testing**: Use Algolia's A/B testing to optimize search relevance

5. **Personalization**: Add user-specific search results based on history

6. **Voice Search**: Add speech recognition for voice queries

---

## 🛠️ Customization

### Change Search Index Name

Edit `lib/algolia.ts`:
```typescript
export const ALGOLIA_INDEX_NAME = 'your_custom_index_name';
```

### Add More Categories

Edit `lib/algolia.ts`:
```typescript
export const searchCategories = [
  { label: 'All', value: '' },
  { label: 'Your Category', value: 'your-category' },
  // ... more categories
];
```

### Modify Search Settings

Edit `scripts/uploadToAlgolia.ts` to change:
- Searchable attributes priority
- Ranking criteria
- Typo tolerance levels
- Language settings

---

## 🐛 Troubleshooting

### Search Returns No Results

1. **Check Algolia credentials** in `.env.local`
2. **Verify records are indexed**:
   - Go to Algolia Dashboard → Indices
   - Check if `foxes_technology` index exists
   - Verify it has 40+ records
3. **Re-run upload script**: `npx ts-node scripts/uploadToAlgolia.ts`

### "Application ID or API Key invalid"

- Double-check your `.env.local` file
- Make sure you're using the **Search-Only API Key** for `NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY`
- Restart your dev server after changing env variables

### Search Modal Not Opening

- Check browser console for errors
- Verify SearchBar component is properly imported in Header
- Try clicking the search icon instead of keyboard shortcut

### Upload Script Fails

```bash
# Make sure dotenv is installed
npm install -D dotenv

# Verify your .env.local file exists and has correct values
cat .env.local

# Run with verbose logging
npx ts-node scripts/uploadToAlgolia.ts
```

---

## 📊 Algolia Dashboard

Monitor your search performance:

1. Go to [algolia.com](https://www.algolia.com/dashboard)
2. Select your application
3. View:
   - **Search Analytics**: Popular queries, no-result searches
   - **Click Analytics**: Which results users click
   - **Index Browser**: View all indexed records
   - **Configuration**: Modify search settings

---

## 💰 Algolia Pricing

**Free Tier Includes:**
- 10,000 search requests/month
- 10,000 records
- Basic analytics
- Perfect for small to medium sites

**Upgrade when you need:**
- More search requests
- Advanced analytics
- A/B testing
- Personalization
- Enterprise SLA

---

## 📝 Files Modified/Created

### New Files
- `lib/algolia.ts` - Algolia configuration
- `lib/searchData.ts` - Searchable content (40+ records)
- `components/SearchBar.tsx` - Search component
- `app/search/page.tsx` - Full search page
- `scripts/uploadToAlgolia.ts` - Index upload script
- `.env.local.example` - Environment template
- `app/cookie-policy/page.tsx` - Cookie policy
- `app/refund-policy/page.tsx` - Refund policy
- `ALGOLIA_SETUP_GUIDE.md` - This file

### Modified Files
- `components/Header.tsx` - Added search modal and keyboard shortcuts
- `package.json` - Added Algolia dependencies

---

## ✅ Testing Checklist

- [ ] Algolia account created
- [ ] API credentials added to `.env.local`
- [ ] Upload script run successfully
- [ ] Dev server started
- [ ] Search modal opens with CMD/CTRL + K
- [ ] Typing in search shows instant results
- [ ] Clicking result navigates to page
- [ ] Full search page works at `/search`
- [ ] Filters work (category, tags)
- [ ] Mobile search is responsive
- [ ] ESC closes search modal

---

## 🎉 Success!

You now have a professional, AI-powered search system that will:
- Help users find content instantly
- Improve user experience and engagement
- Reduce bounce rates
- Increase conversions
- Provide valuable search analytics

**Happy Searching! 🔍**

---

## 📞 Support

For Algolia-specific issues:
- [Algolia Documentation](https://www.algolia.com/doc/)
- [React InstantSearch](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/)
- [Algolia Community](https://discourse.algolia.com/)

For project-specific issues:
- Check this guide
- Review console errors
- Verify environment variables
- Re-run upload script

/**
 * Script to upload searchable content to Algolia
 * Run with: npx ts-node scripts/uploadToAlgolia.ts
 *
 * Make sure to set your environment variables first:
 * NEXT_PUBLIC_ALGOLIA_APP_ID
 * ALGOLIA_ADMIN_API_KEY
 * NEXT_PUBLIC_ALGOLIA_INDEX_NAME
 */

import algoliasearch from 'algoliasearch';
import { searchableContent } from '../lib/searchData';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const ALGOLIA_ADMIN_API_KEY = process.env.ALGOLIA_ADMIN_API_KEY;
const ALGOLIA_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || 'foxes_technology';

if (!ALGOLIA_APP_ID || !ALGOLIA_ADMIN_API_KEY) {
  console.error('❌ Missing Algolia credentials!');
  console.error('Please set NEXT_PUBLIC_ALGOLIA_APP_ID and ALGOLIA_ADMIN_API_KEY in .env.local');
  process.exit(1);
}

async function uploadToAlgolia() {
  try {
    console.log('🚀 Starting Algolia upload...');
    console.log(`📊 Uploading ${searchableContent.length} records to index: ${ALGOLIA_INDEX_NAME}`);

    // Initialize Algolia client with admin API key
    const client = algoliasearch(ALGOLIA_APP_ID!, ALGOLIA_ADMIN_API_KEY!);
    const index = client.initIndex(ALGOLIA_INDEX_NAME);

    // Save objects to index
    await index.saveObjects(searchableContent, {
      autoGenerateObjectIDIfNotExist: false,
    });

    // Configure index settings for optimal search
    await index.setSettings({
      searchableAttributes: [
        'title',
        'description',
        'content',
        'tags',
        'category',
      ],
      attributesForFaceting: [
        'category',
        'tags',
      ],
      customRanking: [
        'desc(objectID)',
      ],
      highlightPreTag: '<mark>',
      highlightPostTag: '</mark>',
      attributesToSnippet: [
        'content:20',
        'description:30',
      ],
      snippetEllipsisText: '...',
      queryLanguages: ['en', 'ar'],
      removeStopWords: true,
      typoTolerance: true,
    });

    console.log('⚙️  Index settings configured');
    console.log('✅ Upload complete!');
    console.log(`📝 Uploaded ${searchableContent.length} records`);
    console.log('\n🔍 Your Algolia search is ready!');
    console.log(`   Index: ${ALGOLIA_INDEX_NAME}`);
    console.log(`   Records: ${searchableContent.length}`);
    console.log('\n💡 Next steps:');
    console.log('   1. Add your Algolia credentials to .env.local');
    console.log('   2. Restart your Next.js development server');
    console.log('   3. Try searching on your website!');

  } catch (error) {
    console.error('❌ Upload failed:', error);
    process.exit(1);
  }
}

uploadToAlgolia();

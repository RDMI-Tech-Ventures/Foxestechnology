import algoliasearch from 'algoliasearch/lite';

// Algolia configuration - only initialize if credentials are available
const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '';
const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || '';

export const searchClient = appId && apiKey
  ? algoliasearch(appId, apiKey)
  : null;

export const ALGOLIA_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || 'foxes_technology';

// Search configuration
export const searchConfig = {
  indexName: ALGOLIA_INDEX_NAME,
  hitsPerPage: 10,
  attributesToSnippet: ['content:20', 'description:30'],
  snippetEllipsisText: '...',
};

// Types for search results
export interface SearchHit {
  objectID: string;
  title: string;
  description: string;
  content: string;
  url: string;
  category: string;
  tags?: string[];
  image?: string;
  _highlightResult?: {
    title: { value: string };
    description: { value: string };
    content: { value: string };
  };
}

// Search categories for filtering
export const searchCategories = [
  { label: 'All', value: '' },
  { label: 'Solutions', value: 'solutions' },
  { label: 'Features', value: 'features' },
  { label: 'Pricing', value: 'pricing' },
  { label: 'Resources', value: 'resources' },
  { label: 'Company', value: 'company' },
];

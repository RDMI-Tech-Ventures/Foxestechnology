'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { searchClient, ALGOLIA_INDEX_NAME, SearchHit } from '@/lib/algolia';
import { InstantSearch, useSearchBox, useHits, Configure } from 'react-instantsearch';

// Popular searches for suggestions
const popularSearches = [
  'Online booking',
  'POS hardware',
  'AI assistant',
  'Mobile apps',
  'Analytics',
  'Pricing plans',
];

function SearchResults() {
  const { hits } = useHits<SearchHit>();
  const router = useRouter();

  if (hits.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 max-h-[500px] overflow-y-auto z-50"
    >
      <div className="p-2">
        {hits.slice(0, 6).map((hit) => (
          <button
            key={hit.objectID}
            onClick={() => {
              router.push(hit.url);
            }}
            className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors group"
          >
            <div className="flex items-start gap-3">
              {hit.image && (
                <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
                  <img
                    src={hit.image}
                    alt={hit.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4
                    className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-1"
                    dangerouslySetInnerHTML={{
                      __html: hit._highlightResult?.title?.value || hit.title,
                    }}
                  />
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full capitalize flex-shrink-0">
                    {hit.category}
                  </span>
                </div>
                <p
                  className="text-sm text-gray-600 line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html: hit._highlightResult?.description?.value || hit.description,
                  }}
                />
              </div>
            </div>
          </button>
        ))}
      </div>

      {hits.length > 6 && (
        <div className="border-t border-gray-200 p-3 bg-gray-50">
          <button
            onClick={() => {
              router.push('/search');
            }}
            className="text-sm text-red-600 hover:text-red-700 font-medium"
          >
            View all {hits.length} results →
          </button>
        </div>
      )}
    </motion.div>
  );
}

function SearchInput() {
  const { query, refine, clear } = useSearchBox();
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => refine(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            placeholder="Search for solutions, features, pricing..."
            className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
          />
          {query && (
            <button
              type="button"
              onClick={clear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </form>

      <AnimatePresence>
        {isFocused && query && <SearchResults />}
        {isFocused && !query && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 z-50"
          >
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <TrendingUp className="w-4 h-4" />
                Popular Searches
              </div>
              <div className="space-y-1">
                {popularSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => refine(search)}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SearchBar({ className = '' }: { className?: string }) {
  // If search client is not configured, show a message
  if (!searchClient) {
    return (
      <div className={`w-full max-w-2xl ${className}`}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            disabled
            placeholder="Search not configured. Add Algolia credentials to .env.local"
            className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full max-w-2xl ${className}`}>
      <InstantSearch searchClient={searchClient} indexName={ALGOLIA_INDEX_NAME}>
        <Configure hitsPerPage={20} />
        <SearchInput />
      </InstantSearch>
    </div>
  );
}

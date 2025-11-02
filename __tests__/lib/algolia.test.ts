import { describe, it, expect, beforeEach, vi } from 'vitest';
import { searchClient, ALGOLIA_INDEX_NAME, searchConfig, searchCategories } from '@/lib/algolia';

describe('lib/algolia', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('searchClient', () => {
    it('should export searchClient', () => {
      // searchClient can be null if env vars are not set
      expect(searchClient).toBeDefined();
    });

    it('should be null when credentials are missing', () => {
      // In test environment, env vars are likely not set
      const hasAppId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
      const hasApiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;

      if (!hasAppId || !hasApiKey) {
        expect(searchClient).toBeNull();
      }
    });
  });

  describe('ALGOLIA_INDEX_NAME', () => {
    it('should export index name', () => {
      expect(ALGOLIA_INDEX_NAME).toBeDefined();
      expect(typeof ALGOLIA_INDEX_NAME).toBe('string');
    });

    it('should have default value when env var is not set', () => {
      if (!process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME) {
        expect(ALGOLIA_INDEX_NAME).toBe('foxes_technology');
      }
    });
  });

  describe('searchConfig', () => {
    it('should have correct structure', () => {
      expect(searchConfig).toBeDefined();
      expect(searchConfig).toHaveProperty('indexName');
      expect(searchConfig).toHaveProperty('hitsPerPage');
      expect(searchConfig).toHaveProperty('attributesToSnippet');
      expect(searchConfig).toHaveProperty('snippetEllipsisText');
    });

    it('should have correct indexName', () => {
      expect(searchConfig.indexName).toBe(ALGOLIA_INDEX_NAME);
    });

    it('should have hitsPerPage set to 10', () => {
      expect(searchConfig.hitsPerPage).toBe(10);
    });

    it('should have attributesToSnippet as array', () => {
      expect(Array.isArray(searchConfig.attributesToSnippet)).toBe(true);
      expect(searchConfig.attributesToSnippet).toContain('content:20');
      expect(searchConfig.attributesToSnippet).toContain('description:30');
    });

    it('should have snippetEllipsisText set', () => {
      expect(searchConfig.snippetEllipsisText).toBe('...');
    });
  });

  describe('searchCategories', () => {
    it('should export search categories array', () => {
      expect(searchCategories).toBeDefined();
      expect(Array.isArray(searchCategories)).toBe(true);
    });

    it('should have at least one category', () => {
      expect(searchCategories.length).toBeGreaterThan(0);
    });

    it('should have "All" as first category', () => {
      expect(searchCategories[0]).toEqual({
        label: 'All',
        value: '',
      });
    });

    it('should have all required categories', () => {
      const categoryValues = searchCategories.map((cat) => cat.value);
      expect(categoryValues).toContain('');
      expect(categoryValues).toContain('solutions');
      expect(categoryValues).toContain('features');
      expect(categoryValues).toContain('pricing');
      expect(categoryValues).toContain('resources');
      expect(categoryValues).toContain('company');
    });

    it('should have valid structure for each category', () => {
      searchCategories.forEach((category) => {
        expect(category).toHaveProperty('label');
        expect(category).toHaveProperty('value');
        expect(typeof category.label).toBe('string');
        expect(typeof category.value).toBe('string');
        expect(category.label.length).toBeGreaterThan(0);
      });
    });

    it('should have 6 categories in total', () => {
      expect(searchCategories.length).toBe(6);
    });

    it('should have unique values', () => {
      const values = searchCategories.map((cat) => cat.value);
      const uniqueValues = new Set(values);
      expect(uniqueValues.size).toBe(values.length);
    });

    it('should have unique labels', () => {
      const labels = searchCategories.map((cat) => cat.label);
      const uniqueLabels = new Set(labels);
      expect(uniqueLabels.size).toBe(labels.length);
    });
  });
});

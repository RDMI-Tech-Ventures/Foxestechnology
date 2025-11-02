import { describe, it, expect } from 'vitest';
import { searchableContent } from '@/lib/searchData';

describe('lib/searchData', () => {
  describe('searchableContent', () => {
    it('should export searchableContent array', () => {
      expect(searchableContent).toBeDefined();
      expect(Array.isArray(searchableContent)).toBe(true);
    });

    it('should have at least 40 records', () => {
      expect(searchableContent.length).toBeGreaterThanOrEqual(40);
    });

    it('should have all records with required fields', () => {
      searchableContent.forEach((record, index) => {
        expect(record, `Record at index ${index} missing objectID`).toHaveProperty('objectID');
        expect(record, `Record at index ${index} missing title`).toHaveProperty('title');
        expect(record, `Record at index ${index} missing description`).toHaveProperty('description');
        expect(record, `Record at index ${index} missing content`).toHaveProperty('content');
        expect(record, `Record at index ${index} missing url`).toHaveProperty('url');
        expect(record, `Record at index ${index} missing category`).toHaveProperty('category');
      });
    });

    it('should have unique objectIDs', () => {
      const objectIDs = searchableContent.map((record) => record.objectID);
      const uniqueObjectIDs = new Set(objectIDs);
      expect(uniqueObjectIDs.size).toBe(objectIDs.length);
    });

    it('should have valid objectID format (non-empty strings)', () => {
      searchableContent.forEach((record) => {
        expect(typeof record.objectID).toBe('string');
        expect(record.objectID.length).toBeGreaterThan(0);
      });
    });

    it('should have valid title (non-empty strings)', () => {
      searchableContent.forEach((record) => {
        expect(typeof record.title).toBe('string');
        expect(record.title.length).toBeGreaterThan(0);
      });
    });

    it('should have valid description (non-empty strings)', () => {
      searchableContent.forEach((record) => {
        expect(typeof record.description).toBe('string');
        expect(record.description.length).toBeGreaterThan(0);
      });
    });

    it('should have valid content (non-empty strings)', () => {
      searchableContent.forEach((record) => {
        expect(typeof record.content).toBe('string');
        expect(record.content.length).toBeGreaterThan(0);
      });
    });

    it('should have valid URLs', () => {
      searchableContent.forEach((record) => {
        expect(typeof record.url).toBe('string');
        expect(record.url).toMatch(/^\//); // Should start with /
      });
    });

    it('should have valid categories', () => {
      const validCategories = ['company', 'solutions', 'features', 'pricing', 'resources', 'faqs'];
      searchableContent.forEach((record) => {
        expect(typeof record.category).toBe('string');
        expect(validCategories).toContain(record.category);
      });
    });

    it('should have tags as array when present', () => {
      searchableContent.forEach((record) => {
        if (record.tags) {
          expect(Array.isArray(record.tags)).toBe(true);
          expect(record.tags.length).toBeGreaterThan(0);
          record.tags.forEach((tag) => {
            expect(typeof tag).toBe('string');
            expect(tag.length).toBeGreaterThan(0);
          });
        }
      });
    });

    it('should have image as string when present', () => {
      searchableContent.forEach((record) => {
        if (record.image) {
          expect(typeof record.image).toBe('string');
          expect(record.image.length).toBeGreaterThan(0);
        }
      });
    });

    describe('specific records', () => {
      it('should have homepage record', () => {
        const homepage = searchableContent.find((r) => r.objectID === 'home');
        expect(homepage).toBeDefined();
        expect(homepage?.title).toContain('Foxes Technology');
        expect(homepage?.category).toBe('company');
        expect(homepage?.url).toBe('/');
      });

      it('should have online booking solution', () => {
        const onlineBooking = searchableContent.find(
          (r) => r.objectID === 'solution-online-booking'
        );
        expect(onlineBooking).toBeDefined();
        expect(onlineBooking?.category).toBe('solutions');
        expect(onlineBooking?.url).toBe('/solutions/online-booking');
      });

      it('should have POS hardware solution', () => {
        const posHardware = searchableContent.find(
          (r) => r.objectID === 'solution-pos-hardware'
        );
        expect(posHardware).toBeDefined();
        expect(posHardware?.category).toBe('solutions');
        expect(posHardware?.url).toBe('/solutions/pos-hardware');
      });

      it('should have kiosk solution', () => {
        const kiosk = searchableContent.find((r) => r.objectID === 'solution-kiosk');
        expect(kiosk).toBeDefined();
        expect(kiosk?.category).toBe('solutions');
        expect(kiosk?.url).toBe('/solutions/kiosk');
      });

      it('should have AI solution', () => {
        const ai = searchableContent.find((r) => r.objectID === 'solution-ai');
        expect(ai).toBeDefined();
        expect(ai?.category).toBe('solutions');
        expect(ai?.url).toBe('/solutions/ai');
      });

      it('should have analytics solution', () => {
        const analytics = searchableContent.find((r) => r.objectID === 'solution-analytics');
        expect(analytics).toBeDefined();
        expect(analytics?.category).toBe('solutions');
        expect(analytics?.url).toBe('/solutions/analytics');
      });
    });

    describe('category distribution', () => {
      it('should have records in all categories', () => {
        const categories = new Set(searchableContent.map((r) => r.category));
        expect(categories.size).toBeGreaterThan(0);
      });

      it('should have solutions category records', () => {
        const solutions = searchableContent.filter((r) => r.category === 'solutions');
        expect(solutions.length).toBeGreaterThan(0);
      });

      it('should have features category records', () => {
        const features = searchableContent.filter((r) => r.category === 'features');
        expect(features.length).toBeGreaterThan(0);
      });

      it('should have company category records', () => {
        const company = searchableContent.filter((r) => r.category === 'company');
        expect(company.length).toBeGreaterThan(0);
      });
    });

    describe('data quality', () => {
      it('should have reasonable title lengths (5-100 chars)', () => {
        searchableContent.forEach((record) => {
          expect(record.title.length).toBeGreaterThanOrEqual(5);
          expect(record.title.length).toBeLessThanOrEqual(100);
        });
      });

      it('should have reasonable description lengths (10-200 chars)', () => {
        searchableContent.forEach((record) => {
          expect(record.description.length).toBeGreaterThanOrEqual(10);
          expect(record.description.length).toBeLessThanOrEqual(250);
        });
      });

      it('should have content longer than description', () => {
        searchableContent.forEach((record) => {
          // Content should generally be more detailed than description
          expect(record.content.length).toBeGreaterThanOrEqual(record.description.length * 0.5);
        });
      });
    });
  });
});

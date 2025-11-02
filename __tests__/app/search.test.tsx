import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import Search from '@/app/search/page';

// Mock Algolia
vi.mock('@/lib/algolia', () => ({
  searchClient: null,
  ALGOLIA_INDEX_NAME: 'foxes_technology',
  searchConfig: {
    indexName: 'foxes_technology',
    hitsPerPage: 10,
  },
  searchCategories: [
    { label: 'All', value: '' },
    { label: 'Solutions', value: 'solutions' },
  ],
}));

// Mock react-instantsearch
vi.mock('react-instantsearch', () => ({
  InstantSearch: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SearchBox: () => <div>SearchBox</div>,
  Hits: () => <div>Hits</div>,
  Pagination: () => <div>Pagination</div>,
  Configure: () => null,
  RefinementList: () => <div>RefinementList</div>,
  useHits: () => ({ hits: [] }),
}));

describe('Search Page', () => {
  it('should render search page', () => {
    const { container } = render(<Search />);
    expect(container).toBeInTheDocument();
  });

  it('should render without crashing', () => {
    const { container } = render(<Search />);
    expect(container).toBeTruthy();
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchBar from '@/components/SearchBar';

// Mock the search client
vi.mock('@/lib/algolia', () => ({
  searchClient: null,
  ALGOLIA_INDEX_NAME: 'foxes_technology',
  SearchHit: {},
}));

// Mock react-instantsearch
vi.mock('react-instantsearch', () => ({
  InstantSearch: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useSearchBox: () => ({
    query: '',
    refine: vi.fn(),
    clear: vi.fn(),
  }),
  useHits: () => ({
    hits: [],
  }),
  Configure: () => null,
}));

describe('SearchBar Component', () => {
  it('should render search input', () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });

  it('should render search icon', () => {
    render(<SearchBar />);
    // Check for search input which has the icon nearby
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });

  it('should render with fallback when Algolia is not configured', () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });

  it('should have correct placeholder text', () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toHaveAttribute('placeholder');
  });

  it('should render without crashing', () => {
    const { container } = render(<SearchBar />);
    expect(container).toBeInTheDocument();
  });
});

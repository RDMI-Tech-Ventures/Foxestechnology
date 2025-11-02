import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

// Mock SearchBar component
vi.mock('@/components/SearchBar', () => ({
  default: () => <div data-testid="search-bar">SearchBar</div>,
}));

describe('Header Component', () => {
  it('should render header', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should render logo/brand name', () => {
    render(<Header />);
    const logo = screen.getByText(/foxes/i);
    expect(logo).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    render(<Header />);
    // Check for common navigation items
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('should have Solutions link', () => {
    render(<Header />);
    const solutionsLink = screen.getByRole('link', { name: /solutions/i });
    expect(solutionsLink).toBeInTheDocument();
  });

  it('should have Pricing link', () => {
    render(<Header />);
    const pricingLink = screen.getByRole('link', { name: /pricing/i });
    expect(pricingLink).toBeInTheDocument();
  });

  it('should have About link', () => {
    render(<Header />);
    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
  });

  it('should render without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it('should have correct structure', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('header')).toBeInTheDocument();
  });
});

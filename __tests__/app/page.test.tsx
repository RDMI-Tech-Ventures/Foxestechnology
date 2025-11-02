import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import Home from '@/app/page';

// Mock all components used in the page
vi.mock('@/components/Hero', () => ({
  default: () => <div data-testid="hero">Hero</div>,
}));

vi.mock('@/components/Solutions', () => ({
  default: () => <div data-testid="solutions">Solutions</div>,
}));

vi.mock('@/components/WhoWeServe', () => ({
  default: () => <div data-testid="who-we-serve">WhoWeServe</div>,
}));

vi.mock('@/components/Testimonials', () => ({
  default: () => <div data-testid="testimonials">Testimonials</div>,
}));

vi.mock('@/components/FAQ', () => ({
  default: () => <div data-testid="faq">FAQ</div>,
}));

vi.mock('@/components/CTA', () => ({
  default: () => <div data-testid="cta">CTA</div>,
}));

describe('Home Page', () => {
  it('should render home page', () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });

  it('should render without crashing', () => {
    const { container } = render(<Home />);
    expect(container).toBeTruthy();
  });
});

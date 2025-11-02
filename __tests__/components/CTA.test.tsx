import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CTA from '@/components/CTA';

describe('CTA Component', () => {
  it('should render CTA section', () => {
    render(<CTA />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('should render CTA heading', () => {
    const { container } = render(<CTA />);
    const headings = container.querySelectorAll('h1, h2, h3');
    expect(headings.length).toBeGreaterThan(0);
  });

  it('should render action buttons', () => {
    render(<CTA />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('should render without crashing', () => {
    const { container } = render(<CTA />);
    expect(container).toBeInTheDocument();
  });
});

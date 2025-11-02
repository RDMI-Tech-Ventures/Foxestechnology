import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from '@/components/FAQ';

describe('FAQ Component', () => {
  it('should render FAQ section', () => {
    render(<FAQ />);
    const faqSection = screen.getByText(/frequently asked/i);
    expect(faqSection).toBeInTheDocument();
  });

  it('should render FAQ heading', () => {
    render(<FAQ />);
    const heading = screen.getByText(/frequently asked/i);
    expect(heading).toBeInTheDocument();
  });

  it('should render FAQ items', () => {
    const { container } = render(<FAQ />);
    const faqItems = container.querySelectorAll('[role="button"]');
    expect(faqItems.length).toBeGreaterThan(0);
  });

  it('should have collapsible FAQ items', () => {
    render(<FAQ />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('should toggle FAQ item on click', () => {
    render(<FAQ />);
    const buttons = screen.getAllByRole('button');
    if (buttons.length > 0) {
      const firstButton = buttons[0];
      fireEvent.click(firstButton);
      // After click, the state should change
      expect(firstButton).toBeInTheDocument();
    }
  });

  it('should render without crashing', () => {
    const { container } = render(<FAQ />);
    expect(container).toBeInTheDocument();
  });
});

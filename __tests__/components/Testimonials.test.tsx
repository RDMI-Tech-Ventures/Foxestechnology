import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Testimonials from '@/components/Testimonials';

describe('Testimonials Component', () => {
  it('should render testimonials section', () => {
    render(<Testimonials />);
    const testimonialsHeading = screen.getByText(/testimonial/i);
    expect(testimonialsHeading).toBeInTheDocument();
  });

  it('should render testimonial cards', () => {
    const { container } = render(<Testimonials />);
    // Should have testimonial content
    expect(container.textContent).toBeTruthy();
  });

  it('should render without crashing', () => {
    const { container } = render(<Testimonials />);
    expect(container).toBeInTheDocument();
  });
});

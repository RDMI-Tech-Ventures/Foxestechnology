import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Contact from '@/app/contact/page';

describe('Contact Page', () => {
  it('should render contact page', () => {
    const { container } = render(<Contact />);
    expect(container).toBeInTheDocument();
  });

  it('should render without crashing', () => {
    const { container } = render(<Contact />);
    expect(container).toBeTruthy();
  });
});

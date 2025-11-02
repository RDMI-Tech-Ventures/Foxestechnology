import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TrustedBy from '@/components/TrustedBy';

describe('TrustedBy Component', () => {
  it('should render trusted by section', () => {
    render(<TrustedBy />);
    const trustedByText = screen.getByText(/trusted/i);
    expect(trustedByText).toBeInTheDocument();
  });

  it('should render without crashing', () => {
    const { container } = render(<TrustedBy />);
    expect(container).toBeInTheDocument();
  });
});

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ForDestinations from '@/components/ForDestinations';

describe('ForDestinations Component', () => {
  it('should render for destinations section', () => {
    const { container } = render(<ForDestinations />);
    expect(container).toBeInTheDocument();
    expect(container.textContent).toBeTruthy();
  });

  it('should render without crashing', () => {
    const { container } = render(<ForDestinations />);
    expect(container).toBeInTheDocument();
  });
});

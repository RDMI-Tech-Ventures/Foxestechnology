import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Pricing from '@/app/pricing/page';

describe('Pricing Page', () => {
  it('should render pricing page', () => {
    const { container } = render(<Pricing />);
    expect(container).toBeInTheDocument();
  });

  it('should render without crashing', () => {
    const { container } = render(<Pricing />);
    expect(container).toBeTruthy();
  });
});

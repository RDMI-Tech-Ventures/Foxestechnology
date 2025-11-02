import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Solutions from '@/app/solutions/page';

describe('Solutions Page', () => {
  it('should render solutions page', () => {
    const { container } = render(<Solutions />);
    expect(container).toBeInTheDocument();
  });

  it('should render without crashing', () => {
    const { container } = render(<Solutions />);
    expect(container).toBeTruthy();
  });
});

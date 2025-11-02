import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import WhoWeServe from '@/components/WhoWeServe';

describe('WhoWeServe Component', () => {
  it('should render who we serve section', () => {
    const { container } = render(<WhoWeServe />);
    expect(container).toBeInTheDocument();
    expect(container.textContent).toBeTruthy();
  });

  it('should render without crashing', () => {
    const { container } = render(<WhoWeServe />);
    expect(container).toBeInTheDocument();
  });
});

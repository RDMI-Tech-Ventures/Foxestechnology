import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import HeroVariant2 from '@/components/HeroVariant2';

describe('HeroVariant2 Component', () => {
  it('should render hero variant 2', () => {
    const { container } = render(<HeroVariant2 />);
    expect(container).toBeInTheDocument();
    expect(container.textContent).toBeTruthy();
  });

  it('should render without crashing', () => {
    const { container } = render(<HeroVariant2 />);
    expect(container).toBeInTheDocument();
  });
});

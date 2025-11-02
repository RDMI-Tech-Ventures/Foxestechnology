import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import HeroVariant3 from '@/components/HeroVariant3';

describe('HeroVariant3 Component', () => {
  it('should render hero variant 3', () => {
    const { container } = render(<HeroVariant3 />);
    expect(container).toBeInTheDocument();
    expect(container.textContent).toBeTruthy();
  });

  it('should render without crashing', () => {
    const { container } = render(<HeroVariant3 />);
    expect(container).toBeInTheDocument();
  });
});

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import FoxestechnologyHero from '@/components/FoxestechnologyHero';

describe('FoxestechnologyHero Component', () => {
  it('should render Foxestechnology hero', () => {
    const { container } = render(<FoxestechnologyHero />);
    expect(container).toBeInTheDocument();
    expect(container.textContent).toBeTruthy();
  });

  it('should render without crashing', () => {
    const { container } = render(<FoxestechnologyHero />);
    expect(container).toBeInTheDocument();
  });
});

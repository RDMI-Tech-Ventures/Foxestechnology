import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import FeaturesSection from '@/components/FeaturesSection';

describe('FeaturesSection Component', () => {
  it('should render features section', () => {
    const { container } = render(<FeaturesSection />);
    expect(container).toBeInTheDocument();
    expect(container.textContent).toBeTruthy();
  });

  it('should render without crashing', () => {
    const { container } = render(<FeaturesSection />);
    expect(container).toBeInTheDocument();
  });
});

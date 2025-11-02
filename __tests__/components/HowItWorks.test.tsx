import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import HowItWorks from '@/components/HowItWorks';

describe('HowItWorks Component', () => {
  it('should render how it works section', () => {
    const { container } = render(<HowItWorks />);
    expect(container).toBeInTheDocument();
    expect(container.textContent).toBeTruthy();
  });

  it('should render without crashing', () => {
    const { container } = render(<HowItWorks />);
    expect(container).toBeInTheDocument();
  });
});

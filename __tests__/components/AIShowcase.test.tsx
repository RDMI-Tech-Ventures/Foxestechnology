import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import AIShowcase from '@/components/AIShowcase';

describe('AIShowcase Component', () => {
  it('should render AI showcase section', () => {
    const { container } = render(<AIShowcase />);
    expect(container).toBeInTheDocument();
    expect(container.textContent).toBeTruthy();
  });

  it('should render without crashing', () => {
    const { container } = render(<AIShowcase />);
    expect(container).toBeInTheDocument();
  });
});

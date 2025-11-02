import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Ecosystem from '@/components/Ecosystem';

describe('Ecosystem Component', () => {
  it('should render ecosystem section', () => {
    const { container } = render(<Ecosystem />);
    expect(container).toBeInTheDocument();
    expect(container.textContent).toBeTruthy();
  });

  it('should render without crashing', () => {
    const { container } = render(<Ecosystem />);
    expect(container).toBeInTheDocument();
  });
});

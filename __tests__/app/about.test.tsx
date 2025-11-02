import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import About from '@/app/about/page';

describe('About Page', () => {
  it('should render about page', () => {
    const { container } = render(<About />);
    expect(container).toBeInTheDocument();
  });

  it('should render without crashing', () => {
    const { container } = render(<About />);
    expect(container).toBeTruthy();
  });
});

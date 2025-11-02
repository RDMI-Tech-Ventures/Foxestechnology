import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import MobileApps from '@/components/sections/MobileApps';

describe('MobileApps Component', () => {
  it('should render mobile apps section', () => {
    const { container } = render(<MobileApps />);
    expect(container).toBeInTheDocument();
    expect(container.textContent).toBeTruthy();
  });

  it('should render without crashing', () => {
    const { container } = render(<MobileApps />);
    expect(container).toBeInTheDocument();
  });
});

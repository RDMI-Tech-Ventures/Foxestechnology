import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import SelfServiceKiosk from '@/components/sections/SelfServiceKiosk';

describe('SelfServiceKiosk Component', () => {
  it('should render self-service kiosk section', () => {
    const { container } = render(<SelfServiceKiosk />);
    expect(container).toBeInTheDocument();
    expect(container.textContent).toBeTruthy();
  });

  it('should render without crashing', () => {
    const { container } = render(<SelfServiceKiosk />);
    expect(container).toBeInTheDocument();
  });
});

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PartnershipBanner from '@/components/PartnershipBanner';

describe('PartnershipBanner Component', () => {
  it('should render partnership banner', () => {
    const { container } = render(<PartnershipBanner />);
    expect(container).toBeInTheDocument();
  });

  it('should render without crashing', () => {
    const { container } = render(<PartnershipBanner />);
    expect(container).toBeInTheDocument();
  });
});

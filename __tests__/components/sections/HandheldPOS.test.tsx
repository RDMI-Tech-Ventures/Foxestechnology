import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import HandheldPOS from '@/components/sections/HandheldPOS';

describe('HandheldPOS Component', () => {
  it('should render handheld POS section', () => {
    const { container } = render(<HandheldPOS />);
    expect(container).toBeInTheDocument();
    expect(container.textContent).toBeTruthy();
  });

  it('should render without crashing', () => {
    const { container } = render(<HandheldPOS />);
    expect(container).toBeInTheDocument();
  });
});

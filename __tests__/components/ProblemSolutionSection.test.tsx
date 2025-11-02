import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';

describe('ProblemSolutionSection Component', () => {
  it('should render problem solution section', () => {
    const { container } = render(<ProblemSolutionSection />);
    expect(container).toBeInTheDocument();
    expect(container.textContent).toBeTruthy();
  });

  it('should render without crashing', () => {
    const { container } = render(<ProblemSolutionSection />);
    expect(container).toBeInTheDocument();
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ComingSoonModal from '@/components/ComingSoonModal';

// Mock react-hot-toast
vi.mock('react-hot-toast', () => ({
  default: {
    success: vi.fn(),
    error: vi.fn(),
  },
  Toaster: () => null,
}));

describe('ComingSoonModal Component', () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('should render modal when isOpen is true', () => {
    render(<ComingSoonModal isOpen={true} onClose={mockOnClose} featureName="Test Feature" />);
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument();
  });

  it('should not render when isOpen is false', () => {
    const { container } = render(
      <ComingSoonModal isOpen={false} onClose={mockOnClose} featureName="Test Feature" />
    );
    expect(container.firstChild).toBeNull();
  });

  it('should display feature name', () => {
    render(<ComingSoonModal isOpen={true} onClose={mockOnClose} featureName="AI Assistant" />);
    expect(screen.getByText(/AI Assistant/i)).toBeInTheDocument();
  });

  it('should render email input field', () => {
    render(<ComingSoonModal isOpen={true} onClose={mockOnClose} featureName="Test Feature" />);
    const emailInput = screen.getByPlaceholderText(/email/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('should render notify button', () => {
    render(<ComingSoonModal isOpen={true} onClose={mockOnClose} featureName="Test Feature" />);
    const notifyButton = screen.getByRole('button', { name: /notify me/i });
    expect(notifyButton).toBeInTheDocument();
  });

  it('should render close button', () => {
    render(<ComingSoonModal isOpen={true} onClose={mockOnClose} featureName="Test Feature" />);
    const closeButtons = screen.getAllByRole('button');
    expect(closeButtons.length).toBeGreaterThan(0);
  });

  it('should call onClose when close button is clicked', () => {
    render(<ComingSoonModal isOpen={true} onClose={mockOnClose} featureName="Test Feature" />);
    const closeButton = screen.getByLabelText(/close/i);
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should accept email input', () => {
    render(<ComingSoonModal isOpen={true} onClose={mockOnClose} featureName="Test Feature" />);
    const emailInput = screen.getByPlaceholderText(/email/i) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');
  });

  it('should render without crashing', () => {
    const { container } = render(
      <ComingSoonModal isOpen={true} onClose={mockOnClose} featureName="Test Feature" />
    );
    expect(container).toBeInTheDocument();
  });
});

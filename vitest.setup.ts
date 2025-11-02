import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock framer-motion
vi.mock('framer-motion', async () => {
  const React = await import('react');
  return {
    motion: new Proxy(
      {},
      {
        get: (_, prop) => {
          const Component = React.forwardRef<any, any>(({ children, ...props }: any, ref: any) => {
            // Filter out framer-motion specific props
            const {
              initial,
              animate,
              exit,
              transition,
              variants,
              whileHover,
              whileTap,
              whileInView,
              viewport,
              onAnimationStart,
              onAnimationComplete,
              drag,
              dragConstraints,
              dragElastic,
              onDragStart,
              onDragEnd,
              style,
              ...rest
            } = props;
            return React.createElement(prop as string, { ...rest, ref, style }, children);
          });
          Component.displayName = `motion.${String(prop)}`;
          return Component;
        },
      }
    ),
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    useAnimation: () => ({
      start: vi.fn(),
      stop: vi.fn(),
      set: vi.fn(),
    }),
    useInView: () => true,
    useScroll: () => ({
      scrollY: { current: 0 },
      scrollYProgress: { current: 0 },
    }),
    useTransform: () => ({ current: 0 }),
    useSpring: () => ({ current: 0 }),
  };
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
} as any;

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock Algolia
vi.mock('algoliasearch', () => ({
  default: vi.fn(() => ({
    initIndex: vi.fn(() => ({
      search: vi.fn(() => Promise.resolve({ hits: [] })),
      saveObjects: vi.fn(() => Promise.resolve({})),
      setSettings: vi.fn(() => Promise.resolve({})),
    })),
  })),
}));

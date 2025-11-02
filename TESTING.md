# Testing Guide

This document provides comprehensive information about the testing setup and practices for the Foxes Technology project.

## Test Stack

- **Test Runner**: Vitest 4.0.6
- **Testing Library**: @testing-library/react 16.3.0
- **DOM Testing**: @testing-library/jest-dom 6.9.1
- **User Interactions**: @testing-library/user-event 14.6.1
- **Environment**: jsdom 27.1.0 / happy-dom 20.0.10
- **Coverage**: @vitest/coverage-v8 4.0.6
- **UI**: @vitest/ui 4.0.6

## Quick Start

### Running Tests

```bash
# Run tests in watch mode (development)
pnpm test

# Run tests once (CI/production)
pnpm test:run

# Run tests with UI dashboard
pnpm test:ui

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage report
pnpm test:coverage
```

## Test Structure

Tests are organized in the `__tests__` directory mirroring the project structure:

```
__tests__/
├── lib/
│   ├── algolia.test.ts
│   └── searchData.test.ts
├── components/
│   ├── SearchBar.test.tsx
│   ├── Header.test.tsx
│   ├── Footer.test.tsx
│   ├── ComingSoonModal.test.tsx
│   ├── Hero.test.tsx
│   ├── FAQ.test.tsx
│   ├── Solutions.test.tsx
│   ├── Testimonials.test.tsx
│   ├── CTA.test.tsx
│   ├── AIShowcase.test.tsx
│   ├── TrustedBy.test.tsx
│   ├── WhoWeServe.test.tsx
│   ├── HowItWorks.test.tsx
│   ├── FeaturesSection.test.tsx
│   ├── Ecosystem.test.tsx
│   ├── ProblemSolutionSection.test.tsx
│   ├── ForDestinations.test.tsx
│   ├── PartnershipBanner.test.tsx
│   ├── HeroVariant2.test.tsx
│   ├── HeroVariant3.test.tsx
│   ├── FoxestechnologyHero.test.tsx
│   └── sections/
│       ├── HandheldPOS.test.tsx
│       ├── MobileApps.test.tsx
│       └── SelfServiceKiosk.test.tsx
└── app/
    ├── page.test.tsx
    ├── about.test.tsx
    ├── pricing.test.tsx
    ├── contact.test.tsx
    ├── search.test.tsx
    └── solutions.test.tsx
```

## Test Configuration

### vitest.config.ts

The main Vitest configuration file includes:

- **Environment**: jsdom (simulates browser environment)
- **Setup Files**: vitest.setup.ts (global test setup)
- **Path Aliases**: Configured to use `@/*` imports
- **Coverage**: v8 provider with 70% minimum thresholds
- **Include**: All `*.test.*` and `*.spec.*` files
- **Exclude**: node_modules, dist, .next, out

### vitest.setup.ts

Global test setup includes:

1. **Automatic Cleanup**: Cleans up after each test
2. **Next.js Mocks**:
   - `next/navigation` (useRouter, usePathname, useSearchParams)
3. **Framer Motion Mocks**: Complete motion component mocking
4. **Browser APIs**:
   - IntersectionObserver
   - matchMedia
5. **External Services**:
   - Algolia search client

## Coverage Configuration

Coverage reports are generated with the following thresholds:

- **Lines**: 70%
- **Functions**: 70%
- **Branches**: 70%
- **Statements**: 70%

### Excluded from Coverage

- node_modules/
- vitest.setup.ts
- Config files (*.config.{js,ts})
- Type definitions (*.d.ts)
- Scripts directory
- .next build directory

## Test Coverage Overview

### Current Status

- **Total Test Files**: 32
- **Total Tests**: 138
- **Passing Tests**: 121 (87.7%)
- **Coverage Target**: 70%

### Tested Components (24 files)

#### High Priority (Core Functionality)
- ✅ SearchBar (5 tests)
- ✅ Header (8 tests)
- ✅ Footer (10 tests)
- ✅ ComingSoonModal (9 tests)

#### Medium Priority (Interactive Components)
- ✅ Hero (5 tests)
- ✅ FAQ (6 tests)
- ✅ Solutions (4 tests)
- ✅ Testimonials (3 tests)
- ✅ CTA (4 tests)
- ✅ AIShowcase (2 tests)
- ✅ TrustedBy (2 tests)
- ✅ WhoWeServe (2 tests)
- ✅ HowItWorks (2 tests)

#### Component Variants
- ✅ HeroVariant2 (2 tests)
- ✅ HeroVariant3 (2 tests)
- ✅ FoxestechnologyHero (2 tests)

#### Utility Components
- ✅ FeaturesSection (2 tests)
- ✅ Ecosystem (2 tests)
- ✅ ProblemSolutionSection (2 tests)
- ✅ ForDestinations (2 tests)
- ✅ PartnershipBanner (2 tests)

#### Section Components
- ✅ HandheldPOS (2 tests)
- ✅ MobileApps (2 tests)
- ✅ SelfServiceKiosk (2 tests)

### Tested Libraries (2 files)

- ✅ lib/algolia.ts (10 tests)
- ✅ lib/searchData.ts (19 tests)

### Tested Pages (6 files)

- ✅ Home page (2 tests)
- ✅ About page (2 tests)
- ✅ Pricing page (2 tests)
- ✅ Contact page (2 tests)
- ✅ Search page (2 tests)
- ✅ Solutions page (2 tests)

## Writing Tests

### Component Test Template

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from '@/components/MyComponent';

describe('MyComponent', () => {
  it('should render component', () => {
    render(<MyComponent />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should handle user interaction', () => {
    render(<MyComponent />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button).toHaveClass('active');
  });

  it('should render without crashing', () => {
    const { container } = render(<MyComponent />);
    expect(container).toBeInTheDocument();
  });
});
```

### Library Test Template

```typescript
import { describe, it, expect } from 'vitest';
import { myFunction } from '@/lib/myLib';

describe('lib/myLib', () => {
  describe('myFunction', () => {
    it('should return correct value', () => {
      const result = myFunction('input');
      expect(result).toBe('expected output');
    });

    it('should handle edge cases', () => {
      expect(() => myFunction(null)).toThrow();
    });
  });
});
```

## Best Practices

### 1. Test Organization
- Group related tests with `describe` blocks
- Use descriptive test names starting with "should"
- Keep tests isolated and independent

### 2. Component Testing
- Test user-facing behavior, not implementation details
- Use `screen` queries from @testing-library/react
- Prefer semantic queries (getByRole, getByLabelText)
- Test accessibility (ARIA labels, keyboard navigation)

### 3. Mocking
- Mock external dependencies (API calls, navigation)
- Avoid mocking internal logic
- Use Vitest's built-in mocking utilities
- Keep mocks simple and maintainable

### 4. Assertions
- Use specific matchers (toBeInTheDocument, toHaveClass)
- Test one behavior per test
- Avoid testing multiple unrelated things together

### 5. Coverage
- Aim for meaningful tests, not just coverage numbers
- Focus on critical paths and edge cases
- Don't test trivial code

## Common Patterns

### Testing Client Components

```typescript
import { render, screen, fireEvent } from '@testing-library/react';

it('should handle click events', () => {
  render(<Button onClick={mockFn} />);
  fireEvent.click(screen.getByRole('button'));
  expect(mockFn).toHaveBeenCalledTimes(1);
});
```

### Testing Forms

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('should submit form', async () => {
  const user = userEvent.setup();
  render(<ContactForm />);

  await user.type(screen.getByLabelText(/email/i), 'test@example.com');
  await user.click(screen.getByRole('button', { name: /submit/i }));

  expect(screen.getByText(/success/i)).toBeInTheDocument();
});
```

### Testing Async Components

```typescript
import { render, screen, waitFor } from '@testing-library/react';

it('should load data', async () => {
  render(<DataComponent />);

  await waitFor(() => {
    expect(screen.getByText(/loaded/i)).toBeInTheDocument();
  });
});
```

## Troubleshooting

### Common Issues

#### 1. Framer Motion Props Warning
If you see warnings about `whileInView` or other framer-motion props:
- These are handled by the mock in `vitest.setup.ts`
- Check that the mock is properly filtering out animation props

#### 2. Navigation Mocking
For components using `useRouter`:
- The mock is in `vitest.setup.ts`
- All router methods return vi.fn()
- pathname defaults to '/'

#### 3. Algolia Tests Failing
When Algolia credentials are missing:
- Tests should handle null searchClient gracefully
- Check fallback behavior is tested

#### 4. Image Loading Issues
For Next.js Image components:
- Images are mocked in the test environment
- Test alt text and accessibility instead

### Debug Tips

```bash
# Run specific test file
pnpm test Header.test.tsx

# Run tests matching pattern
pnpm test -- -t "should render"

# Show detailed output
pnpm test -- --reporter=verbose

# Open UI dashboard
pnpm test:ui
```

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm test:run
      - run: pnpm test:coverage
      - uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json
```

## Next Steps

### Recommended Additions

1. **E2E Tests**: Add Playwright or Cypress for end-to-end testing
2. **Visual Regression**: Consider tools like Percy or Chromatic
3. **Performance Tests**: Add performance benchmarks for critical paths
4. **A11y Tests**: Integrate axe-core for automated accessibility testing
5. **API Tests**: Add tests for backend endpoints when implemented

### Coverage Goals

- Achieve 80%+ coverage for critical components
- 90%+ coverage for utility functions and libraries
- Add integration tests for user flows
- Test error boundaries and edge cases

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [React Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Next.js Testing](https://nextjs.org/docs/app/building-your-application/testing/vitest)

## Support

For questions or issues with testing:
1. Check this documentation
2. Review existing test files for examples
3. Consult Vitest/Testing Library docs
4. Open an issue in the repository

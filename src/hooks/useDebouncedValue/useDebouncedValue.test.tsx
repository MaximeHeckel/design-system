import { act, renderHook } from '@testing-library/react';
import { vi, beforeAll, afterAll, describe, it, expect } from 'vitest';

import useDebouncedValue from '../useDebouncedValue';

beforeAll(() => {
  vi.useFakeTimers();
});

afterAll(() => {
  vi.clearAllTimers();
});

describe('useDebouncedValue', () => {
  it('updates the value after the specified delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebouncedValue(value, delay),
      {
        initialProps: { value: '', delay: 500 },
      }
    );

    expect(result.current).toBe('');

    rerender({ value: 'Test', delay: 500 });

    expect(result.current).toBe('');

    act(() => {
      vi.advanceTimersByTime(250);
    });

    expect(result.current).toBe('');

    act(() => {
      vi.advanceTimersByTime(250);
    });

    expect(result.current).toBe('Test');
  });
});

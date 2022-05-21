import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import useDebouncedValue from '../useDebouncedValue';

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.clearAllTimers();
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
      jest.advanceTimersByTime(250);
    });

    expect(result.current).toBe('');

    act(() => {
      jest.advanceTimersByTime(250);
    });

    expect(result.current).toBe('Test');
  });
});

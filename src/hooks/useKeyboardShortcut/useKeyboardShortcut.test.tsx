import userEvent from '@testing-library/user-event';
import { renderHook } from '@testing-library/react';
import useKeyboardShortcut from './useKeyboardShortcut';

describe('useKeyboardShortcut', () => {
  it('triggers the callback when a simple key is pressed', async () => {
    const callback = jest.fn();
    renderHook(() => useKeyboardShortcut('c', callback));

    await userEvent.keyboard('c');

    expect(callback).toHaveBeenCalled();
  });

  it('triggers the callback when a key combination is pressed', async () => {
    const callback = jest.fn();
    renderHook(() => useKeyboardShortcut('ctrl+c', callback));
    await userEvent.keyboard('{control>}c');
    expect(callback).toHaveBeenCalled();
  });

  it('triggers the callback when one of the keys is pressed', async () => {
    const callback = jest.fn();
    renderHook(() => useKeyboardShortcut('ctrl+c|m', callback));

    await userEvent.keyboard('{control>}c');

    expect(callback).toHaveBeenCalled();

    await userEvent.keyboard('m');

    expect(callback).toHaveBeenCalled();
  });

  it('triggers the callback when a key combination is pressed with a specific separator', async () => {
    const callback = jest.fn();
    renderHook(() =>
      useKeyboardShortcut('ctrl*c', callback, { separator: '*' })
    );

    await userEvent.keyboard('{control>}c');

    expect(callback).toHaveBeenCalled();
  });

  it('triggers the callback when one of the keys is pressed with a specific OR separator', async () => {
    const callback = jest.fn();
    renderHook(() =>
      useKeyboardShortcut('ctrl+c$m', callback, { orSeparator: '$' })
    );

    await userEvent.keyboard('{control>}c');

    expect(callback).toHaveBeenCalled();

    await userEvent.keyboard('m');

    expect(callback).toHaveBeenCalled();
  });
});

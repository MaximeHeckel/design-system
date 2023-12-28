import { adjustSlider } from './utils';

describe('Range - utils', () => {
  it('returns the expected linear gradient for a given value', () => {
    expect(adjustSlider(27, 0, 100)).toEqual(
      'linear-gradient(to right, var(--input-active) 27%, var(--input-disabled) 27%)'
    );
  });

  it('returns the expected linear gradient for a given value when the range is disabled', () => {
    expect(adjustSlider(27, 0, 100, true)).toEqual(
      'linear-gradient(to right, var(--input-border) 27%, var(--input-disabled) 27%)'
    );
  });
});

import React from 'react';
import Radio from './Radio';
import { describe, it, expect, vi } from 'vitest';
import { isRadioItemElement } from './utils';

describe('Radio - utils', () => {
  it('isRadioItemElement', () => {
    const Component1 = <Radio.Item id="test" value="test" aria-label="test" />;
    const Component2 = (
      <Radio.Group name="test" onChange={vi.fn()}>
        <div />
      </Radio.Group>
    );

    expect(isRadioItemElement(Component1)).toBeTruthy();
    expect(isRadioItemElement(Component2)).toBeFalsy();
  });
});

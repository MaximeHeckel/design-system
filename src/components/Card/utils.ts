import React from 'react';
import { isElementOfType } from 'src/lib/utils/isElementOfType';
import { CardHeader } from './Card.styles';

export function isHeaderElement(
  child: React.ReactNode
): child is React.ReactElement<{ children: React.ReactNode }> {
  return isElementOfType(child, CardHeader);
}

import React from 'react';

export type CalloutVariant = 'info' | 'danger';

export interface CalloutProps {
  children: React.ReactNode;
  label?: React.ReactNode | string;
  variant: CalloutVariant;
}

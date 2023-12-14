import { styled } from 'src/lib/stitches.config';

export const StyledPill = styled('span', {
  display: 'inline-flex !important',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5px 8px !important',
  minWidth: '40px',
  height: '28px',
  fontSize: 'var(--font-size-1)',
  fontWeight: 'var(--font-weight-500)',
  cursor: 'default',
  userSelect: 'none',
  borderRadius: 'var(--border-radius-1)',

  background: 'var(--pill-background)',
  color: 'var(--pill-color)',

  variants: {
    dark: {
      true: {},
    },
    variant: {
      info: {
        '--pill-background': 'var(--maximeheckel-colors-emphasis)',
        '--pill-color': 'var(--maximeheckel-colors-brand)',
      },
      success: {
        '--pill-background': 'var(--maximeheckel-colors-success-emphasis)',
        '--pill-color': 'var(--maximeheckel-colors-success)',
      },
      warning: {
        '--pill-background': 'var(--maximeheckel-colors-warning-emphasis)',
        '--pill-color': 'var(--maximeheckel-colors-warning)',
      },
      danger: {
        '--pill-background': 'var(--maximeheckel-colors-danger-emphasis)',
        '--pill-color': 'var(--maximeheckel-colors-danger)',
      },
    },
  },
});

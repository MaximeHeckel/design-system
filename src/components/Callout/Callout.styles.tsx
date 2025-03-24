import { styled } from 'src/lib/stitches.config';

export const StyledCalloutIconWrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  top: '-20px',
  right: '-20px',
  borderRadius: '50%',
  padding: '4px',
  color: 'var(--background)',
  border: '6px solid var(--background)',
  background: 'var(--icon-background, var(--background))',

  variants: {
    variant: {
      info: {
        '--icon-background': 'var(--accent)',
      },
      danger: {
        '--icon-background': 'var(--danger)',
      },
      warning: {
        '--icon-background': 'var(--warning)',
      },
    },
  },
});

export const StyledCalloutLabelWrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  top: '-16px',
  right: '-8px',
  borderRadius: 'var(--border-radius-1)',
  padding: '6px',
  color: 'var(--background)',
  fontSize: 'var(--font-size-1)',
  fontWeight: 'var(--font-weight-500)',
  userSelect: 'none',
  background: 'var(--icon-background, var(--background))',

  variants: {
    variant: {
      info: {
        '--icon-background': 'var(--accent)',
      },
      danger: {
        '--icon-background': 'var(--danger)',
      },
      warning: {
        '--icon-background': 'var(--warning)',
      },
    },
  },
});

export const StyledCallout = styled('aside', {
  position: 'relative',
  padding: '16px 16px',
  borderRadius: 'var(--border-radius-1)',
  color: 'var(--text-primary)',
  border: '1px solid var(--emphasis)',
  background: 'var(--callout-background, var(--emphasis))',

  variants: {
    variant: {
      info: {
        '--callout-background': 'var(--emphasis)',
      },
      danger: {
        '--callout-background': 'var(--danger-emphasis)',
      },
      warning: {
        '--callout-background': 'var(--orange-400)',
      },
    },
  },
});

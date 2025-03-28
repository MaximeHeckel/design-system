import { styled } from 'src/lib/stitches.config';

export const StyledCheckbox = styled('input', {
  WebkitAppearance: 'none',
  MozAppearance: 'none',

  flexShrink: 0,

  height: '24px',
  width: '24px',

  outline: 'none',
  display: 'inline-block',
  position: 'relative',
  margin: 0,
  cursor: 'pointer',

  borderRadius: 'var(--border-radius-1)',
  border: '1px solid var(--border-color, var(--input-border))',
  background: 'var(--background, var(--input-background))',
  boxShadow: 'var(--shadow, none)',
  transition: 'background 0.3s, border-color 0.3s, box-shadow 0.2s',

  '--shadow-hover-primary': '0 2px 20px 3px var(--input-focus)',

  '&:after': {
    content: '',
    display: 'block',
    position: 'absolute',
    opacity: 'var(--opacity, 0)',
    transition:
      'transform var(--d-t, 0.3s) var(--d-t-e, ease) var(--d-t-d, 0s), opacity var(--d-o, 0.2s)',
    width: '6px',
    height: '10px',
    border: '2px solid var(--input-background)',
    borderTop: '0',
    borderLeft: '0',
    left: '8px',
    top: '5px',
    transform: 'rotate(var(--rotation, 20deg))',
  },

  '&:checked': {
    '--background': 'var(--input-active)',
    '--border-color': 'var(--input-active)',
    '--d-o': '0.3s',
    '--d-t': '0.6s',
    '--d-t-e': 'cubic-bezier(0.2, 0.85, 0.32, 1.2)',
    '--d-t-d': '0.1s',
    '--opacity': '1',
    '--rotation': '43deg',
  },

  '&:disabled': {
    '--background': 'var(--input-disabled)',
    cursor: 'not-allowed',
    opacity: '0.4',
    filter: 'grayscale(0.25)',
    '&:checked': {
      '--border-color': 'var(--input-border)',
    },
    '& + label': {
      cursor: 'not-allowed',
    },
  },

  '&:hover': {
    '&:not(:disabled)': {
      '&:not(:checked)': {
        '--border-color': 'var(--input-active)',
      },
      '--shadow': 'var(--shadow-hover-primary)',
    },
  },

  '&:focus-visible': {
    '--border-color': 'var(--input-active)',
    '--shadow': 'var(--shadow-hover-primary)',
  },
});

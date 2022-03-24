export const fonts = {
  '--font-fallback':
    "-apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  '--font-display': "'Inter', var(--font-fallback)",
  '--font-mono': "'Fira Code', monospace",
  '--font-numeric': "'Space Grotesk', var(--font-fallback)",
};

export const fontSizes = {
  /* 
    Note: we set --font-size-1 in px on purpose: 14px is the smallest font we should allow in the UI 
    to pass mobile usability issue. Setting it to REM would shrink it to 12px on mobile which is 
    too small
    */
  '--font-size-1': '14px;' /*0.75rem*/,
  '--font-size-2': '0.875rem' /* 16px */,
  '--font-size-3': '1rem',
  '--font-size-4': '1.125rem',
  '--font-size-5': '1.25rem',
  '--font-size-6': '1.5rem',
  '--font-size-7': '2rem',
};

export const fontWeights = {
  '--font-weight-1': '300',
  '--font-weight-2': '400',
  '--font-weight-3': '500',
  '--font-weight-4': '600',
};

/* TODO: Define line height tokens with `--leading` */

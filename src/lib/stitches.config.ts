import { createStitches, CSS as StitchesCSS } from '@stitches/react';

const { config, css, getCssText, globalCss, keyframes, styled, theme } =
  createStitches();

export type CSS = StitchesCSS<typeof config>;
export type { VariantProps } from '@stitches/react';

export { Shadows } from './tokens/shadows';
export { config, css, getCssText, globalCss, keyframes, styled, theme };

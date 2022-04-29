import { globalCss } from './stitches.config';
import darkTheme from './themes/dark';
import lightTheme from './themes/light';
import { palette } from './tokens/colors';
import { grid } from './tokens/layout';
import { radii } from './tokens/radii';
import { spaces } from './tokens/spaces';
import { fonts, fontSizes, fontWeights } from './tokens/typography';

export const globalStyles = globalCss({
  ':root': {
    ...palette,
    ...radii,
    ...spaces,
    ...fonts,
    ...fontSizes,
    ...fontWeights,
    ...grid,
  },
  ...lightTheme,
  ...darkTheme,
});

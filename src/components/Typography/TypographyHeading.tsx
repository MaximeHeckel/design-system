import { CSS } from 'src/lib/stitches.config';
import React from 'react';
import { DEFAULT_TAG } from './Typography.constants';
import Text from './TypographyText';
import {
  HeadingProps,
  HeadingSizeVariants,
  ShortHandHeadingProps,
  TextSizeVariants,
} from './Typography.types';

const Heading = (props: HeadingProps) => {
  const { size = '1', ...rest } = props;

  const headingSize: Record<HeadingSizeVariants, TextSizeVariants['size']> = {
    1: { '@initial': '4' },
    2: { '@initial': '5' },
    3: { '@initial': '6' },
    4: { '@initial': '7' },
  };

  const headingCSS: Record<HeadingSizeVariants, CSS> = {
    1: {
      fontWeight: 'var(--font-weight-600)',
      lineHeight: '1.5',
      letterSpacing: '-0.3px',
    },
    2: {
      fontWeight: 'var(--font-weight-600)',
      lineHeight: '1.5',
      letterSpacing: '-0.3px',
    },
    3: {
      fontWeight: 'var(--font-weight-600)',
      lineHeight: '1.5',
      letterSpacing: '-0.3px',
    },
    4: {
      fontWeight: 'var(--font-weight-600)',
      lineHeight: '1.5',
      letterSpacing: '-0.3px',
    },
  };

  return (
    <Text
      as={DEFAULT_TAG}
      {...rest}
      size={headingSize[size]}
      css={{
        ...headingCSS[size],
        ...props.css,
      }}
    />
  );
};

export const H1 = React.forwardRef<
  React.ElementRef<'h1'>,
  ShortHandHeadingProps
>((props, ref) => (
  <Heading
    {...props}
    ref={ref}
    as="h1"
    size="4"
    spaced={false}
    variant="primary"
  />
));

H1.displayName = 'H1';

export const H2 = (props: ShortHandHeadingProps) => (
  <Heading {...props} as="h2" size="3" spaced={false} variant="primary" />
);

H2.displayName = 'H2';

export const H3 = (props: ShortHandHeadingProps) => (
  <Heading {...props} as="h3" size="2" spaced={false} variant="primary" />
);

H3.displayName = 'H3';

export const H4 = (props: ShortHandHeadingProps) => (
  <Heading {...props} as="h4" size="1" spaced={false} variant="primary" />
);

H4.displayName = 'H4';

Heading.displayName = 'Heading';

export default Heading;

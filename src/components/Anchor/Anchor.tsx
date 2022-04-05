import React from 'react';
import { StyledAnchor } from './Anchor.styles';
import { AnchorProps } from './Anchor.types';
import { getIconString } from './utils';

const Anchor = React.forwardRef(
  (props: AnchorProps, ref: React.Ref<HTMLAnchorElement>) => {
    const { children, href, arrow, underline, favicon, discreet, ...rest } =
      props;

    const icon = getIconString(href, arrow);

    return (
      <StyledAnchor
        arrow={arrow}
        css={{
          '--icon': `url(${icon})`,
        }}
        discreet={discreet}
        favicon={favicon}
        href={href}
        underline={underline}
        ref={ref}
        {...rest}
      >
        {children}
      </StyledAnchor>
    );
  }
);

Anchor.displayName = 'Anchor';

export default Anchor;

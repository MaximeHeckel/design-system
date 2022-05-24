import React from 'react';
import Flex from '../Flex';
import { StyledButton, StyledIconButton } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = React.forwardRef(
  <T extends object>(
    props: ButtonProps<T>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const {
      variant = 'primary',
      children,
      icon,
      startIcon,
      endIcon,
      ...rest
    } = props;

    if (variant === 'icon') {
      return (
        <StyledIconButton variant={variant} ref={ref} {...rest}>
          <Flex
            css={{
              zIndex: 1,
            }}
          >
            {icon}
          </Flex>
        </StyledIconButton>
      );
    }

    return (
      <StyledButton variant={variant} ref={ref} {...rest}>
        {startIcon ? (
          <Flex
            css={{
              marginRight: 'var(--space-2)',
            }}
          >
            {startIcon}
          </Flex>
        ) : null}
        {children}
        {endIcon ? (
          <Flex
            css={{
              marginLeft: 'var(--space-2)',
            }}
          >
            {endIcon}
          </Flex>
        ) : null}
      </StyledButton>
    );
  }
);
Button.displayName = 'Button';

export default Button as <T extends object>(
  props: ButtonProps<T> & { ref?: React.ForwardedRef<HTMLButtonElement> }
) => JSX.Element;

import {
  StyledCallout,
  StyledCalloutIconWrapper,
  StyledCalloutLabelWrapper,
} from './Callout.styles';
import { CalloutProps } from './Callout.types';
import { getVariantIcon } from './utils';

const Callout = (props: CalloutProps) => {
  const { children, label, variant, ...rest } = props;

  const icon = label ? null : getVariantIcon(variant);

  return (
    <StyledCallout variant={variant} {...rest}>
      {icon ? (
        <StyledCalloutIconWrapper
          data-testid={`callout-icon-${variant}`}
          variant={variant}
        >
          {icon}
        </StyledCalloutIconWrapper>
      ) : null}
      {label ? (
        <StyledCalloutLabelWrapper
          data-testid={`callout-label-${variant}`}
          variant={variant}
        >
          {label}
        </StyledCalloutLabelWrapper>
      ) : null}
      {children}
    </StyledCallout>
  );
};

export default Callout;

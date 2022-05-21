import Icon from '../Icon';
import { CalloutVariant } from './Callout.types';

export const getVariantIcon = (variant: CalloutVariant): React.ReactNode => {
  switch (variant) {
    case 'info':
      return <Icon.Info size={5} />;
    case 'danger':
      return <Icon.Alert size={5} />;
  }
};

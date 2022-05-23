import { css } from 'src/lib/stitches.config';
import { VisuallyHiddenProps } from './VisuallyHidden.types';

const visuallyHiddenClass = css({
  border: '0 !important',
  clip: 'rect(1px, 1px, 1px, 1px) !important',
  clipPath: 'inset(50%) !important',
  height: '1px !important',
  margin: '-1px !important',
  overflow: 'hidden !important',
  padding: '0 !important',
  position: 'absolute !important',
  width: '1px !important',
  whiteSpace: 'nowrap !important',
});

const VisuallyHidden = ({
  as: Component = 'p',
  ...props
}: VisuallyHiddenProps) => (
  <Component {...props} className={visuallyHiddenClass()}>
    {props.children}
  </Component>
);

export default VisuallyHidden;

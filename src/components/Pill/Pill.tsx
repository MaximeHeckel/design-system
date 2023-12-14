import { PillProps } from './Pill.types';
import { StyledPill } from './Pill.styles';

/** IDEA
 *  New pill style:
 * - same variant
 * - solid background-color = --foreground-color ?
 */
const Pill = (props: PillProps) => {
  const { children, variant } = props;
  return (
    <StyledPill {...props} variant={variant}>
      {children}
    </StyledPill>
  );
};

export default Pill;

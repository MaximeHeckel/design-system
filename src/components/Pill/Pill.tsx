import { PillProps } from './Pill.types';
import { StyledPill } from './Pill.styles';
import useTheme from 'src/hooks/useTheme';

/** IDEA
 *  New pill style:
 * - same variant
 * - solid background-color = --foreground-color ?
 */
const Pill = (props: PillProps) => {
  const theme = useTheme();
  const { children, variant } = props;
  return (
    <StyledPill {...props} dark={theme.dark} variant={variant}>
      {children}
    </StyledPill>
  );
};

export default Pill;

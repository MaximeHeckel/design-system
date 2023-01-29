import { CollapsibleTrigger } from '@radix-ui/react-collapsible';
import ComponentOrText from '../ComponentOrText';
import Flex from '../Flex';
import Icon from '../Icon';
import { StyledSummary } from './Details.styles';
import { SummaryProps } from './Details.types';

const Summary = (props: SummaryProps) => {
  const { children } = props;

  return (
    <CollapsibleTrigger asChild>
      <StyledSummary>
        <ComponentOrText
          css={{ paddingRight: 'var(--space-8)' }}
          variant="primary"
        >
          {children}
        </ComponentOrText>
        <Flex
          alignItems="center"
          css={{
            position: 'absolute',
            right: 'var(--space-4)',
            top: 'var(--space-5)',
            borderRadius: '50%',
            background: 'var(--maximeheckel-colors-emphasis)',
            width: 'var(--space-6)',
            height: 'var(--space-6)',
          }}
          justifyContent="center"
        >
          <Icon.X size="5" variant="info" />
        </Flex>
      </StyledSummary>
    </CollapsibleTrigger>
  );
};

Summary.displayName = 'Summary';

export default Summary;

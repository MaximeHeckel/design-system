import { CollapsibleTrigger } from '@radix-ui/react-collapsible';
import ComponentOrText from '../ComponentOrText';
import Flex from '../Flex';
import Icon from '../Icon';
import { StyledSummary } from './Details.styles';
import { SummaryProps } from './Details.types';
import { glassMaterialPrimitives } from '../GlassMaterial';

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
            padding: 'var(--space-1)',
            top: 'var(--space-4)',
            borderRadius: '50%',
            background: glassMaterialPrimitives['background-color'],
          }}
          justifyContent="center"
        >
          <Icon.X size="3" variant="tertiary" />
        </Flex>
      </StyledSummary>
    </CollapsibleTrigger>
  );
};

Summary.displayName = 'Summary';

export default Summary;

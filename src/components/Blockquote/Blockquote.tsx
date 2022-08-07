import { BlockquoteContent, BlockquoteWrapper } from './Blockquote.styles';
import { BlockquoteProps } from './Blockquote.types';

const Blockquote = (props: BlockquoteProps) => {
  const { children, ...rest } = props;

  return (
    <BlockquoteWrapper {...rest}>
      <BlockquoteContent>{children}</BlockquoteContent>
    </BlockquoteWrapper>
  );
};

export default Blockquote;

import React from 'react';
import { BlockquoteContent, BlockquoteWrapper } from './Blockquote.styles';

const Blockquote: React.FC = (props) => {
  const { children, ...rest } = props;

  return (
    <BlockquoteWrapper {...rest}>
      <BlockquoteContent>{children}</BlockquoteContent>
    </BlockquoteWrapper>
  );
};

export default Blockquote;

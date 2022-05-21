import React from 'react';
import { StyledBlockquote } from './Blockquote.styles';

const Blockquote: React.FC = (props) => {
  const { children, ...rest } = props;

  return (
    <StyledBlockquote {...rest}>
      <div>{children}</div>
    </StyledBlockquote>
  );
};

export default Blockquote;

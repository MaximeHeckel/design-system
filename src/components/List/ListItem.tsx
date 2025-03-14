import React from 'react';
import Icon from '../Icon';
import { StyledListItem } from './List.styles';
import { Box } from 'src';

const ListItem: React.FC<React.LiHTMLAttributes<HTMLLIElement>> = (props) => {
  const { children, ...rest } = props;

  return (
    <StyledListItem {...rest}>
      <Box data-list-item>
        <Icon.Arrow size="4" variant="info" />
      </Box>
      <div>{children}</div>
    </StyledListItem>
  );
};

ListItem.displayName = 'ListItem';

export default ListItem;

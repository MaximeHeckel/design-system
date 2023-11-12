import React from 'react';
import Icon from '../Icon';
import { StyledListItem } from './List.styles';

const ListItem: React.FC<React.LiHTMLAttributes<HTMLLIElement>> = (props) => {
  const { children, ...rest } = props;

  return (
    <StyledListItem {...rest}>
      <span data-list-item>
        <Icon.Arrow size="5" variant="info" />
      </span>
      <div>{children}</div>
    </StyledListItem>
  );
};

ListItem.displayName = 'ListItem';

export default ListItem;

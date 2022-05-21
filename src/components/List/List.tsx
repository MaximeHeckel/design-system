import ListItem from './ListItem';
import { StyledList } from './List.styles';
import { ListProps } from './List.types';

const List = (props: ListProps) => {
  const { variant = 'unordered', children, ...rest } = props;

  const Component = variant === 'ordered' ? 'ol' : 'ul';

  return (
    <StyledList as={Component} variant={variant} {...rest}>
      {children}
    </StyledList>
  );
};

List.Item = ListItem;

export default List;

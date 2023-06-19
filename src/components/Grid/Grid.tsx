import { forwardRef, ForwardedRef } from 'react';
import * as S from './Grid.styles';
import { GridComponentType } from './Grid.types';
import GridItem from './GridItem';

const Grid: GridComponentType = forwardRef(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      children,
      css,
      autoColumns,
      autoRows,
      templateAreas,
      templateColumns,
      templateRows,
      ...rest
    } = props;

    return (
      <S.Grid
        css={{
          gridAutoColumns: autoColumns,
          gridAutoRows: autoRows,
          gridTemplateAreas: templateAreas,
          gridTemplateRows: templateRows,
          gridTemplateColumns: templateColumns,
          ...css,
        }}
        {...rest}
        ref={ref}
      >
        {children}
      </S.Grid>
    );
  }
);

Grid.displayName = 'Grid';
Grid.Item = GridItem;

export default Grid;

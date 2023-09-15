import { Children, cloneElement, isValidElement } from 'react';

import { StyledRow } from './styles';
import type { RowProps } from './types';

export const Row = ({
  children,
  columns,
  rowGap,
  columnGap,
  rowSpacing,
  columnSpacing,
  direction,
  wrap,
  justify,
  align,
  ...props
}: RowProps) => {
  const childrenWithProps = Children.toArray(children).map((child) => {
    if (isValidElement(child) && (child as any)?.type?.name === 'Col') {
      return cloneElement(child, { ...child.props, columns });
    }
    return child;
  });

  return (
    <StyledRow
      $rowGap={rowGap}
      $columnGap={columnGap}
      $rowSpacing={rowSpacing}
      $columnSpacing={columnSpacing}
      $direction={direction}
      $columns={columns}
      $wrap={wrap}
      $justify={justify}
      $align={align}
      {...props}
    >
      {childrenWithProps}
    </StyledRow>
  );
};

import { Children, cloneElement, isValidElement } from 'react';

import { StyledRow } from './styles';
import { RowProps } from './types';

export const Row = (props: RowProps) => {
  const { children, className, columns, style, rowGap, columnGap, rowSpacing, columnSpacing, ...otherProps } = props;

  const childrenWithProps = Children.toArray(children).map((child) => {
    if (isValidElement(child) && (child as any)?.type?.name === 'Col') {
      return cloneElement(child, { ...child.props, columns: columns });
    }
    return child;
  });

  return (
    <StyledRow
      className={className}
      style={style}
      $rowGap={rowGap}
      $columnGap={columnGap}
      $rowSpacing={rowSpacing}
      $columnSpacing={columnSpacing}
      {...otherProps}
    >
      {childrenWithProps}
    </StyledRow>
  );
};

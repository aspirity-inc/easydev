import { Children, cloneElement, isValidElement } from 'react';

import { StyledGrid } from './styles';
import { GridProps } from './types';

export const Grid = (props: GridProps) => {
  const { children, className, columns, style, ...otherProps } = props;

  const childrenWithProps = Children.toArray(children).map((child) => {
    if (isValidElement(child) && (child as any)?.type?.displayName === 'GridItem') {
      return cloneElement(child, { ...child.props, columns: columns });
    }
    return child;
  });

  return (
    <StyledGrid className={className} style={style} {...otherProps}>
      {childrenWithProps}
    </StyledGrid>
  );
};

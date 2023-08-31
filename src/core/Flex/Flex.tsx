import { CSSProperties, ComponentPropsWithoutRef } from 'react';

import { StyledWrapper } from './styles';

type FlexProps = ComponentPropsWithoutRef<'div'> & {
  direction?: CSSProperties['flexDirection'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  wrap?: CSSProperties['flexWrap'];
  gap?: number;
  rowGap?: number;
  columnGap?: number;
};

export const Flex = ({ direction, align, justify, wrap, gap, rowGap, columnGap, children, ...props }: FlexProps) => {
  return (
    <StyledWrapper
      $direction={direction}
      $align={align}
      $justify={justify}
      $wrap={wrap}
      $gap={gap}
      $rowGap={rowGap}
      $columnGap={columnGap}
      {...props}
    >
      {children}
    </StyledWrapper>
  );
};

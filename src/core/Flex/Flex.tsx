import { StyledFlex } from './styles';
import type { FlexProps } from './types';

export const Flex = ({ direction, align, justify, wrap, gap, rowGap, columnGap, children, ...props }: FlexProps) => {
  return (
    <StyledFlex
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
    </StyledFlex>
  );
};

import { StyledFlex } from './styles';
import type { FlexProps } from './types';

export const Flex = ({
  direction,
  align,
  justify,
  wrap,
  gap,
  rowGap,
  columnGap,
  inline,
  children,
  ...props
}: FlexProps) => {
  return (
    <StyledFlex
      className="easy_flex"
      $direction={direction}
      $align={align}
      $justify={justify}
      $wrap={wrap}
      $gap={gap}
      $rowGap={rowGap}
      $columnGap={columnGap}
      $inline={inline}
      {...props}
    >
      {children}
    </StyledFlex>
  );
};

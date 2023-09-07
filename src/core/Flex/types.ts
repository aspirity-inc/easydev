import { ComponentPropsWithoutRef, CSSProperties } from 'react';

export type FlexProps = ComponentPropsWithoutRef<'div'> & {
  direction?: CSSProperties['flexDirection'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  wrap?: CSSProperties['flexWrap'];
  gap?: number;
  rowGap?: number;
  columnGap?: number;
};

export type StyledFlexProps = {
  $direction?: CSSProperties['flexDirection'];
  $align?: CSSProperties['alignItems'];
  $justify?: CSSProperties['justifyContent'];
  $wrap?: CSSProperties['flexWrap'];
  $gap?: number;
  $rowGap?: number;
  $columnGap?: number;
};

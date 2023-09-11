import { ReactNode, CSSProperties } from 'react';

export type RowProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  // flex-direction
  direction?: CSSProperties['flexDirection'];
  // The number of columns
  columns?: number;
  //horizontal space between items
  columnSpacing?: number;
  // vertical space between items
  rowSpacing?: number;
  wrap?: CSSProperties['flexWrap'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  rowGap?: number;
  columnGap?: number;
};

export type StyledRowProps = {
  // flex-direction
  $direction?: CSSProperties['flexDirection'];
  // The number of columns
  $columns?: number;
  //horizontal space between items
  $columnSpacing?: number;
  // vertical space between items
  $rowSpacing?: number;
  $wrap?: CSSProperties['flexWrap'];
  $justify?: CSSProperties['justifyContent'];
  $align?: CSSProperties['alignItems'];
  $rowGap?: number;
  $columnGap?: number;
};

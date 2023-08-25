import { ReactNode, CSSProperties } from 'react';

type Direction = 'column-reverse' | 'column' | 'row-reverse' | 'row';
type Wrap = 'nowrap' | 'wrap-reverse' | 'wrap';
type JustifyContent =
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type AlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';

export type RowProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  // flex-direction
  direction?: Direction;
  // The number of columns
  columns?: number;
  //horizontal space between items
  columnSpacing?: number;
  // vertical space between items
  rowSpacing?: number;
  wrap?: Wrap;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  rowGap?: number;
  columnGap?: number;
};

export type StyledRowProps = Omit<RowProps, 'children' | 'classname'>;

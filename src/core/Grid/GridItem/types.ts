import { ReactNode } from 'react';

export type GridItemProps = {
  children: ReactNode;
  // the number of columns that item occupies
  size?: number | 'auto' | boolean;
  columns?: number;
};

export type GridItemSizeProps = {
  flexBasis?: string | number;
  flexGrow?: number;
  flexShrink?: number;
  maxWidth?: string | number;
  width?: string | number;
};

export type StyledGridItemProps = Omit<GridItemProps, 'children'> & GridItemSizeProps;

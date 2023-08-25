import { ReactNode } from 'react';

export type ColProps = {
  children: ReactNode;
  // the number of columns that item occupies
  size?: number | 'auto' | boolean;
  columns?: number;
};

export type ColSizeProps = {
  flexBasis?: string | number;
  flexGrow?: number;
  flexShrink?: number;
  maxWidth?: string | number;
  width?: string | number;
};

export type StyledColProps = Omit<ColProps, 'children'> & ColSizeProps;

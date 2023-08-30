import { CSSProperties, ReactNode } from 'react';

export type ColProps = {
  children: ReactNode;
  // the number of columns that item occupies
  size?: number;
  columns?: number;
  alignContent?: CSSProperties['alignContent'];
  alignSelf?: CSSProperties['alignSelf'];
};

export type ColSizeProps = {
  basis?: CSSProperties['flexBasis'];
  grow?: CSSProperties['flexGrow'];
  shrink?: CSSProperties['flexShrink'];
  maxWidth?: CSSProperties['maxWidth'];
  width?: CSSProperties['width'];
};

export type StyledColProps = Omit<ColProps, 'children'> & ColSizeProps;

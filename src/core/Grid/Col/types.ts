import { CSSProperties, ReactNode } from 'react';

export type ColProps = {
  children: ReactNode;
  // the number of columns that item occupies
  size?: number;
  columns?: number;
  alignContent?: CSSProperties['alignContent'];
  alignSelf?: CSSProperties['alignSelf'];
};

export type StyledColProps = {
  $basis?: CSSProperties['flexBasis'];
  $alignContent?: CSSProperties['alignContent'];
  $alignSelf?: CSSProperties['alignSelf'];
};

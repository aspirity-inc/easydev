import { CSSProperties, ReactNode } from 'react';

export type TypographyBaseType = {
  children: ReactNode | ReactNode[] | string;
  className?: string;
  style?: CSSProperties;
  color?: CSSProperties['color'];
  bgColor?: CSSProperties['backgroundColor'];
};

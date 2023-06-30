import { CSSProperties, ReactNode } from 'react';

export type TypographyBaseType = {
  children: ReactNode | string | ReactNode[];
  className?: string;
  style?: CSSProperties;
  type?: TypographyTypeProp;
};

export type TypographyTypeProp = 'success' | 'warning' | 'error';

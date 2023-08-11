import { CSSProperties, ReactNode } from 'react';

export type TypographyBaseType = {
  children: ReactNode | ReactNode[] | string;
  className?: string;
  style?: CSSProperties;
  color?: React.CSSProperties['color'];
  bgColor?: React.CSSProperties['backgroundColor'];
};

export type TitleVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

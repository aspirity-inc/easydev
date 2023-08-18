import { CSSProperties } from 'react';

export type ProgressBarTypeBase = {
  value: number;
  $progressColor?: CSSProperties['color'];
  $progressBackground?: CSSProperties['color'];
  $size?: 'small' | 'default';
  $rounded?: boolean;
};

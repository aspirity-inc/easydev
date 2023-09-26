import type { BaseComponentType } from '@core/Box/types.ts';

export type ProgressBarTypeBase = BaseComponentType & {
  value: number;
  $size?: 'small' | 'default';
  $rounded?: boolean;
};

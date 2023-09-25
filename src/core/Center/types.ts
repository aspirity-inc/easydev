import type { BaseComponentType } from '@core/Box/types.ts';

export type StyledCenterProps = {
  $inline?: boolean;
  $gap?: number;
};

export type CenterProps = BaseComponentType & {
  inline?: boolean;
  gap?: number;
};

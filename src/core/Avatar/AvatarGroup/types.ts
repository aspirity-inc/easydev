import type { ReactElement } from 'react';

import type { BaseComponentType } from '@core/Box/types.ts';

import type { AvatarProps } from '..';

export type AvatarGroupProps = BaseComponentType & {
  spacing?: number;
  max?: number;
  children: ReactElement<AvatarProps> | ReactElement<AvatarProps>[];

  groupItemProps?: Pick<BaseComponentType, 'style'>;
};

export type StyledAvatarGroupProps = {
  $spacing: number;
};

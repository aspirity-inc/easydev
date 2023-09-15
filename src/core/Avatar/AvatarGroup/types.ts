import { ComponentPropsWithoutRef, ReactElement } from 'react';

import type { AvatarProps } from '..';

export type AvatarGroupProps = ComponentPropsWithoutRef<'div'> & {
  spacing?: number;
  max?: number;
  children: ReactElement<AvatarProps> | ReactElement<AvatarProps>[];
};

export type StyledAvatarGroupProps = {
  $spacing: number;
};

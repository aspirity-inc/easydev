import type { ComponentPropsWithoutRef } from 'react';

import type { BaseComponentType } from '@core/Box/types.ts';

import { avatarRadiusVariants, avatarSizeVariants } from './constants';

export type AvatarRadiusVariantsType = (typeof avatarRadiusVariants)[number] | number;

export type AvatarSizeVariantsType = (typeof avatarSizeVariants)[number] | number;

export type AvatarProps = BaseComponentType & {
  alt?: string;
  src?: string;
  radius?: AvatarRadiusVariantsType;
  size?: AvatarSizeVariantsType;
  imageProps?: ComponentPropsWithoutRef<'img'>;
  online?: boolean;
};

export type StyledAvatarProps = {
  $radius: AvatarRadiusVariantsType;
  $size: AvatarSizeVariantsType;
};

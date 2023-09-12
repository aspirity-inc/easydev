import { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react';

export const avatarRadiusesVariants = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
export type AvatarRadiusesVariantsType = (typeof avatarRadiusesVariants)[number] | number;

export const avatarSizesVariants = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
export type AvatarSizesVariantsType = (typeof avatarSizesVariants)[number] | number;

export type AvatarProps = ComponentPropsWithoutRef<'div'> & {
  alt?: string;
  src?: string;
  radius?: AvatarRadiusesVariantsType;
  size?: AvatarSizesVariantsType;
  imageProps?: ComponentPropsWithoutRef<'img'>;
  online?: boolean;
  children?: ReactNode;
  color?: CSSProperties['color'];
  bgColor?: CSSProperties['backgroundColor'];
};

export type StyledAvatarProps = {
  $radius: AvatarRadiusesVariantsType;
  $size: AvatarSizesVariantsType;
  $color?: CSSProperties['color'];
  $bgColor?: CSSProperties['backgroundColor'];
};

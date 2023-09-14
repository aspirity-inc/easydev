import { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react';

export const avatarRadiusVariants = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
export type AvatarRadiusVariantsType = (typeof avatarRadiusVariants)[number] | number;

export const avatarSizeVariants = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
export type AvatarSizeVariantsType = (typeof avatarSizeVariants)[number] | number;

export type AvatarProps = ComponentPropsWithoutRef<'div'> & {
  alt?: string;
  src?: string;
  radius?: AvatarRadiusVariantsType;
  size?: AvatarSizeVariantsType;
  imageProps?: ComponentPropsWithoutRef<'img'>;
  online?: boolean;
  children?: ReactNode;
  color?: CSSProperties['color'];
  bgColor?: CSSProperties['backgroundColor'];
};

export type StyledAvatarProps = {
  $radius: AvatarRadiusVariantsType;
  $size: AvatarSizeVariantsType;
  $color?: CSSProperties['color'];
  $bgColor?: CSSProperties['backgroundColor'];
};

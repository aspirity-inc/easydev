import { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react';

export const avatarSizesRadiusesVariants = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
export type AvatarSizesRadiusesVariantsType = (typeof avatarSizesRadiusesVariants)[number] | number;

export type AvatarProps = ComponentPropsWithoutRef<'div'> & {
  alt?: string;
  src?: string;
  radius?: AvatarSizesRadiusesVariantsType;
  size?: AvatarSizesRadiusesVariantsType;
  imageProps?: ComponentPropsWithoutRef<'img'>;
  online?: boolean;
  children?: ReactNode;
  color?: CSSProperties['color'];
  bgColor?: CSSProperties['backgroundColor'];
};

export type StyledAvatarProps = {
  $radius: AvatarSizesRadiusesVariantsType;
  $size: AvatarSizesRadiusesVariantsType;
  $color?: CSSProperties['color'];
  $bgColor?: CSSProperties['backgroundColor'];
};

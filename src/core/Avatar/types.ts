import { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';

export type AvatarSizesRadiusesType = number | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type AvatarProps = ComponentPropsWithoutRef<'div'> & {
  alt?: string;
  src?: string;
  radius?: AvatarSizesRadiusesType;
  size?: AvatarSizesRadiusesType;
  imageProps?: ComponentPropsWithoutRef<'img'>;
  online?: boolean;
  children?: ReactNode;
  color?: React.CSSProperties['color'];
  bgColor?: React.CSSProperties['backgroundColor'];
};

export type AvatarWrapperProps = {
  $radius: AvatarSizesRadiusesType;
  $size: AvatarSizesRadiusesType;
  $color?: React.CSSProperties['color'];
  $bgColor?: React.CSSProperties['backgroundColor'];
};

export type AvatarGroupProps = ComponentPropsWithoutRef<'div'> & {
  spacing?: number;
  max?: number;
  children: ReactElement<AvatarProps> | ReactElement<AvatarProps>[];
};

export type StyledAvatarGroupProps = {
  $spacing: number;
};

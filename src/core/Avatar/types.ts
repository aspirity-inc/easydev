import { ComponentPropsWithoutRef, ReactNode } from 'react';

export type AvatarSizesRadiusesType = number | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type AvatarProps = ComponentPropsWithoutRef<'div'> & {
  alt?: string;
  src?: string;
  radius?: AvatarSizesRadiusesType;
  size?: AvatarSizesRadiusesType;
  imageProps?: Record<string, any>;
  online?: boolean;
  children?: ReactNode;
  color?: React.CSSProperties['color'];
  bgColor?: React.CSSProperties['backgroundColor'];
};

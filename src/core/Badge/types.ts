import { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react';

export const defaultColors = ['success', 'error', 'warning'] as const;

export type DefaultBadgeColor = (typeof defaultColors)[number];

export type BadgeColor = DefaultBadgeColor | CSSProperties['color'];

export type BadgeSize = 'sm' | 'md' | 'lg';

export type BadgeProps = ComponentPropsWithoutRef<'div'> & {
  color?: BadgeColor;
  textColor?: CSSProperties['color'];
  size?: BadgeSize;
  fullWidth?: boolean;
  children?: ReactNode;
};

export type StyledBadgeProps = {
  $color: BadgeColor;
  $textColor: CSSProperties['color'];
  $size: BadgeSize;
  $fullWidth: boolean | undefined;
};

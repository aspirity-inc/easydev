import { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react';

export const defaultColors = ['success', 'error', 'warning'] as const;

export type DefaultBadgeColor = (typeof defaultColors)[number];

export type BadgeColor = DefaultBadgeColor | CSSProperties['color'];

export const badgeSizeVariants = ['sm', 'md', 'lg'] as const;

export type BadgeSizeVariantsType = (typeof badgeSizeVariants)[number];

export type BadgeProps = ComponentPropsWithoutRef<'div'> & {
  color?: BadgeColor;
  textColor?: CSSProperties['color'];
  size?: BadgeSizeVariantsType;
  fullWidth?: boolean;
  children?: ReactNode;
};

export type StyledBadgeProps = {
  $color: BadgeColor;
  $textColor: CSSProperties['color'];
  $size: BadgeSizeVariantsType;
  $fullWidth: boolean | undefined;
};

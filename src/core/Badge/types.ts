import type { CSSProperties } from 'react';

import type { BaseComponentType } from '@core/Box/types.ts';

import { badgeSizeVariants, defaultColors } from './constants';

export type DefaultBadgeColor = (typeof defaultColors)[number];

export type BadgeColor = DefaultBadgeColor | CSSProperties['color'];

export type BadgeSizeVariantsType = (typeof badgeSizeVariants)[number];

export type BadgeProps = BaseComponentType & {
  color?: BadgeColor;
  textColor?: CSSProperties['color'];
  size?: BadgeSizeVariantsType;
  fullWidth?: boolean;
};

export type StyledBadgeProps = {
  $color: BadgeColor;
  $textColor: CSSProperties['color'];
  $size: BadgeSizeVariantsType;
  $fullWidth: boolean | undefined;
};

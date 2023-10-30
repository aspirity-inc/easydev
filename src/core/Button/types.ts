import type { CSSProperties, ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types.ts';

export type ButtonProps = BaseComponentType & {
  icon?: ReactNode;
  reversed?: boolean;
  size?: ButtonSizeVariantsType;
  rounded?: ButtonRoundedVariantsType;
  loading?: boolean;
  loadingIcon?: ReactNode;
  variant?: ButtonVariantsType;
};

export const ButtonSizeVariants = ['sm', 'lg'] as const;
export type ButtonSizeVariantsType = (typeof ButtonSizeVariants)[number];

export const ButtonRoundedVariants = ['sm', 'lg', 'none'] as const;
export type ButtonRoundedVariantsType = (typeof ButtonSizeVariants)[number];

export const ButtonVariants = ['primary', 'secondary'] as const;
export type ButtonVariantsType = (typeof ButtonVariants)[number];

export type StyledButtonProps = {
  $size?: ButtonSizeVariantsType;
  $rounded?: ButtonRoundedVariantsType;
  $reversed?: boolean;
  $variant?: ButtonVariantsType;
  $color?: CSSProperties['color'];
  $bgColor?: CSSProperties['backgroundColor'];
  $isIconButton?: boolean;
};

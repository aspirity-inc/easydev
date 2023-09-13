import { ReactNode, BaseSyntheticEvent, CSSProperties } from 'react';

export type StyledChipProps = {
  disabled?: boolean;
  $active?: boolean | undefined;
  $variant?: ChipVariantsType;
  $color?: CSSProperties['color'];
  $bgColor?: CSSProperties['backgroundColor'];
};

export type ChipProps = {
  label: string;
  variant?: ChipVariantsType;
  disabled?: boolean;
  defaultChecked?: boolean;
  chipContent?: ReactNode;
  onChange?: (event: BaseSyntheticEvent) => void;
  className?: string;
  style?: CSSProperties;
  color?: CSSProperties['color'];
  bgColor?: CSSProperties['backgroundColor'];
};

export const chipVariants = ['filled', 'outlined'] as const;
export type ChipVariantsType = (typeof chipVariants)[number];

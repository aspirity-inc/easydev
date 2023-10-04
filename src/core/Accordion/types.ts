import type { ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types';

export const accordionVariants = ['filled', 'bordered'] as const;
export type AccordionVariantsType = (typeof accordionVariants)[number];

export type AccordionValue = number | string;

export type AccordionItemValue<Multiple extends boolean> = Multiple extends true ? AccordionValue[] : AccordionValue;

export type AccordionProps<Multiple extends boolean = false> = BaseComponentType & {
  variant?: AccordionVariantsType;
  duration?: number;
  openIcon?: ReactNode;
  closeIcon?: ReactNode;
  multiple?: Multiple;
  value?: AccordionItemValue<Multiple>;
  onChange?: (value: AccordionItemValue<Multiple>) => void;
};

export type AccordionItemProps = BaseComponentType & {
  itemId?: AccordionValue;
  disabled?: boolean;
};

export type AccordionControlProps = BaseComponentType & {
  icon?: ReactNode;
  title?: string;
  subtitle?: string;
};

export type StyledControlProps = {
  $opened: boolean;
  $variant: string;
};

export type PanelProps = BaseComponentType;

export type AnimationPanelProps = {
  $opened: boolean;
  $height?: number;
  $duration: number;
};

export type ChevronIconProps = BaseComponentType & {
  opened: boolean;
  openIcon?: ReactNode;
  closeIcon?: ReactNode;
};

export type StyledChevronIconProps = {
  $opened: boolean;
  $variant: string;
};

export type AnimationIconProps = {
  $opened: boolean;
};

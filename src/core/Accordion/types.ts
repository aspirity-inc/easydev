import { ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types';

export const accordionVariants = ['filled', 'bordered'] as const;
export type AccordionVariantsType = (typeof accordionVariants)[number];

export type AccordionProps = BaseComponentType & {
  variant?: AccordionVariantsType;
  duration?: number;
  openIcon?: ReactNode;
  closeIcon?: ReactNode;
  openIndex?: number;
  handleOpenIndex?: (index: number) => void;
};

export type AccordionItemProps = BaseComponentType;

export type ControlProps = BaseComponentType & {
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

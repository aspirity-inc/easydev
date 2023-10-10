import type { ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types';

import { accordionVariants } from './constants';

export type AccordionVariantsType = (typeof accordionVariants)[number];

export type AccordionValue = number | string;

export type AccordionItemValue<Multiple extends boolean> = Multiple extends true ? AccordionValue[] : AccordionValue;

export type AccrodionItemType = {
  id: number;
  icon?: ReactNode;
  title?: string;
  subtitle?: string;
  control?: ReactNode;
  panel: ReactNode;
  disabled?: boolean;
};

export type AccordionProps<Multiple extends boolean = false> = Omit<BaseComponentType, 'children'> & {
  items: AccrodionItemType[];
  variant?: AccordionVariantsType;
  duration?: number;
  openIcon?: ReactNode;
  closeIcon?: ReactNode;
  multiple?: Multiple;
  value?: AccordionItemValue<Multiple>;
  onChange?: (value: AccordionItemValue<Multiple>) => void;
};

export type AccordionControlProps = BaseComponentType & {
  icon?: ReactNode;
  title?: string;
  subtitle?: string;
  opened: boolean;
  variant: AccordionVariantsType;
  openIcon?: ReactNode;
  closeIcon?: ReactNode;
  showIcon?: boolean;
};

export type StyledControlProps = {
  $opened: boolean;
  $variant: string;
};

export type PanelProps = BaseComponentType & {
  opened: boolean;
  variant: AccordionVariantsType;
  duration: number;
};

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

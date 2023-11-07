import type { ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types';

import { accordionVariants } from './constants';

export type AccordionVariantsType = (typeof accordionVariants)[number];

export type AccordionValue = number | string;

export type AccordionItemValue<Multiple extends boolean> = Multiple extends true ? AccordionValue[] : AccordionValue;

export type AccordionItemType = {
  id: number | string;
  icon?: ReactNode;
  title?: string;
  subtitle?: string;
  control?: ReactNode;
  panel: ReactNode;
  disabled?: boolean;
};

export type AccordionProps<Multiple extends boolean = false> = Omit<BaseComponentType, 'children'> & {
  items: AccordionItemType[];
  variant?: AccordionVariantsType;
  duration?: number;
  openIcon?: ReactNode;
  closeIcon?: ReactNode;
  multiple?: Multiple;
  value?: AccordionItemValue<Multiple>;
  onChange?: (value: AccordionItemValue<Multiple>) => void;
  unstyledControl?: boolean;

  accordionItemProps?: Pick<BaseComponentType, 'style'>;
  accordionControlProps?: Pick<BaseComponentType, 'style'>;
  accordionFirstFlexProps?: Pick<BaseComponentType, 'style'>;
  accordionSecondFlexProps?: Pick<BaseComponentType, 'style'>;
  accordionThirdFlexProps?: Pick<BaseComponentType, 'style'>;
  titleProps?: Pick<BaseComponentType, 'style'>;
  subtitleProps?: Pick<BaseComponentType, 'style'>;
  iconProps?: Pick<BaseComponentType, 'style'>;
  animationWrapperProps?: Pick<BaseComponentType, 'style'>;
  chevronIconProps?: Pick<BaseComponentType, 'style'>;
  accordionPanelProps?: Pick<BaseComponentType, 'style'>;
  accordionAnimationProps?: Pick<BaseComponentType, 'style'>;
};

export type AccordionControlProps = BaseComponentType & {
  icon?: ReactNode;
  title?: string;
  subtitle?: string;
  opened: boolean;
  variant?: AccordionVariantsType;
  openIcon?: ReactNode;
  closeIcon?: ReactNode;
  unstyled?: boolean;

  accordionControlProps?: Pick<BaseComponentType, 'style'>;
  accordionFirstFlexProps?: Pick<BaseComponentType, 'style'>;
  accordionSecondFlexProps?: Pick<BaseComponentType, 'style'>;
  accordionThirdFlexProps?: Pick<BaseComponentType, 'style'>;
  titleProps?: Pick<BaseComponentType, 'style'>;
  subtitleProps?: Pick<BaseComponentType, 'style'>;
  iconProps?: Pick<BaseComponentType, 'style'>;
  animationWrapperProps?: Pick<BaseComponentType, 'style'>;
  chevronIconProps?: Pick<BaseComponentType, 'style'>;
};

export type StyledControlProps = {
  $opened: boolean;
  $variant: string;
};

export type PanelProps = BaseComponentType & {
  opened: boolean;
  variant?: AccordionVariantsType;
  duration?: number;

  accordionAnimationProps?: Pick<BaseComponentType, 'style'>;
  accordionPanelProps?: Pick<BaseComponentType, 'style'>;
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

  animationWrapperProps?: Pick<BaseComponentType, 'style'>;
  chevronIconProps?: Pick<BaseComponentType, 'style'>;
};

export type StyledChevronIconProps = {
  $opened: boolean;
  $variant: string;
};

export type AnimationIconProps = {
  $opened: boolean;
};

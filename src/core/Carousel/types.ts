import type { ReactNode, MouseEvent } from 'react';

import type { BaseComponentType } from '@core/Box/types';

import { arrowTypes } from './constants';
import type { KeenSliderHooks, KeenSliderInstance, KeenSliderOptions } from 'keen-slider';

export type CarouselArrowTypes = (typeof arrowTypes)[number];

export type DotsIconsType = {
  default: ReactNode;
  active: ReactNode;
};

export type CarouselProps = BaseComponentType & {
  items: ReactNode[];
  arrows?: boolean;
  arrowsType?: CarouselArrowTypes;
  arrowIcon?: ReactNode;
  dots?: boolean;
  dotIcons?: DotsIconsType;
  thumbnails?: boolean;
  height?: number;
  keenSliderProps?: KeenSliderOptions;
  thumbnailsProps?: KeenSliderOptions;
  title?: ReactNode;

  carouselInnerWrapperProps?: Pick<BaseComponentType, 'style'>;
  carouselTopTitleArrowsProps?: Pick<BaseComponentType, 'style'>;
  carouselArrowsProps?: Pick<BaseComponentType, 'style'>;
  carouselArrowProps?: Pick<BaseComponentType, 'style'>;
  defaultArrowIconProps?: Pick<BaseComponentType, 'style'>;
  carouselProps?: Pick<BaseComponentType, 'style'>;
  carouselSliderProps?: Pick<BaseComponentType, 'style'>;
  carouselDotsProps?: Pick<BaseComponentType, 'style'>;
  carouselDotProps?: Pick<BaseComponentType, 'style'>;
  carouseThumbnailsProps?: Pick<BaseComponentType, 'style'>;
  carouseThumbnailProps?: Pick<BaseComponentType, 'style'>;
};

export type StyledCarouselProps = {
  $height?: number;
};

export type ThumbnailsProps = BaseComponentType & {
  items: ReactNode[];
  thumbnailRef: (node: HTMLElement | null) => void;

  carouseThumbnailsProps?: Pick<BaseComponentType, 'style'>;
  carouseThumbnailProps?: Pick<BaseComponentType, 'style'>;
};

export type ArrowProps = BaseComponentType & {
  type?: CarouselArrowTypes;
  left?: boolean;
  onClick: (e: MouseEvent) => void;
  icon?: ReactNode;
};

export type StyledArrowProps = {
  $type: string;
  $left: boolean;
};

export type DotProps = BaseComponentType & {
  active: boolean;
  onClick: (e: MouseEvent) => void;
  icons?: DotsIconsType;

  carouselDotProps?: Pick<BaseComponentType, 'style'>;
};

export type StyledDotProps = {
  $active: boolean;
};

export type StyledCarouselArrow = {
  $type?: string;
};

export type DotsProps = BaseComponentType & {
  currentSlide: number;
  instanceRef: React.MutableRefObject<KeenSliderInstance<object, object, KeenSliderHooks> | null>;
  withArrows: boolean;
  icons?: DotsIconsType;
  arrowIcon?: ReactNode;

  carouselDotsProps?: Pick<BaseComponentType, 'style'>;
  carouselDotProps?: Pick<BaseComponentType, 'style'>;
  carouselArrowProps?: Pick<BaseComponentType, 'style'>;
  defaultArrowIconProps?: Pick<BaseComponentType, 'style'>;
};

export type ArrowsProps = BaseComponentType & {
  currentSlide: number;
  instanceRef: React.MutableRefObject<KeenSliderInstance<object, object, KeenSliderHooks> | null>;
  type?: CarouselArrowTypes;
  icon?: ReactNode;
  loop?:
    | boolean
    | {
        min?: number;
        max?: number;
      };
};

import type { ReactNode, MouseEvent } from 'react';

import type { BaseComponentType } from '@core/Box/types';

import type { KeenSliderHooks, KeenSliderInstance, KeenSliderOptions } from 'keen-slider';

export type CarouselProps = BaseComponentType & {
  items: ReactNode[];
  arrows?: boolean;
  arrowsType?: 'center' | 'withDots' | 'onTop';
  dots?: boolean;
  thumbnails?: boolean;
  height?: number;
  keenSliderProps?: KeenSliderOptions;
  thumbnailsProps?: KeenSliderOptions;
};

export type ThumbnailsProps = BaseComponentType & {
  items: ReactNode[];
  thumbnailRef: (node: HTMLElement | null) => void;
};

export type ArrowProps = BaseComponentType & {
  type?: 'center' | 'withDots' | 'onTop';
  left?: boolean;
  onClick: (e: MouseEvent) => void;
};

export type StyledArrowProps = {
  $type: string;
  $left: boolean;
};

export type DotProps = BaseComponentType & {
  active: boolean;
  onClick: (e: MouseEvent) => void;
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
};

export type ArrowsProps = BaseComponentType & {
  currentSlide: number;
  instanceRef: React.MutableRefObject<KeenSliderInstance<object, object, KeenSliderHooks> | null>;
  type?: 'center' | 'withDots' | 'onTop';
  loop?:
    | boolean
    | {
        min?: number;
        max?: number;
      };
};

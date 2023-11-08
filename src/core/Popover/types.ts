import type { ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types';

import type { Placement } from '@popperjs/core';

export type PopoverProps = BaseComponentType & {
  placement: Placement;
  title?: string;
  body: string;
  children: ReactNode;
  openOnHover?: boolean;
  inline?: boolean;
  offset?: number;

  popoverTriggerContainerProps?: Pick<BaseComponentType, 'style'>;
  popoverTitleProps?: Pick<BaseComponentType, 'style'>;
  popoverSubTitleProps?: Pick<BaseComponentType, 'style'>;
  popoverBodyProps?: Pick<BaseComponentType, 'style'>;
  popoverArrowProps?: Pick<BaseComponentType, 'style'>;
};

export type StyledPopoverProps = {
  $isTitled: boolean;
};

export type DivElementType = HTMLDivElement | null;
export type SpanElementType = HTMLSpanElement | null;

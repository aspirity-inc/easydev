import type { ReactNode } from 'react';

import { Placement } from '@popperjs/core';

import type { BaseComponentType } from '@core/Box/types';

export type PopoverProps = BaseComponentType & {
  placement: Placement;
  title?: string;
  body: string;
  children: ReactNode;
  openOnHover?: boolean;
  inline?: boolean;
  offset?: number;
};

export type StyledPopoverProps = {
  $isTitled: boolean;
};

export type DivElementType = HTMLDivElement | null;
export type SpanElementType = HTMLSpanElement | null;

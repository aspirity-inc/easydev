import { ReactNode } from 'react';

import { Placement } from '@popperjs/core';

export type PopoverProps = {
  placement: Placement;
  title?: string;
  body: string;
  children: ReactNode;
};

export type StyledPopoverProps = {
  $isTitled: boolean;
};

export type ElementType = HTMLDivElement | null;

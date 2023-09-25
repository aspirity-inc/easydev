import type { ComponentPropsWithoutRef } from 'react';

export type TooltipShownType = 'onHover' | 'always';

export type TooltipType = {
  tooltipShown?: TooltipShownType;
};

export type ProgressPropsType = ComponentPropsWithoutRef<'input'> & {
  tooltip?: boolean;
  tooltipShown?: TooltipShownType;
};

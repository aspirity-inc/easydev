import type { ComponentPropsWithoutRef } from 'react';

import type { BaseComponentType } from '@core/Box/types';

export type TooltipShownType = 'onHover' | 'always';

export type TooltipType = {
  tooltipShown?: TooltipShownType;
};

export type ProgressPropsType = ComponentPropsWithoutRef<'input'> & {
  tooltip?: boolean;
  tooltipShown?: TooltipShownType;

  rangeWrapProps?: Pick<BaseComponentType, 'style'>;
  rangeTooltipProps?: Pick<BaseComponentType, 'style'>;
  rangeTooltipTailProps?: Pick<BaseComponentType, 'style'>;
};

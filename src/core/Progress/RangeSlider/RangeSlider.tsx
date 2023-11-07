import { useEffect, useState } from 'react';

import { cx } from '@helpers/cx';

import { RangeWrap, StyledProgress, Tooltip, TooltipTail } from './styles';
import type { ProgressPropsType } from './types';

export const RangeSlider = ({
  min = '0',
  max = '100',
  value,
  tooltip = true,
  tooltipShown = 'onHover',
  className,
  rangeWrapProps,
  rangeTooltipProps,
  rangeTooltipTailProps,
  ...props
}: ProgressPropsType) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const percentValue = (Number(value) / Number(max)) * 100;
    setProgress(Number(percentValue.toFixed(0)));
  }, [value, max]);

  return (
    <RangeWrap className="easy_range-wrap" {...rangeWrapProps}>
      {tooltip && (
        <Tooltip
          className="easy_tooltip"
          variant="caption"
          as="span"
          style={{ left: `calc(${progress}% + (${12 - progress * 0.2}px))` }}
          tooltipShown={tooltipShown}
          {...rangeTooltipProps}
        >
          {progress}%
          <TooltipTail {...rangeTooltipTailProps} />
        </Tooltip>
      )}
      <StyledProgress
        type="range"
        value={value}
        min={min}
        max={max}
        className={cx('easy_range', className)}
        progress={progress}
        {...props}
      />
    </RangeWrap>
  );
};

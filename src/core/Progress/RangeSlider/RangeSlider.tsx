import { ComponentPropsWithoutRef, useEffect, useState } from 'react';

import { cx } from '@linaria/core';

import { RangeWrap, StyledProgress, Tooltip, TooltipShownType, TooltipTail } from './styles';

type ProgressPropsType = ComponentPropsWithoutRef<'input'> & {
  tooltip?: boolean;
  tooltipShown?: TooltipShownType;
};

export const RangeSlider = ({
  min = '0',
  max = '100',
  value,
  tooltip = true,
  tooltipShown = 'onHover',
  ...props
}: ProgressPropsType) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const percentValue = (Number(value) / Number(max)) * 100;
    setProgress(Number(percentValue.toFixed(0)));
  }, [value, max]);

  return (
    <RangeWrap>
      {tooltip && (
        <Tooltip
          className="easy_tooltip"
          variant="caption"
          tag="span"
          style={{ left: `calc(${progress}% + (${12 - progress * 0.2}px))` }}
          tooltipShown={tooltipShown}
        >
          {progress}%
          <TooltipTail />
        </Tooltip>
      )}
      <StyledProgress
        type="range"
        value={value}
        min={min}
        max={max}
        className={cx('easy_range', props.className)}
        progress={progress}
        {...props}
      />
    </RangeWrap>
  );
};

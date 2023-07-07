import { StyledToggle, StyledToggleInner, ToggleWrap } from '@core/Controls/Toggle/styles.ts';
import { ControlBasePropsType } from '@core/Controls/types.ts';
import { cx } from '@linaria/core';

export const Toggle = ({ disabled, defaultChecked, color, ...props }: ControlBasePropsType) => {
  return (
    <ToggleWrap disabled={disabled} color={color} className={cx('easy-toggle', props.className)}>
      <StyledToggle type="checkbox" disabled={disabled} defaultChecked={defaultChecked} {...props} />
      <StyledToggleInner />
    </ToggleWrap>
  );
};

import { CSSProperties, useId } from 'react';

import { StyledToggle, StyledToggleInner, ToggleWrap } from '@core/Controls/Toggle/styles.ts';
import type { ControlBasePropsType } from '@core/Controls/types.ts';

import { ControlContainer } from '../styles';

type TogglePropsType = ControlBasePropsType & {
  checkedColor?: CSSProperties['color'];
  innerColor?: CSSProperties['color'];
};

export const Toggle = ({
  disabled,
  defaultChecked,
  color,
  checkedColor,
  innerColor,
  label,
  id,
  ...props
}: TogglePropsType) => {
  const generatedId = useId();

  return (
    <ControlContainer className="easy_toggle-container easy_control-container">
      <ToggleWrap
        disabled={disabled}
        color={color}
        $checkedColor={checkedColor}
        $innerColor={innerColor}
        className="easy_toggle-wrapp"
      >
        <StyledToggle
          className="easy_toggle-item"
          id={id || generatedId}
          type="checkbox"
          disabled={disabled}
          defaultChecked={defaultChecked}
          {...props}
        />
        <StyledToggleInner className="easy_toggle-inner" />
      </ToggleWrap>
      {label && (
        <label htmlFor={id || generatedId} className="easy_checkbox-label easy_control-label">
          {label}
        </label>
      )}
    </ControlContainer>
  );
};

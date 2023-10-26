import { forwardRef, type Ref, useId } from 'react';

import { useUncontrolled } from '@hooks';

import { StyledToggle, StyledToggleInner, ToggleWrap } from './styles';
import { ControlWrapper } from '../ControlWrapper';
import { ControlContainer, LabelContent } from '../styles';
import type { TogglePropsType } from '../types';

export const Toggle = forwardRef(
  (
    {
      disabled,
      defaultChecked = false,
      checked,
      label,
      color,
      id,
      isDayNightMode = false,
      onChange,
      ...props
    }: TogglePropsType,
    ref?: Ref<HTMLInputElement>
  ) => {
    const generatedId = useId();

    const [isChecked, setIsChecked] = useUncontrolled({
      value: checked,
      defaultValue: defaultChecked,
      onChange,
    });

    const onToggleChange = () => {
      setIsChecked(!isChecked);
    };

    return (
      <ControlWrapper label={Boolean(label)} className="easy_toggle-label">
        <ControlContainer className="easy_toggle-container easy_control-container">
          <ToggleWrap
            $color={color}
            disabled={disabled}
            className="easy_toggle-wrap"
            $isChecked={isChecked}
            $isDayNightMode={isDayNightMode}
          >
            <StyledToggle
              ref={ref}
              className="easy_toggle-item"
              id={id || generatedId}
              type="checkbox"
              disabled={disabled}
              defaultChecked={defaultChecked}
              onChange={onToggleChange}
              {...props}
            />
            <StyledToggleInner className="easy_toggle-inner" />
          </ToggleWrap>
          {label && <LabelContent as="span">{label}</LabelContent>}
        </ControlContainer>
      </ControlWrapper>
    );
  }
);

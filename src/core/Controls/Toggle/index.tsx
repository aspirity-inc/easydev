import { forwardRef, type Ref, useId } from 'react';

import type { ControlBasePropsType } from '@core/Controls/types';

import { StyledToggle, StyledToggleInner, ToggleWrap } from './styles';
import { ControlWrapper } from '../ControlWrapper';
import { ControlContainer, LabelContent } from '../styles';

export type TogglePropsType = ControlBasePropsType;

export const Toggle = forwardRef(
  ({ disabled, defaultChecked, label, color, id, ...props }: TogglePropsType, ref?: Ref<HTMLInputElement>) => {
    const generatedId = useId();

    return (
      <ControlWrapper label={Boolean(label)} className="easy_toggle-label">
        <ControlContainer className="easy_toggle-container easy_control-container">
          <ToggleWrap $color={color} disabled={disabled} className="easy_toggle-wrapp">
            <StyledToggle
              ref={ref}
              className="easy_toggle-item"
              id={id || generatedId}
              type="checkbox"
              disabled={disabled}
              defaultChecked={defaultChecked}
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

import { forwardRef, type Ref, useId } from 'react';

import 'material-symbols';

import { ControlWrapper } from '@core/Controls/ControlWrapper';

import { CheckboxWrap, StyledCheckbox, StyledCheckboxInner } from './styles.ts';
import { ControlContainer, LabelContent } from '../styles.ts';
import type { ControlBasePropsType } from '../types.ts';

export const Checkbox = forwardRef(
  ({ disabled, defaultChecked, label, id, color, ...props }: ControlBasePropsType, ref?: Ref<HTMLInputElement>) => {
    const generatedId = useId();

    return (
      <ControlWrapper label={Boolean(label)} className="easy_checkbox-label">
        <ControlContainer className="easy_checkbox-container easy_control-container">
          <CheckboxWrap disabled={disabled} $color={color} className="easy_checkbox-wrap">
            <StyledCheckbox
              ref={ref}
              className="easy_checkbox-item"
              id={id || generatedId}
              type="checkbox"
              disabled={disabled}
              defaultChecked={defaultChecked}
              {...props}
            />
            <StyledCheckboxInner className="material-symbols-rounded check-mark">done</StyledCheckboxInner>
          </CheckboxWrap>
          {label && <LabelContent as="span">{label}</LabelContent>}
        </ControlContainer>
      </ControlWrapper>
    );
  }
);

import { useId } from 'react';

import 'material-symbols';

import { CheckboxWrap, StyledCheckbox, StyledCheckboxInner } from './styles.ts';
import { ControlContainer } from '../styles.ts';
import type { ControlBasePropsType } from '../types.ts';

export const Checkbox = ({ disabled, defaultChecked, color, label, id, ...props }: ControlBasePropsType) => {
  const generatedId = useId();

  return (
    <ControlContainer className="easy_checkbox-container">
      <CheckboxWrap disabled={disabled} color={color} className="easy_checkbox-wrapp">
        <StyledCheckbox
          className="easy_checkbox-item"
          id={id || generatedId}
          type="checkbox"
          disabled={disabled}
          defaultChecked={defaultChecked}
          {...props}
        />
        <StyledCheckboxInner className="material-symbols-rounded check-mark">done</StyledCheckboxInner>
      </CheckboxWrap>
      {label && (
        <label htmlFor={id || generatedId} className="easy_checkbox-label">
          {label}
        </label>
      )}
    </ControlContainer>
  );
};

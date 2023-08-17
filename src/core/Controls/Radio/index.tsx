import { useId } from 'react';

import { RadioWrap, StyledRadio, StyledRadioInner } from './styles.ts';
import { ControlContainer } from '../styles.ts';
import type { ControlBasePropsType } from '../types.ts';

export const Radio = ({ disabled, defaultChecked, color, label, id, ...props }: ControlBasePropsType) => {
  const generatedId = useId();

  return (
    <ControlContainer className="easy_radio-container easy_control-container">
      <RadioWrap disabled={disabled} color={color}>
        <StyledRadio
          className="easy_radio-item"
          id={id || generatedId}
          type="radio"
          disabled={disabled}
          defaultChecked={defaultChecked}
          {...props}
        />
        <StyledRadioInner className="easy_radio-item--inner" />
      </RadioWrap>
      {label && (
        <label htmlFor={id || generatedId} className="easy_radio-label easy_control-label">
          {label}
        </label>
      )}
    </ControlContainer>
  );
};

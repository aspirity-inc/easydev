import { forwardRef, type Ref, useId } from 'react';

import { RadioWrap, StyledRadio, StyledRadioInner } from './styles.ts';
import { ControlWrapper } from '../ControlWrapper/index.tsx';
import { ControlContainer, LabelContent } from '../styles.ts';
import type { ControlBasePropsType } from '../types.ts';

export const Radio = forwardRef(
  ({ disabled, defaultChecked, color, label, id, ...props }: ControlBasePropsType, ref?: Ref<HTMLInputElement>) => {
    const generatedId = useId();

    return (
      <ControlWrapper label={Boolean(label)} className="easy_radio-label">
        <ControlContainer className="easy_radio-container easy_control-container">
          <RadioWrap disabled={disabled} color={color} className="easy_radio-wrapp">
            <StyledRadio
              ref={ref}
              className="easy_radio-item"
              id={id || generatedId}
              type="radio"
              disabled={disabled}
              defaultChecked={defaultChecked}
              {...props}
            />
            <StyledRadioInner className="easy_radio-item--inner" />
          </RadioWrap>
          {label && <LabelContent as="span">{label}</LabelContent>}
        </ControlContainer>
      </ControlWrapper>
    );
  }
);

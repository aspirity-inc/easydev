import { forwardRef, type Ref, useId } from 'react';

import { RadioWrap, StyledRadio, StyledRadioInner } from './styles.ts';
import { ControlWrapper } from '../ControlWrapper/index.tsx';
import { ControlContainer, LabelContent } from '../styles.ts';
import type { RadioPropsType } from '../types.ts';

export const Radio = forwardRef(
  (
    {
      disabled,
      defaultChecked,
      color,
      label,
      id,
      reversed = false,
      radioLabelWrapProps,
      radioContainerProps,
      radioWrapProps,
      radioItemInnerProps,
      radioLabelProps,
      ...props
    }: RadioPropsType,
    ref?: Ref<HTMLInputElement>
  ) => {
    const generatedId = useId();

    return (
      <ControlWrapper label={Boolean(label)} className="easy_radio-label-wrap" {...radioLabelWrapProps}>
        <ControlContainer
          className="easy_radio-container easy_control-container"
          $reversed={reversed}
          {...radioContainerProps}
        >
          <RadioWrap disabled={disabled} $color={color} className="easy_radio-wrap" {...radioWrapProps}>
            <StyledRadio
              ref={ref}
              className="easy_radio-item"
              id={id || generatedId}
              type="radio"
              disabled={disabled}
              defaultChecked={defaultChecked}
              {...props}
            />
            <StyledRadioInner className="easy_radio-item--inner" {...radioItemInnerProps} />
          </RadioWrap>
          {label && (
            <LabelContent as="span" className="easy_radio-label" {...radioLabelProps}>
              {label}
            </LabelContent>
          )}
        </ControlContainer>
      </ControlWrapper>
    );
  }
);

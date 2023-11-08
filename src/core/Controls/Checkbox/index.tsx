import { forwardRef, type Ref, useId } from 'react';

import { DoneIcon } from '@icons';

import { ControlWrapper } from '@core/Controls/ControlWrapper';

import { CheckboxWrap, StyledCheckbox, StyledCheckboxInner } from './styles.ts';
import { ControlContainer, LabelContent } from '../styles.ts';
import type { CheckboxPropsType } from '../types.ts';

export const Checkbox = forwardRef(
  (
    {
      disabled,
      defaultChecked,
      label,
      id,
      color,
      reversed,
      checkboxLabelWrapProps,
      checkboxContainerProps,
      checkboxWrapProps,
      checkMarkProps,
      doneIconProps,
      checkboxLabelProps,
      ...props
    }: CheckboxPropsType,
    ref?: Ref<HTMLInputElement>
  ) => {
    const generatedId = useId();

    return (
      <ControlWrapper label={Boolean(label)} className="easy_checkbox-label-wrap" {...checkboxLabelWrapProps}>
        <ControlContainer
          className="easy_checkbox-container easy_control-container"
          $reversed={reversed}
          {...checkboxContainerProps}
        >
          <CheckboxWrap disabled={disabled} $color={color} className="easy_checkbox-wrap" {...checkboxWrapProps}>
            <StyledCheckbox
              ref={ref}
              className="easy_checkbox-item"
              id={id || generatedId}
              type="checkbox"
              disabled={disabled}
              defaultChecked={defaultChecked}
              {...props}
            />
            <StyledCheckboxInner className="check-mark" {...checkMarkProps}>
              <DoneIcon {...doneIconProps} />
            </StyledCheckboxInner>
          </CheckboxWrap>
          {label && (
            <LabelContent as="span" className="easy_checkbox-label" {...checkboxLabelProps}>
              {label}
            </LabelContent>
          )}
        </ControlContainer>
      </ControlWrapper>
    );
  }
);

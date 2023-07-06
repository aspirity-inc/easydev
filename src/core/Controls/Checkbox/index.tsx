import { ComponentPropsWithoutRef } from 'react';
import {
  CheckboxColorType,
  CheckboxWrap,
  StyledCheckbox,
  StyledCheckboxInner,
} from '@core/Controls/Checkbox/styles.ts';
import 'material-symbols';

type CheckboxPropsType = ComponentPropsWithoutRef<'input'> & {
  disabled?: boolean;
  color?: CheckboxColorType;
  defaultChecked?: boolean;
};

export const Checkbox = ({ disabled, defaultChecked, color, ...props }: CheckboxPropsType) => {
  return (
    <CheckboxWrap disabled={disabled} color={color}>
      <StyledCheckbox type="checkbox" disabled={disabled} defaultChecked={defaultChecked} {...props} />
      <StyledCheckboxInner className="material-symbols-rounded">done</StyledCheckboxInner>
    </CheckboxWrap>
  );
};

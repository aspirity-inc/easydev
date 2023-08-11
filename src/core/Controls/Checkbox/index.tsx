import 'material-symbols';

import { CheckboxWrap, StyledCheckbox, StyledCheckboxInner } from './styles.ts';
import type { ControlBasePropsType } from '../types.ts';

export const Checkbox = ({ disabled, defaultChecked, color, ...props }: ControlBasePropsType) => {
  return (
    <CheckboxWrap disabled={disabled} color={color}>
      <StyledCheckbox type="checkbox" disabled={disabled} defaultChecked={defaultChecked} {...props} />
      <StyledCheckboxInner className="material-symbols-rounded check-mark">done</StyledCheckboxInner>
    </CheckboxWrap>
  );
};

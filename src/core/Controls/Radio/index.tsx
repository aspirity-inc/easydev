import { RadioWrap, StyledRadio, StyledRadioInner } from './styles.ts';
import type { ControlBasePropsType } from '../types.ts';

export const Radio = ({ disabled, defaultChecked, color, ...props }: ControlBasePropsType) => {
  return (
    <RadioWrap disabled={disabled} color={color}>
      <StyledRadio type="radio" disabled={disabled} defaultChecked={defaultChecked} {...props} />
      <StyledRadioInner />
    </RadioWrap>
  );
};

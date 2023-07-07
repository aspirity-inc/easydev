import { RadioWrap, StyledRadio, StyledRadioInner } from '@core/Controls/Radio/styles.ts';
import { ControlBasePropsType } from '@core/Controls/types.ts';

export const Radio = ({ disabled, defaultChecked, color, ...props }: ControlBasePropsType) => {
  return (
    <RadioWrap disabled={disabled} color={color}>
      <StyledRadio type="radio" disabled={disabled} defaultChecked={defaultChecked} {...props} />
      <StyledRadioInner />
    </RadioWrap>
  );
};

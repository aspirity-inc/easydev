import InputMask, { Props } from 'react-input-mask';

import { Input } from '@core/Inputs';
import { InputProps } from '@core/Inputs/Input/Input';

export type MaskedInputProps = Props & InputProps;

export const MaskedInput = (props: MaskedInputProps) => {
  return <InputMask {...props}>{props.children || <Input {...props} />}</InputMask>;
};

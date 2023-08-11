import InputMask, { Props } from 'react-input-mask';

import { Input } from '..';
import { InputProps } from '../types';

export type MaskedInputProps = Props & InputProps;

export const MaskedInput = (props: MaskedInputProps) => {
  return (
    <InputMask {...props}>
      <Input {...props} />
    </InputMask>
  );
};

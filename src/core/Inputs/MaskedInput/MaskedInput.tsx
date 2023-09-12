import InputMask from 'react-input-mask';

import { Input } from '..';
import { MaskedInputProps } from '../types';

export const MaskedInput = (props: MaskedInputProps) => {
  return (
    <InputMask {...props}>
      <Input {...props} />
    </InputMask>
  );
};

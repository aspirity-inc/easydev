import InputMask from 'react-input-mask';

import { Input } from '..';
import type { MaskedInputProps } from '../types';

export const MaskedInput = (props: MaskedInputProps) => {
  return (
    <InputMask {...props}>
      <Input {...props} />
    </InputMask>
  );
};

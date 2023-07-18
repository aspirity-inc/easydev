import InputMask, { Props } from 'react-input-mask';

import { InputProps } from '@core/Inputs/types';

import { Input } from '..';

export type MaskedInputProps = Props & InputProps;

export const MaskedInput = (props: MaskedInputProps) => {
  return (
    <InputMask {...props}>
      <Input {...props} />
    </InputMask>
  );
};

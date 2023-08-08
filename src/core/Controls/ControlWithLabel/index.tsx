import { ReactNode } from 'react';

import { Text } from '@core/Typography';

import { StyledLabel } from './styles.ts';

type WithLabelProps = {
  control: ReactNode;
  label: string;
  reversed?: boolean;
};

export const ControlWithLabel = ({ control, label, reversed }: WithLabelProps) => {
  return (
    <StyledLabel reversed={reversed}>
      {control}
      <Text variant="body3">{label}</Text>
    </StyledLabel>
  );
};

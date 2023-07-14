import { ReactNode } from 'react';

import { StyledLabel } from '@core/Controls/ControlWithLabel/styles.ts';
import { Text } from '@core/Typography';

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

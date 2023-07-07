import { ReactNode } from 'react';
import { Text } from '@core/Typography';
import { StyledLabel } from '@core/Controls/ControlWithLabel/styles.ts';

type WithLabelProps = {
  control: ReactNode;
  label: string;
  reversed?: boolean;
};

export const ControlWithLabel = ({ control, label, reversed }: WithLabelProps) => {
  return (
    <StyledLabel reversed={reversed}>
      {control}
      <Text variant="body" bodyLevel={3}>
        {label}
      </Text>
    </StyledLabel>
  );
};

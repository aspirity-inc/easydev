import { CSSProperties, useState, ChangeEvent, ReactNode } from 'react';

import { ChipVariant, StyledChipLabel, StyledInput } from './styles';

type ChipProps = {
  label: string;
  variant?: ChipVariant;
  disabled?: boolean;
  defaultChecked?: boolean;
  chipContent?: (props: any) => ReactNode | ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: CSSProperties;
  color?: React.CSSProperties['color'];
  bgColor?: React.CSSProperties['backgroundColor'];
};

export const Chip = (props: ChipProps) => {
  const { label, variant = 'filled', disabled, defaultChecked, onChange, chipContent, ...otherProps } = props;

  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    onChange && onChange(event);
  };

  return (
    <StyledChipLabel variant={variant} disabled={disabled} checked={checked} {...otherProps}>
      <StyledInput
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
      />
      {chipContent &&
        chipContent({
          ...props,
          checked,
          onChange: (event: ChangeEvent<HTMLInputElement>) => handleChange(event),
        })}
      {label}
    </StyledChipLabel>
  );
};

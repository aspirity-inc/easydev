import { CSSProperties, useState, MouseEvent } from 'react';

import { Checkbox } from '@core/Controls';

import { ChipVariant, StyledChipLabel, StyledDeleteButton, StyledInput } from './styles';

type ChipProps = {
  label: string;
  variant?: ChipVariant;
  disabled?: boolean;
  defaultChecked?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

const DeleteButton = ({
  checked,
  onClick,
  ...props
}: React.ComponentPropsWithoutRef<'button'> & { checked: boolean }) => {
  const handleDelete = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    onClick && onClick(event);
  };

  return (
    <>
      {checked && onClick && (
        <StyledDeleteButton type="button" {...props} onClick={handleDelete}>
          <div className="material-symbols-outlined">close</div>
        </StyledDeleteButton>
      )}
    </>
  );
};

export const Chip = ({
  label,
  variant = 'default',
  disabled = false,
  defaultChecked = false,
  onClick,
  ...props
}: ChipProps) => {
  const [checked, setChecked] = useState(defaultChecked);
  const hasDeleteButton = Boolean(onClick);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <StyledChipLabel
      variant={variant}
      disabled={disabled}
      checked={checked}
      $hasDeleteButton={hasDeleteButton}
      {...props}
    >
      <StyledInput type="checkbox" disabled={disabled} checked={checked} onChange={handleChange} />
      {variant === 'checkbox' ? (
        <Checkbox disabled={disabled} checked={checked} onChange={handleChange} />
      ) : (
        <DeleteButton disabled={disabled} onClick={onClick} checked={checked} />
      )}
      {label}
    </StyledChipLabel>
  );
};

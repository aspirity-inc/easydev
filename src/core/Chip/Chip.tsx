import { CSSProperties, useState } from 'react';

import { Checkbox } from '@core/Controls';

import { ChipVariant, StyledChipLabel, StyledDeleteButton, StyledInput } from './styles';

type ChipProps = {
  label: string;
  variant?: ChipVariant;
  disabled?: boolean;
  defaultChecked?: boolean;
  className?: string;
  style?: CSSProperties;
  onDelete?: () => void;
  onClick?: () => void;
};

const DeleteButton = ({
  checked,
  hasDeleteButton,
  ...props
}: React.ComponentPropsWithoutRef<'button'> & { checked: boolean; hasDeleteButton: boolean }) => (
  <>
    {checked && hasDeleteButton && (
      <StyledDeleteButton type="button" {...props}>
        <div className="material-symbols-outlined">close</div>
      </StyledDeleteButton>
    )}
  </>
);

export const Chip = ({
  label,
  variant = 'default',
  disabled = false,
  defaultChecked = false,
  onDelete,
  onClick,
  ...props
}: ChipProps) => {
  const [checked, setChecked] = useState(defaultChecked);
  const hasDeleteButton = Boolean(onDelete);

  const handleChange = () => {
    setChecked(!checked);
    if (onClick) onClick();
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
        <DeleteButton disabled={disabled} onClick={onDelete} checked={checked} hasDeleteButton={hasDeleteButton} />
      )}
      {label}
    </StyledChipLabel>
  );
};

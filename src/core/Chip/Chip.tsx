import { CSSProperties, useState } from 'react';

import { Checkbox } from '@core/Controls';

import { ChipVariant, StyledChipLabel, StyledDeleteButton } from './styles';

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

const DeleteButton = (props: React.ComponentPropsWithoutRef<'button'>) => (
  <StyledDeleteButton type="button" {...props}>
    <div className="material-symbols-outlined">close</div>
  </StyledDeleteButton>
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

  const ExtraChipContent = () => {
    switch (variant) {
      case 'default':
        return (
          <>
            <input
              style={{ display: 'none' }}
              type="checkbox"
              disabled={disabled}
              checked={checked}
              onChange={handleChange}
            />
            {checked && hasDeleteButton && <DeleteButton disabled={disabled} onClick={onDelete} />}
          </>
        );

      case 'checkbox':
        return <Checkbox disabled={disabled} checked={checked} onChange={handleChange} />;
    }
  };

  return (
    <StyledChipLabel
      variant={variant}
      disabled={disabled}
      checked={checked}
      $hasDeleteButton={hasDeleteButton}
      {...props}
    >
      {ExtraChipContent()}
      {label}
    </StyledChipLabel>
  );
};

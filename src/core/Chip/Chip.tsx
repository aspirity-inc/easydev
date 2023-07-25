import { ReactNode, CSSProperties } from 'react';

import { Checkbox } from '@core/Controls';

import { ChipVariant, StyledChip, StyledDeleteButton } from './styles';

type ChipProps = {
  children: ReactNode;
  variant?: ChipVariant;
  disabled?: boolean;
  defaultSelected?: boolean;
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
  children,
  variant = 'default',
  disabled = false,
  defaultSelected = false,
  onDelete,
  ...props
}: ChipProps) => {
  const hasDeleteButton = Boolean(onDelete);

  const ExtraChipContent = () => {
    switch (variant) {
      case 'default':
        return defaultSelected && hasDeleteButton && <DeleteButton disabled={disabled} onClick={onDelete} />;
      case 'checkbox':
        return <Checkbox disabled={disabled} defaultChecked={defaultSelected} />;
      case 'multiselect':
        return hasDeleteButton && <DeleteButton disabled={disabled} onClick={onDelete} />;
    }
  };

  return (
    <StyledChip
      variant={variant}
      disabled={disabled}
      selected={defaultSelected}
      $hasDeleteButton={hasDeleteButton}
      {...props}
    >
      {ExtraChipContent()}
      {children}
    </StyledChip>
  );
};

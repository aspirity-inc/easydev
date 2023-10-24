import type { ReactNode } from 'react';

import { StyledIcon, ToggleWrapper } from './styles';
import type { IconProps } from '../../../types';

export type ToggleProps = {
  disabled: boolean;
  isHidePassword: boolean;
  showIcon?: ReactNode;
  hideIcon?: ReactNode;
  onToggle?: () => void;
};

const ShowIcon = ({ icon }: IconProps) => (
  <>{icon || <StyledIcon className="material-symbols-rounded">visibility</StyledIcon>}</>
);
const HideIcon = ({ icon }: IconProps) => (
  <>{icon || <StyledIcon className="material-symbols-rounded">visibility_off</StyledIcon>}</>
);

export const PasswordToggle = ({ disabled, isHidePassword, onToggle, ...icons }: ToggleProps) => {
  const handleClick = () => {
    if (onToggle) {
      !disabled && onToggle();
    }
  };

  return (
    <ToggleWrapper type="button" disabled={disabled} onClick={handleClick}>
      {isHidePassword ? <ShowIcon icon={icons.showIcon} /> : <HideIcon icon={icons.hideIcon} />}
    </ToggleWrapper>
  );
};

import { IconWrapper } from '@core/Inputs/styles';
import { IconsProps, InputBaseStatus } from '@core/Inputs/types';

import { InputStatusIcon } from './InputStatusIcon';
import { PasswordToggle } from './PasswordToggle';

export type InputIconProps = {
  type?: string;
  status?: InputBaseStatus;
  disabled?: boolean;
  isHidePassword: boolean;
  icons?: IconsProps;
  onToggle?: () => void;
};

export const InputIcon = ({ type, status, disabled, icons, isHidePassword, onToggle }: InputIconProps) => {
  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <>
      {type === 'password' ? (
        <PasswordToggle
          showIcon={icons?.passwordShowIcon}
          hideIcon={icons?.passwordHideIcon}
          disabled={disabled || false}
          isHidePassword={isHidePassword}
          onToggle={handleToggle}
        />
      ) : (
        status && (
          <IconWrapper>
            <InputStatusIcon
              errorIcon={icons?.errorIcon}
              warningIcon={icons?.warningIcon}
              loadingIcon={icons?.loadingIcon}
              status={status}
            />
          </IconWrapper>
        )
      )}
    </>
  );
};

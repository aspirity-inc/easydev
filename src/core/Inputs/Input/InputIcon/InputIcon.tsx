import type { BaseComponentType } from '@core/Box/types';

import { InputStatusIcon } from './InputStatusIcon';
import { PasswordToggle } from './PasswordToggle';
import type { IconsProps, InputBaseStatus } from '../../types';
import { IconWrapper } from '../styles';

export type InputIconProps = {
  type?: string;
  status?: InputBaseStatus;
  disabled?: boolean;
  isHidePassword: boolean;
  icons?: IconsProps;
  onToggle?: () => void;

  inputPasswordToggleButtonProps?: Pick<BaseComponentType, 'style'>;
  inputPasswordToggleShowIconProps?: Pick<BaseComponentType, 'style'>;
  inputPasswordToggleHideProps?: Pick<BaseComponentType, 'style'>;
  inputIconWrapperProps?: Pick<BaseComponentType, 'style'>;
  inputStatusIconProps?: Pick<BaseComponentType, 'style'>;
};

export const InputIcon = ({
  type,
  status,
  disabled,
  icons,
  isHidePassword,
  inputPasswordToggleButtonProps,
  inputPasswordToggleShowIconProps,
  inputPasswordToggleHideProps,
  inputIconWrapperProps,
  inputStatusIconProps,
  onToggle,
}: InputIconProps) => {
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
          inputPasswordToggleButtonProps={inputPasswordToggleButtonProps}
          inputPasswordToggleShowIconProps={inputPasswordToggleShowIconProps}
          inputPasswordToggleHideProps={inputPasswordToggleHideProps}
        />
      ) : (
        status && (
          <IconWrapper {...inputIconWrapperProps}>
            <InputStatusIcon
              errorIcon={icons?.errorIcon}
              warningIcon={icons?.warningIcon}
              loadingIcon={icons?.loadingIcon}
              status={status}
              inputStatusIconProps={inputStatusIconProps}
            />
          </IconWrapper>
        )
      )}
    </>
  );
};

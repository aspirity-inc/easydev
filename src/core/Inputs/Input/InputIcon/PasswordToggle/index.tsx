import type { ReactNode } from 'react';

import { VisibilityIcon, VisibilityOffIcon } from '@icons';

import type { BaseComponentType } from '@core/Box/types';

import { StyledIcon, ToggleWrapper } from './styles';
import type { IconProps } from '../../../types';

export type ToggleProps = {
  disabled: boolean;
  isHidePassword: boolean;
  showIcon?: ReactNode;
  hideIcon?: ReactNode;
  onToggle?: () => void;

  inputPasswordToggleButtonProps?: Pick<BaseComponentType, 'style'>;
  inputPasswordToggleShowIconProps?: Pick<BaseComponentType, 'style'>;
  inputPasswordToggleHideProps?: Pick<BaseComponentType, 'style'>;
};

const ShowIcon = ({
  icon,
  inputPasswordToggleShowIconProps,
}: IconProps & { inputPasswordToggleShowIconProps?: Pick<BaseComponentType, 'style'> }) => (
  <>
    {icon || (
      <StyledIcon {...inputPasswordToggleShowIconProps}>
        <VisibilityIcon />
      </StyledIcon>
    )}
  </>
);
const HideIcon = ({
  icon,
  inputPasswordToggleHideProps,
}: IconProps & { inputPasswordToggleHideProps?: Pick<BaseComponentType, 'style'> }) => (
  <>
    {icon || (
      <StyledIcon {...inputPasswordToggleHideProps}>
        <VisibilityOffIcon />
      </StyledIcon>
    )}
  </>
);

export const PasswordToggle = ({
  disabled,
  isHidePassword,
  onToggle,
  inputPasswordToggleButtonProps,
  inputPasswordToggleShowIconProps,
  inputPasswordToggleHideProps,
  ...icons
}: ToggleProps) => {
  const handleClick = () => {
    if (onToggle) {
      !disabled && onToggle();
    }
  };

  return (
    <ToggleWrapper type="button" disabled={disabled} onClick={handleClick} {...inputPasswordToggleButtonProps}>
      {isHidePassword ? (
        <ShowIcon icon={icons.showIcon} inputPasswordToggleShowIconProps={inputPasswordToggleShowIconProps} />
      ) : (
        <HideIcon icon={icons.hideIcon} inputPasswordToggleHideProps={inputPasswordToggleHideProps} />
      )}
    </ToggleWrapper>
  );
};

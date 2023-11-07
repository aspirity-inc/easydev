import type { ReactNode } from 'react';

import { CachedIcon } from '@icons';

import type { BaseComponentType } from '@core/Box/types';

import { RotateBox, StyledButton } from './styles';
import type { ButtonProps } from './types';

const LoadingIcon = ({
  icon,
  loadingIconProps,
}: {
  icon?: ReactNode;
  loadingIconProps?: Pick<BaseComponentType, 'style'>;
}) => {
  return <RotateBox {...loadingIconProps}>{icon || <CachedIcon />}</RotateBox>;
};

export const Button = ({
  children,
  icon,
  reversed,
  size,
  rounded,
  loading,
  loadingIcon,
  type,
  variant,
  as = 'button',
  loadingIconProps,
  ...props
}: ButtonProps) => {
  const defaultType = as === 'button' ? 'button' : undefined;

  return (
    <StyledButton
      as={as}
      className="easy_button"
      $reversed={reversed}
      $rounded={rounded}
      $size={size}
      $variant={variant}
      type={type || defaultType}
      {...props}
    >
      {children}
      {loading ? <LoadingIcon icon={loadingIcon} loadingIconProps={loadingIconProps} /> : icon}
    </StyledButton>
  );
};

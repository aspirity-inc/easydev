import type { ReactNode } from 'react';

import { CachedIcon } from '@icons';

import { RotateBox, StyledButton } from './styles';
import type { ButtonProps } from './types';

const LoadingIcon = ({ icon }: { icon?: ReactNode }) => {
  return <RotateBox>{icon || <CachedIcon />}</RotateBox>;
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
      {loading ? <LoadingIcon icon={loadingIcon} /> : icon}
    </StyledButton>
  );
};

import type { ReactNode } from 'react';

import 'material-symbols';

import { RotateBox, StyledButton } from './styles';
import type { ButtonProps } from './types';

const LoadingIcon = ({ icon }: { icon?: ReactNode }) => {
  const defaultLoadingIcon = <div className={`material-symbols-rounded`}>cached</div>;
  return <RotateBox>{icon || defaultLoadingIcon}</RotateBox>;
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

  const isIconButton = Boolean(children == null && icon != null);

  return (
    <StyledButton
      as={as}
      className="easy_button"
      $reversed={reversed}
      $rounded={rounded}
      $size={size}
      $variant={variant}
      $isIconButton={isIconButton}
      type={type || defaultType}
      {...props}
    >
      {children}
      {loading ? <LoadingIcon icon={loadingIcon} /> : icon}
    </StyledButton>
  );
};

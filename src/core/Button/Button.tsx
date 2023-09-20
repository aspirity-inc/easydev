import 'material-symbols';

import { RotateBox, StyledButton } from './styles';
import type { ButtonProps } from './types';

export const Button = ({
  children,
  icon,
  reversed,
  size,
  rounded,
  loading,
  loadingIcon,
  type = 'button',
  variant,
  color,
  bgColor,
  ...props
}: ButtonProps) => {
  const LoadingIcon = () => {
    const defaultLoadingIcon = <div className={`material-symbols-rounded`}>cached</div>;
    return <RotateBox>{loadingIcon || defaultLoadingIcon}</RotateBox>;
  };

  return (
    <StyledButton
      className="easy_button"
      $reversed={reversed}
      $rounded={rounded}
      $size={size}
      $color={color}
      $bgColor={bgColor}
      $variant={variant}
      type={type}
      {...props}
    >
      {children}
      {loading ? <LoadingIcon /> : icon}
    </StyledButton>
  );
};

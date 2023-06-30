import { CSSProperties, ReactNode } from 'react';
import { ButtonRounded, ButtonSize, ButtonVariant, RotateBox, StyledButton } from './styles';
import 'material-symbols';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  icon?: ReactNode;
  reversed?: boolean;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  loading?: boolean;
  loadingIcon?: ReactNode;
  variant?: ButtonVariant;
};

export const Button = ({
  children,
  className,
  icon,
  reversed,
  size,
  rounded,
  loading,
  loadingIcon,
  type = 'button',
  variant,
  ...props
}: ButtonProps) => {
  const LoadingIcon = () => {
    const defaultLoadingIcon = <div className={`material-symbols-rounded`}>cached</div>;
    return <RotateBox>{loadingIcon || defaultLoadingIcon}</RotateBox>;
  };

  return (
    <StyledButton
      className={className}
      reversed={reversed}
      rounded={rounded}
      size={size}
      type={type}
      variant={variant}
      {...props}
    >
      {children}
      {loading ? <LoadingIcon /> : icon}
    </StyledButton>
  );
};

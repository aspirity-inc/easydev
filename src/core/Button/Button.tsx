import { CSSProperties, ReactNode } from 'react';
import { ButtonRounded, ButtonSize, RotateBox, StyledButton } from './styles';
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
  ...props
}: ButtonProps) => {
  const LoadingIcon = () => {
    const defaultLoadingIcon = <div className={`material-symbols-rounded`}>cached</div>;
    return <RotateBox>{loadingIcon || defaultLoadingIcon}</RotateBox>;
  };

  return (
    <StyledButton className={className} reversed={reversed} rounded={rounded} size={size} type={type} {...props}>
      {children}
      {loading ? <LoadingIcon /> : icon}
    </StyledButton>
  );
};

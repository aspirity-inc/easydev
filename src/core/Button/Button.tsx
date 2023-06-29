import { CSSProperties, ReactNode } from 'react';
import { ButtonRounded, ButtonSize, StyledButton } from './styles';
import { Loader } from './Loader/Loader';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  icon?: ReactNode;
  reversed?: boolean;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  loading?: boolean;
}

export const Button = ({ children, className, icon, reversed, size, rounded, loading, ...props }: ButtonProps) => {
  const renderIcon = () => {
    return loading ? <Loader /> : icon;
  };

  return (
    <StyledButton tag={'button'} className={className} reversed={reversed} rounded={rounded} size={size} {...props}>
      {children}
      {icon && renderIcon()}
    </StyledButton>
  );
};

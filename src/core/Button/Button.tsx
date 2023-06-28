import { CSSProperties, ReactNode } from 'react';
import { ButtonRounded, ButtonSize, StyledButton } from './styles';

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  icon?: ReactNode;
  reversed?: boolean;
  size?: ButtonSize;
  rounded?: ButtonRounded;
};

export const Button = ({ children, className, icon, reversed, size, rounded, ...props }: ButtonProps) => {
  return (
    <StyledButton tag={'button'} className={className} reversed={reversed} rounded={rounded} size={size} {...props}>
      {children}
      {icon}
    </StyledButton>
  );
};

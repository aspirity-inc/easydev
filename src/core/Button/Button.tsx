import { CSSProperties, ReactNode } from 'react';
import { ButtonRounded, ButtonSize, IconPosition, StyledButton } from './styles';

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  size?: ButtonSize;
  rounded?: ButtonRounded;
};

export const Button = ({ children, className, icon, iconPosition, size, rounded, ...props }: ButtonProps) => {
  return (
    <StyledButton
      tag={'button'}
      className={className}
      iconPosition={iconPosition}
      rounded={rounded}
      size={size}
      {...props}
    >
      {children}
      {icon}
    </StyledButton>
  );
};

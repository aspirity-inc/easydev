import { CSSProperties, ReactNode } from 'react';
import { StyledTitle, type TitleType, type TitleVariant } from './styles.ts';

type TitleProps = {
  children: ReactNode | string | ReactNode[];
  variant?: TitleVariant;
  className?: string;
  style?: CSSProperties;
  type?: TitleType;
};

export const Title = ({ children, variant, className, type, ...props }: TitleProps) => {
  return (
    <StyledTitle
      tag={variant || 'h1'}
      className={className}
      type={type}
      variant={variant}
      {...props}
      style={{ color: 'red' }}
    >
      {children}
    </StyledTitle>
  );
};

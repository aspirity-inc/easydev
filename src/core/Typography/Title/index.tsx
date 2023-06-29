import { CSSProperties, ReactNode } from 'react';
import { StyledTitle, type TitleVariant } from './styles.ts';
import { TypeProp } from '@core/Typography/styles.ts';

type TitleProps = {
  children: ReactNode | string | ReactNode[];
  variant?: TitleVariant;
  className?: string;
  style?: CSSProperties;
  type?: TypeProp;
};

export const Title = ({ children, variant, className, type, ...props }: TitleProps) => {
  return (
    <StyledTitle tag={variant || 'h1'} className={className} type={type} variant={variant} {...props}>
      {children}
    </StyledTitle>
  );
};

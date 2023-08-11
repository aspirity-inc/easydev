import { StyledTitle } from './styles.ts';
import type { TitleVariant, TypographyBaseType } from '../types.ts';

type TitleProps = TypographyBaseType & {
  variant?: TitleVariant;
};

export const Title = ({ children, variant, ...props }: TitleProps) => {
  return (
    <StyledTitle tag={variant || 'h1'} variant={variant} {...props}>
      {children}
    </StyledTitle>
  );
};

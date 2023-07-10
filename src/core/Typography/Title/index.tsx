import type { TypographyBaseType } from '@core/Typography/types.ts';

import { StyledTitle, type TitleVariant } from './styles.ts';

type TitleProps = TypographyBaseType & {
  variant?: TitleVariant;
};

export const Title = ({ children, variant, className, type, ...props }: TitleProps) => {
  return (
    <StyledTitle tag={variant || 'h1'} className={className} type={type} variant={variant} {...props}>
      {children}
    </StyledTitle>
  );
};

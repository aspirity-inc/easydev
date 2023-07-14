import type { TypographyBaseType } from '@core/Typography/types.ts';

import { StyledTitle, type TitleVariant } from './styles.ts';

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

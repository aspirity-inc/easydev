import { StyledTitle } from './styles.ts';
import type { TitleProps } from './types.ts';

export const Title = ({ children, variant, ...props }: TitleProps) => {
  return (
    <StyledTitle className="easy_title" as={variant || 'h1'} $variant={variant} {...props}>
      {children}
    </StyledTitle>
  );
};

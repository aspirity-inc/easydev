import { StyledTitle } from './styles.ts';
import type { TitleProps } from './types.ts';

export const Title = ({ children, variant, bgColor, color, ...props }: TitleProps) => {
  return (
    <StyledTitle
      className="easy_title"
      tag={variant || 'h1'}
      variant={variant}
      $bgColor={bgColor}
      $color={color}
      {...props}
    >
      {children}
    </StyledTitle>
  );
};

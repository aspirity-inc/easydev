import { StyledLink } from './styles.ts';
import type { LinkProps } from './types.ts';

export const Link = ({ children, disabled, defaultUnderline, as = 'a', ...props }: LinkProps) => {
  return (
    <StyledLink className="easy_link" as={as} $disabled={disabled} $defaultUnderline={defaultUnderline} {...props}>
      {children}
    </StyledLink>
  );
};

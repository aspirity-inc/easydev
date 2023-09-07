import { StyledLink } from './styles.ts';
import type { LinkProps } from './types.ts';

export const Link = ({ children, disabled, defaultUnderline, ...props }: LinkProps) => {
  return (
    <StyledLink $disabled={disabled} $defaultUnderline={defaultUnderline} {...props}>
      {children}
    </StyledLink>
  );
};

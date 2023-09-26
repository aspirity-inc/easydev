import { StyledHeader } from './styles';
import type { HeaderProps } from './types';

export const Header = ({ children, fixed, as = 'header', ...props }: HeaderProps) => {
  return (
    <StyledHeader className="easy_header" as={as} $fixed={fixed} {...props}>
      {children}
    </StyledHeader>
  );
};

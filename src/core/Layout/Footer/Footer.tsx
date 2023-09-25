import { StyledFooter } from './styles';
import type { FooterProps } from './types';

export const Footer = ({ children, as = 'footer', ...props }: FooterProps) => {
  return (
    <StyledFooter className="easy_footer" as={as} {...props}>
      {children}
    </StyledFooter>
  );
};

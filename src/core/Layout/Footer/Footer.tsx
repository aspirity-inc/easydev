import { StyledFooter } from './styles';
import type { FooterProps } from './types';

export const Footer = ({ children, backgroundColor, height, ...props }: FooterProps) => {
  return (
    <StyledFooter className="easy_footer" $backgroundColor={backgroundColor} $height={height} {...props}>
      {children}
    </StyledFooter>
  );
};

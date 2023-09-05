import { StyledFooter } from './styles';
import { FooterProps } from './types';

export const Footer = ({ children, backgroundColor, height, ...props }: FooterProps) => {
  return (
    <StyledFooter $backgroundColor={backgroundColor} $height={height} {...props}>
      {children}
    </StyledFooter>
  );
};

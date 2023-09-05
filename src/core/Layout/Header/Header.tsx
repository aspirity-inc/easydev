import { StyledHeader } from './styles';
import { HeaderProps } from './types';

export const Header = ({ children, backgroundColor, fix, height, ...props }: HeaderProps) => {
  return (
    <StyledHeader $backgroundColor={backgroundColor} $fix={fix} $height={height} {...props}>
      {children}
    </StyledHeader>
  );
};

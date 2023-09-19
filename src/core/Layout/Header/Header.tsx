import { StyledHeader } from './styles';
import type { HeaderProps } from './types';

export const Header = ({ children, backgroundColor, fix, height, ...props }: HeaderProps) => {
  return (
    <StyledHeader className="easy_header" $backgroundColor={backgroundColor} $fix={fix} $height={height} {...props}>
      {children}
    </StyledHeader>
  );
};

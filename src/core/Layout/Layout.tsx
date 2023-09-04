import { StyledLayout } from './styles';
import { LayoutProps } from './types';

export const Layout = ({ children, height, ...props }: LayoutProps) => {
  return (
    <StyledLayout $height={height} {...props}>
      {children}
    </StyledLayout>
  );
};

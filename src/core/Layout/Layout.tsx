import { StyledLayout } from './styles';
import { LayoutProps } from './types';

export const Layout = ({ children, height, ...props }: LayoutProps) => {
  return (
    <StyledLayout className="easy_layout" $height={height} {...props}>
      {children}
    </StyledLayout>
  );
};

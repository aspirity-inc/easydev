import { StyledLayout } from './styles';
import type { BaseLayoutProps } from './types';

export const Layout = ({ children, ...props }: BaseLayoutProps) => {
  return (
    <StyledLayout className="easy_layout" {...props}>
      {children}
    </StyledLayout>
  );
};

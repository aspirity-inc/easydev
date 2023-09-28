import { StyledMenuLabel } from './styles';
import type { MenuLabelProps } from '../../types';

export const MenuLabel = ({ children, ...props }: MenuLabelProps) => {
  return (
    <StyledMenuLabel className="easy_dropdown-menu-label" {...props}>
      {children}
    </StyledMenuLabel>
  );
};

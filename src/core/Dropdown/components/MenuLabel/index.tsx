import { StyledMenuLabel } from './styles';
import type { MenuLabelProps } from '../../types';

export const MenuLabel = ({ children, ...otherProps }: MenuLabelProps) => {
  return (
    <StyledMenuLabel className="easy_dropdown-menu-label" {...otherProps}>
      {children}
    </StyledMenuLabel>
  );
};

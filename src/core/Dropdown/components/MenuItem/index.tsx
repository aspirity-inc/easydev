import { StyledMenuItem } from './styles';
import type { MenuItemProps } from '../../types';

export const MenuItem = ({ children, disabled, ...props }: MenuItemProps) => {
  return (
    <StyledMenuItem className="easy_dropdown-menu-item" $disabled={disabled} {...props}>
      {children}
    </StyledMenuItem>
  );
};

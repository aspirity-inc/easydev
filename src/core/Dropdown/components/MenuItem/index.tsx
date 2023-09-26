import { StyledMenuItem } from './styles';
import type { MenuItemProps } from '../../types';

export const MenuItem = ({ children, disabled, ...otherProps }: MenuItemProps) => {
  return (
    <StyledMenuItem className="easy_dropdown-menu-item" $disabled={disabled} {...otherProps}>
      {children}
    </StyledMenuItem>
  );
};

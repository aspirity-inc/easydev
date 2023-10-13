import { StyledMenuDivider } from './styles';
import type { MenuDividerProps } from '../../types';

export const MenuDivider = (props: MenuDividerProps) => {
  return <StyledMenuDivider className="easy_dropdown-divider" {...props} />;
};

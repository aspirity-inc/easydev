import { StyledMenuDivider } from './styles';
import type { SidebarMenuDividerProps } from '../../types';

export const SidebarMenuDivider = (props: SidebarMenuDividerProps) => {
  return <StyledMenuDivider className="easy_sidebar-dropdown-divider" {...props} />;
};

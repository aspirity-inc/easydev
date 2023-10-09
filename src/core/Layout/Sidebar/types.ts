import type { MenuItemType } from './SidebarMenu';
import type { BaseLayoutProps } from '../types';

export type SidebarProps = BaseLayoutProps & {
  minWidth?: number;
  maxWidth?: number;
  hideButton?: boolean;
  collapsed?: boolean;
  menu?: MenuItemType[];
  onCollapsed?: (value: boolean) => void;
};

export type StyledSidebarProps = {
  $collapsed: boolean;
  $minWidth?: number;
  $maxWidth?: number;
};

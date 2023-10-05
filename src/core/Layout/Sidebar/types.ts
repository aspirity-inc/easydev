import { MenuItemType } from './SidebarMenu';
import type { BaseLayoutProps } from '../types';

export type SidebarProps = BaseLayoutProps & {
  minWidth?: number;
  maxWidth?: number;
  hideButton?: boolean;
  collapsed?: boolean;
  onCollapsed?: (value: boolean) => void;
  menu?: MenuItemType[];
};

export type StyledSidebarProps = {
  $collapsed: boolean;
  $minWidth?: number;
  $maxWidth?: number;
};

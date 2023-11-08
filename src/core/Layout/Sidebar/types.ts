import type { BaseComponentType } from '@core/Box/types';

import type { MenuItemType } from './SidebarMenu';
import type { BaseLayoutProps } from '../types';

export type SidebarProps = BaseLayoutProps & {
  isStatic?: boolean;
  minWidth?: number;
  maxWidth?: number;
  hideButton?: boolean;
  collapsed?: boolean;
  menu?: MenuItemType[];
  onCollapsed?: (value: boolean) => void;

  sidebarWrapProps?: Pick<BaseComponentType, 'style'>;
  sidebarStickyContentProps?: Pick<BaseComponentType, 'style'>;
  sidebarContentProps?: Pick<BaseComponentType, 'style'>;
  styledScrollBarProps?: Pick<BaseComponentType, 'style'>;
  sidebarProps?: Pick<BaseComponentType, 'style'>;
  sidebarMenuProps?: Pick<BaseComponentType, 'style'>;
  sidebarToggleButtonProps?: Pick<BaseComponentType, 'style'>;
  sidebarKeyboardArrowLeftIconProps?: Pick<BaseComponentType, 'style'>;
};

export type StyledSidebarProps = {
  $collapsed: boolean;
  $minWidth?: number;
  $maxWidth?: number;
};

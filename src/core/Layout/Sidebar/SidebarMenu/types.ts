import type { ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types';

export type MenuItemType = Omit<BaseComponentType, 'children'> & {
  label?: ReactNode;
  id: number;
  icon?: ReactNode;
  children?: MenuItemType[];
  type?: 'divider' | 'item';
};

export type SidebarMenuProps = Omit<BaseComponentType, 'children'> & {
  items?: MenuItemType[];
  collapsed?: boolean;
  activeId?: number;
  onChange?: (id: number) => void;
  minWidth: number;
};

export type MenuItemProps = MenuItemType & {
  active?: boolean;
  collapsed: boolean;
  isSubmenuItem?: boolean;
};

export type StyledMenuItemProps = {
  $disabled?: boolean;
  $active?: boolean;
  $collapsed: boolean;
  $hovered: boolean;
  $collapsedAnimation?: boolean;
};

export type SubMenuProps = MenuItemType & {
  activeId?: number;
  collapsed: boolean;
};

export type MenuDividerProps = Omit<BaseComponentType, 'children'> & { $collapsed: boolean; $minWidth: number };

export type ChevronArrowProps = {
  opened: boolean;
};

export type StyledChevronArrowProps = {
  $opened: boolean;
};

export type MenuItemStateHookParams = {
  collapsed: boolean;
  hovered: boolean;
  id: number | string;
  onChange?: (id: number | string) => void;
};

export type MenuAccordionStateHookParams = {
  collapsed: boolean;
  id: number | string;
};

export type StyledMenuDividerProps = {
  $collapsed: boolean;
  $minWidth: number;
};

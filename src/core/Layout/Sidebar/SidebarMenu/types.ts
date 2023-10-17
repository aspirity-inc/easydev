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
  maxWidth: number;
  activeId?: number;
  onChange?: (id: number) => void;
};

export type SidebarMenuItemProps = MenuItemType & {
  active?: boolean;
  collapsed: boolean;
  maxWidth: number;
  isSubmenuItem?: boolean;
};

export type StyledSidebarMenuItemProps = {
  $disabled?: boolean;
  $collapsed: boolean;
  $maxWidth: number;
  $hovered: boolean;
  $collapsedAnimation?: boolean;
};

export type StyledAccordionListProps = {
  $maxWidth: number;
  $hovered: boolean;
};

export type StyledAccordionProps = {
  $opened: boolean;
  $collapsed?: boolean;
  $hovered?: boolean;
};

export type SubMenuProps = MenuItemType & {
  activeId?: number;
  collapsed: boolean;
  maxWidth: number;
};

export type SidebarMenuDividerProps = Omit<BaseComponentType, 'children'>;

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

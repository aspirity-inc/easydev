import type { ElementType, MutableRefObject, ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types';

export type MenuItemType = Omit<BaseComponentType, 'children'> & {
  label?: ReactNode;
  id: number;
  icon?: ReactNode;
  children?: MenuItemType[];
  type?: 'divider' | 'item';
  as?: ElementType;
  linkProps?: {
    [propName: string]: any;
  };
};

export type SidebarMenuProps = Omit<BaseComponentType, 'children'> & {
  items?: MenuItemType[];
  collapsed?: boolean;
  activeId?: number;
  onChange?: (id: number) => void;
};

export type MenuItemProps = MenuItemType & {
  active?: boolean;
  collapsed: boolean;
};

export type StyledMenuItemProps = {
  $disabled?: boolean;
  $active?: boolean;
  $collapsed: boolean;
  $hovered: boolean;
  $opened?: boolean;
};

export type SubMenuProps = MenuItemType & {
  activeId?: number;
  collapsed: boolean;
};

export type SubMenuListProps = BaseComponentType & {
  opened: boolean;
  height: number;
  collapsed: boolean;
  hovered: boolean;
  menuChildren: MenuItemType[];
  panelRef: MutableRefObject<HTMLDivElement | null>;
  activeId: number;
};

export type MenuDividerProps = Omit<BaseComponentType, 'children'>;

export type ChevronArrowProps = {
  show: boolean;
};

export type MenuItemStateHookParams = {
  collapsed: boolean;
  hovered: boolean;
};

export type SubMenuStateHookParams = {
  collapsed: boolean;
};

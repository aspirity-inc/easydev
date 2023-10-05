import type { MutableRefObject, ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types';

export type MenuItemType = {
  label?: ReactNode;
  id: number;
  icon?: ReactNode;
  children?: MenuItemType[];
  type?: 'submenu' | 'divider' | 'item';
  disabled?: boolean;
  onClick?: () => void;
};

export type MenuProps = Omit<BaseComponentType, 'children'> & {
  items?: MenuItemType[];
  collapsed?: boolean;
  onCollapsed?: () => void;
  activeId?: number;
  onChange?: (id: number) => void;
};

export type MenuItemProps = BaseComponentType & {
  icon?: ReactNode;
  disabled?: boolean;
  active?: boolean;
  collapsed: boolean;
};

export type StyledMenuItemProps = {
  $disabled?: boolean;
  $active?: boolean;
};

export type SubMenuProps = BaseComponentType & {
  icon?: ReactNode;
  href?: string;
  disabled?: boolean;
  activeId?: number;
  collapsed: boolean;
};

export type SubMenuListProps = BaseComponentType & {
  opened: boolean;
  height: number;
  collapsed: boolean;
  menuChildren: MenuItemType[];
  panelRef: MutableRefObject<HTMLDivElement | null>;
  activeId: number;
};

export type MenuDividerProps = Omit<BaseComponentType, 'children'>;

export type ChevronArrowProps = {
  show: boolean;
};

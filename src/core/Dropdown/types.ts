import { ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types';

import { menuPositions } from './constants';

export type DropdownPosition = (typeof menuPositions)[number];

export type DropdownProps = BaseComponentType & {
  open?: boolean;
  onChangeOpen?: (open: boolean) => void;
  disabled?: boolean;
  position?: DropdownPosition;
  trigger?: 'click' | 'hover';
};

export type DropdownHookParams = {
  open?: boolean;
  onChangeOpen?: (open: boolean) => void;
  disabled?: boolean;
  trigger?: 'click' | 'hover';
};

export type TargetProps = BaseComponentType & {
  title?: string;
  open: boolean;
  disabled: boolean;
  withIcon?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
};

export type StyledTargetProps = {
  $open: boolean;
};

export type MenuLabelProps = BaseComponentType;

export type MenuItemProps = BaseComponentType & {
  disabled?: boolean;
};

export type StyledMenuItemProps = {
  $disabled?: boolean;
};

export type MenuDividerProps = Omit<BaseComponentType, 'children'>;

export type MenuProps = BaseComponentType & {
  open?: boolean;
  position: DropdownPosition;
};

export type StyledMenuProps = {
  $position: DropdownPosition;
};

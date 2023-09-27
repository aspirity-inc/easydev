import type { BaseComponentType } from '@core/Box/types';

import { menuPositions } from './constants';

export type DropdownPosition = (typeof menuPositions)[number];

export type DropdownProps = BaseComponentType & {
  open?: boolean;
  onChangeOpen?: (open: boolean) => void;
  disabled?: boolean;
  position?: DropdownPosition;
  offset?: number;
  trigger?: 'click' | 'hover';
  width?: 'full';
};

export type DropdownHookParams = {
  open?: boolean;
  onChangeOpen?: (open: boolean) => void;
  disabled?: boolean;
  trigger?: 'click' | 'hover';
};

export type TargetProps = BaseComponentType & {
  onClick?: () => void;
};

export type MenuLabelProps = BaseComponentType;

export type MenuItemProps = BaseComponentType & {
  disabled?: boolean;
};

export type MenuDividerProps = Omit<BaseComponentType, 'children'>;

export type MenuProps = BaseComponentType & {
  open?: boolean;
  position: DropdownPosition;
};

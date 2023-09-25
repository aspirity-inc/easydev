import { ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types';

export type MenuItem = {
  key: string;
  label: ReactNode;
  disabled?: boolean;
};

export type DropdownProps = BaseComponentType & {
  menu: MenuItem[];
  open?: boolean;
  onChangeOpen?: (open: boolean) => void;
};

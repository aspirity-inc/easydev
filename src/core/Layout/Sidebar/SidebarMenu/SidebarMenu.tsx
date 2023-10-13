import { useState } from 'react';

import { MenuDivider } from './components/MenuDivider';
import { MenuItem } from './components/MenuItem';
import { SubMenu } from './components/SubMenu';
import { StyledMenu } from './styles';
import type { MenuItemType, SidebarMenuProps } from './types';

export const SidebarMenu = ({
  items,
  collapsed = false,
  activeId: controlledActiveId,
  onChange,
  ...props
}: SidebarMenuProps) => {
  const [activeId, setActiveId] = useState(controlledActiveId || -1);

  const handleChangeActiveId = (id: number) => {
    setActiveId(id);
    onChange && onChange(id);
  };

  if (!items) return null;

  return (
    <StyledMenu as="ul" className="easy_dropdown-menu" {...props}>
      {items.map((item: MenuItemType) => {
        if (item.type === 'divider') {
          return <MenuDivider key={item.id} />;
        } else {
          const props = {
            key: item.id,
            ...item,
            collapsed,
            activeId,
            onChange: handleChangeActiveId,
          };
          if (item.children) {
            return <SubMenu {...props} />;
          } else {
            return <MenuItem {...props} />;
          }
        }
      })}
    </StyledMenu>
  );
};

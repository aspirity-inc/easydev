import { useState } from 'react';

import { SidebarMenuDivider } from './components/SidebarMenuDivider';
import { SidebarMenuItem } from './components/SidebarMenuItem';
import { SubMenu } from './components/SubMenu';
import { StyledMenu } from './styles';
import type { MenuItemType, SidebarMenuProps } from './types';

export const SidebarMenu = ({
  items,
  collapsed = false,
  activeId: controlledActiveId,
  onChange,
  maxWidth,
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
          return <SidebarMenuDivider key={item.id} />;
        } else {
          const props = {
            key: item.id,
            ...item,
            collapsed,
            activeId,
            onChange: handleChangeActiveId,
            maxWidth,
          };
          if (item.children) {
            return <SubMenu {...props} />;
          } else {
            return <SidebarMenuItem {...props} />;
          }
        }
      })}
    </StyledMenu>
  );
};

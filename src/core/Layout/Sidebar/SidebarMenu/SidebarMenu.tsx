import { useState } from 'react';

import { MenuDivider } from './components/MenuDivider';
import { MenuItem } from './components/MenuItem';
import { SubMenu } from './components/SubMenu';
import { StyledMenu } from './styles';
import type { MenuItemType, MenuProps } from './types';

export const SidebarMenu = ({
  items,
  collapsed = false,
  activeId: controlledActiveId,
  onChange,
  onCollapsed,
  ...props
}: MenuProps) => {
  const [activeId, setActiveId] = useState(controlledActiveId || -1);

  const handleChangeActiveId = (id: number) => {
    setActiveId(id);
    onChange && onChange(id);
  };

  const handleCollapsedClick = () => {
    collapsed && onCollapsed && onCollapsed();
  };

  if (!items) return null;

  return (
    <StyledMenu as="ul" className="easy_dropdown-menu" onClick={handleCollapsedClick} {...props}>
      {items.map((item: MenuItemType) => {
        if (item.type === 'divider') {
          return <MenuDivider key={item.id} />;
        } else if (item.type === 'submenu' || item.children) {
          return (
            <SubMenu
              key={item.id}
              menuChildren={item.children}
              icon={item.icon}
              disabled={item.disabled}
              collapsed={collapsed}
              activeId={activeId}
              onChange={handleChangeActiveId}
            >
              {item.label}
            </SubMenu>
          );
        } else {
          return (
            <MenuItem
              key={item.id}
              icon={item.icon}
              disabled={item.disabled}
              collapsed={collapsed}
              active={item.id === activeId}
              onChange={() => handleChangeActiveId(item.id)}
              onClick={item.onClick}
            >
              {item.label}
            </MenuItem>
          );
        }
      })}
    </StyledMenu>
  );
};

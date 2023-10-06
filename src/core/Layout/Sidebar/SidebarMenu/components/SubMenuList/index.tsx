import { WrapperMenu, StyledSubMenu } from './styles';
import type { MenuItemType, SubMenuListProps } from '../../types';
import { MenuItem } from '../MenuItem';

export const SubMenuList = ({
  opened,
  height,
  collapsed,
  menuChildren,
  panelRef,
  activeId,
  onChange,
  ...props
}: SubMenuListProps) => {
  return (
    <WrapperMenu $opened={opened} $height={height} $collapsed={collapsed}>
      <StyledSubMenu as="ul" className="easy_dropdown-submenu" {...props} ref={panelRef}>
        {menuChildren.map((item: MenuItemType) => {
          return (
            <MenuItem
              key={item.id}
              icon={item.icon}
              disabled={item.disabled}
              active={item.id === activeId}
              onChange={() => onChange(item.id)}
              onClick={item.onClick}
              collapsed={collapsed}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </StyledSubMenu>
    </WrapperMenu>
  );
};

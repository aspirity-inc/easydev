import { AnimationMenuWrapper, StyledSubMenu } from './styles';
import type { MenuItemType, SubMenuListProps } from '../../types';
import { MenuItem } from '../MenuItem';

export const SubMenuList = ({
  opened,
  height,
  collapsed,
  hovered,
  menuChildren,
  panelRef,
  activeId,
  onChange,
  ...props
}: SubMenuListProps) => {
  return (
    <AnimationMenuWrapper $opened={opened} $height={height} $collapsed={collapsed} $hovered={hovered}>
      <StyledSubMenu as="ul" className="easy_dropdown-submenu" {...props} ref={panelRef}>
        {menuChildren.map((item: MenuItemType) => {
          return (
            <MenuItem
              key={item.id}
              {...item}
              collapsed={collapsed}
              hovered={hovered}
              activeId={activeId}
              onChange={onChange}
            />
          );
        })}
      </StyledSubMenu>
    </AnimationMenuWrapper>
  );
};

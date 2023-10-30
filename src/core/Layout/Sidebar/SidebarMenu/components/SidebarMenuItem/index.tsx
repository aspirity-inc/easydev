import { StyledMenuItem } from './styles';
import { useMenuItemState } from '../../hooks/useMenuItemState';
import { StyledIcon, StyledLabel, StyledMenuItemContent } from '../../styles';
import type { SidebarMenuItemProps } from '../../types';

export const SidebarMenuItem = ({
  id,
  disabled,
  icon,
  activeId,
  collapsed,
  hovered: controlledHovered,
  onChange,
  isSubmenuItem = false,
  maxWidth,
  onClick,
  ...props
}: SidebarMenuItemProps) => {
  const {
    hovered,
    handleMouseMove,
    handleMouseLeave,
    handleClickItem,
    handleClickIcon,
    showLabel,
    collapsedAnimation,
  } = useMenuItemState({
    collapsed,
    hovered: controlledHovered,
    onChange,
    onClick,
    id,
  });

  const defaultMenuIcon = <span className="material-symbols-outlined">category</span>;

  return (
    <StyledMenuItem
      as="li"
      className="easy_dropdown-menu-item"
      $disabled={disabled}
      $collapsed={collapsed}
      $hovered={hovered || controlledHovered}
      $active={activeId === id}
      $maxWidth={maxWidth}
      onClick={handleClickItem}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <StyledMenuItemContent gap={8} wrap="nowrap">
        {!isSubmenuItem && (
          <StyledIcon onMouseMove={handleMouseMove} onClick={handleClickIcon}>
            {icon || defaultMenuIcon}
          </StyledIcon>
        )}
        {showLabel && <StyledLabel $collapsedAnimation={collapsedAnimation}>{props.label}</StyledLabel>}
      </StyledMenuItemContent>
    </StyledMenuItem>
  );
};

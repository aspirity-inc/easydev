import { Box } from '@core/Box';

import { StyledMenuItem } from './styles';
import { useMenuItemState } from '../../hooks/useMenuItemState';
import { StyledIcon, StyledMenuItemContent } from '../../styles';
import type { MenuItemProps } from '../../types';

export const MenuItem = ({
  id,
  disabled,
  icon,
  activeId,
  collapsed,
  href,
  hovered: controlledHovered,
  onChange,
  ...props
}: MenuItemProps) => {
  const { hovered, handleMouseMove, handleMouseLeave, showLabel } = useMenuItemState({
    collapsed,
    hovered: controlledHovered,
  });

  const handleClick = () => {
    onChange && onChange(id);
  };

  return (
    <StyledMenuItem
      as="li"
      className="easy_dropdown-menu-item"
      $disabled={disabled}
      $collapsed={collapsed}
      $hovered={hovered}
      $active={activeId === id}
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <Box as="a" href={href}>
        <StyledMenuItemContent gap={8} wrap="nowrap">
          <StyledIcon onMouseMove={handleMouseMove}>{icon}</StyledIcon>
          {showLabel && props.label}
        </StyledMenuItemContent>
      </Box>
    </StyledMenuItem>
  );
};

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
  hovered: controlledHovered,
  onChange,
  href,
  as: Component,
  linkProps,
  ...props
}: MenuItemProps) => {
  const { hovered, handleMouseMove, handleMouseLeave, showLabel } = useMenuItemState({
    collapsed,
    hovered: controlledHovered,
  });

  const handleClick = () => {
    onChange && onChange(id);
  };

  const LinkComponent = Component || 'a';

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
      <LinkComponent href={href} {...linkProps}>
        <StyledMenuItemContent gap={8} wrap="nowrap">
          <StyledIcon onMouseMove={handleMouseMove}>{icon}</StyledIcon>
          {showLabel && props.label}
        </StyledMenuItemContent>
      </LinkComponent>
    </StyledMenuItem>
  );
};

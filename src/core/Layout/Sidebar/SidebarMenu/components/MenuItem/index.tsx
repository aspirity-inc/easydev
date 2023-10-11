import { StyledMenuItem } from './styles';
import { useMenuItemState } from '../../hooks/useMenuItemState';
import { StyledIcon, StyledLabel, StyledMenuItemContent } from '../../styles';
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
  as: LinkComponent = 'a',
  linkProps,
  ...props
}: MenuItemProps) => {
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
    id,
  });

  return (
    <StyledMenuItem
      as="li"
      className="easy_dropdown-menu-item"
      $disabled={disabled}
      $collapsed={collapsed}
      $hovered={hovered || controlledHovered}
      $active={activeId === id}
      onClick={handleClickItem}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <LinkComponent href={href} {...linkProps}>
        <StyledMenuItemContent gap={8} wrap="nowrap">
          {icon && (
            <StyledIcon onMouseMove={handleMouseMove} onClick={handleClickIcon}>
              {icon}
            </StyledIcon>
          )}
          {showLabel && <StyledLabel $collapsedAnimation={collapsedAnimation}>{props.label}</StyledLabel>}
        </StyledMenuItemContent>
      </LinkComponent>
    </StyledMenuItem>
  );
};

import { StyledSubMenuItem, StyledBox } from './styles';
import { useSubMenuState } from '../../hooks/useSubMenuState';
import { StyledIcon, StyledMenuItemContent } from '../../styles';
import type { SubMenuProps } from '../../types';
import { ChevronArrow } from '../ChevronArrow';
import { SubMenuList } from '../SubMenuList';

export const SubMenu = ({ children, disabled, icon, activeId, collapsed, onChange, ...props }: SubMenuProps) => {
  const {
    hovered,
    opened,
    toggleOpen,
    height,
    panelRef,
    delayCollapsed,
    handleMouseMove,
    handleMouseLeave,
    showLabel,
  } = useSubMenuState({
    collapsed,
  });

  return (
    <StyledBox as="li" className="easy_dropdown-menu-item" onMouseLeave={handleMouseLeave}>
      <StyledSubMenuItem
        $disabled={disabled}
        $opened={opened}
        $collapsed={collapsed}
        $hovered={hovered}
        onClick={toggleOpen}
        {...props}
      >
        <StyledMenuItemContent gap={8} wrap="nowrap">
          <StyledIcon onMouseMove={handleMouseMove}>{icon}</StyledIcon>
          {showLabel && props.label}
        </StyledMenuItemContent>

        <ChevronArrow show={showLabel} />
      </StyledSubMenuItem>
      {children && (
        <SubMenuList
          opened={opened}
          height={height}
          collapsed={delayCollapsed}
          hovered={hovered}
          menuChildren={children}
          panelRef={panelRef}
          activeId={activeId || -1}
          onChange={onChange}
        />
      )}
    </StyledBox>
  );
};

import { useState } from 'react';

import { SidebarMenu } from './SidebarMenu';
import { StyledSidebar, ToggleBtn, StyledSidebarWrapper, SidebarContent } from './styles';
import type { SidebarProps } from './types';

export const Sidebar = ({
  children,
  as = 'aside',
  hideButton = false,
  collapsed: controledCollapsed,
  onCollapsed,
  minWidth = 56,
  maxWidth = 220,
  menu,
  ...props
}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(controledCollapsed || false);

  const onToggle = () => {
    setCollapsed(!collapsed);
    onCollapsed && onCollapsed(!collapsed);
  };

  return (
    <StyledSidebarWrapper className="easy_sidebar-container">
      <StyledSidebar
        className="easy_sidebar"
        as={as}
        $collapsed={collapsed}
        $minWidth={minWidth}
        $maxWidth={maxWidth}
        {...props}
      >
        <SidebarContent className="easy_sidebar-content">
          <SidebarMenu className="easy_sidebar-menu" items={menu} collapsed={collapsed} />
          {children}
        </SidebarContent>
      </StyledSidebar>
      {!hideButton && (
        <ToggleBtn onClick={onToggle} $collapsed={collapsed}>
          <span className="material-symbols-rounded">keyboard_arrow_left</span>
        </ToggleBtn>
      )}
    </StyledSidebarWrapper>
  );
};

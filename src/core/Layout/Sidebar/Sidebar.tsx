import { useState } from 'react';

import { SidebarMenu } from './SidebarMenu';
import { StyledSidebar, ToggleBtn, StyledSidebarWrapper, SidebarContent } from './styles';
import type { SidebarProps } from './types';

export const Sidebar = ({
  isStatic = false,
  children,
  as = 'aside',
  hideButton = false,
  collapsed: controlledCollapsed = false,
  onCollapsed,
  minWidth = 56,
  maxWidth = 220,
  menu,
  ...props
}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(controlledCollapsed);

  const onToggle = () => {
    if (isStatic) return;

    setCollapsed(!collapsed);
    onCollapsed && onCollapsed(!collapsed);
  };

  return (
    <StyledSidebarWrapper className="easy_sidebar-wrapper">
      <StyledSidebar
        className="easy_sidebar"
        as={as}
        $collapsed={collapsed}
        $minWidth={minWidth}
        $maxWidth={maxWidth}
        {...props}
      >
        <SidebarContent className="easy_sidebar-content">
          <SidebarMenu className="easy_sidebar-menu" items={menu} collapsed={collapsed} minWidth={minWidth}/>
          {children}
        </SidebarContent>
      </StyledSidebar>
      {!isStatic && !hideButton && (
        <ToggleBtn onClick={onToggle} $collapsed={collapsed} className='easy_sidebar-toggle_button'>
          <span className="material-symbols-rounded">keyboard_arrow_left</span>
        </ToggleBtn>
      )}
    </StyledSidebarWrapper>
  );
};

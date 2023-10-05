import { useState } from 'react';

import { SidebarMenu } from './SidebarMenu';
import { StyledSidebar, ToggleBtn, StyledSidebarWrapper, SidebarContent } from './styles';
import type { SidebarProps } from './types';

export const Sidebar = ({
  children,
  as = 'aside',
  hideButton = false,
  collapsed: controlCollapsed,
  onCollapsed,
  minWidth = 56,
  maxWidth = 220,
  menu,
  ...props
}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(controlCollapsed || false);

  const onToggle = () => {
    setCollapsed(!collapsed);
    onCollapsed && onCollapsed(!collapsed);
  };

  return (
    <StyledSidebarWrapper>
      <StyledSidebar
        className="easy_sidebar"
        as={as}
        $collapsed={collapsed}
        $minWidth={minWidth}
        $maxWidth={maxWidth}
        {...props}
      >
        <SidebarContent>
          <SidebarMenu items={menu} collapsed={collapsed} onCollapsed={onToggle} />
          {children}
        </SidebarContent>
      </StyledSidebar>
      {!hideButton && (
        <ToggleBtn onClick={onToggle} $collapsed={collapsed}>
          <div className="material-symbols-rounded">keyboard_arrow_left</div>
        </ToggleBtn>
      )}
    </StyledSidebarWrapper>
  );
};

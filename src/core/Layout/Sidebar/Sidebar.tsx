import { useState } from 'react';

import { KeyboardArrowLeftIcon } from '@icons';

import { SidebarMenu } from './SidebarMenu';
import {
  StyledSidebar,
  ToggleBtn,
  StyledSidebarWrapper,
  SidebarStickyContent,
  SidebarContent,
  StyledScrollbar,
} from './styles';
import type { SidebarProps } from './types';

export const Sidebar = ({
  isStatic = false,
  children,
  as = 'aside',
  hideButton = false,
  collapsed: controlledCollapsed,
  onCollapsed,
  minWidth = 56,
  maxWidth = 220,
  menu,
  ...props
}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(controlledCollapsed || false);

  const onToggle = () => {
    if (isStatic) return;

    setCollapsed(!collapsed);
    onCollapsed && onCollapsed(!collapsed);
  };

  return (
    <StyledSidebarWrapper className="easy_sidebar-wrapper">
      <SidebarStickyContent className="easy_sidebar-sticky-content" {...props}>
        <SidebarContent className="easy_sidebar-content">
          <StyledScrollbar $collapsed={collapsed}>
            <StyledSidebar
              className="easy_sidebar"
              as={as}
              $collapsed={collapsed}
              $minWidth={minWidth}
              $maxWidth={maxWidth}
            >
              <SidebarMenu className="easy_sidebar-menu" items={menu} collapsed={collapsed} maxWidth={maxWidth} />
              {children}
            </StyledSidebar>
          </StyledScrollbar>
          {!isStatic && !hideButton && (
            <ToggleBtn
              onClick={onToggle}
              $collapsed={collapsed}
              $maxWidth={maxWidth}
              className="easy_sidebar-toggle_button"
            >
              <KeyboardArrowLeftIcon />
            </ToggleBtn>
          )}
        </SidebarContent>
      </SidebarStickyContent>
      {!isStatic && !hideButton && (
        <ToggleBtn onClick={onToggle} $collapsed={collapsed}>
          <KeyboardArrowLeftIcon />
        </ToggleBtn>
      )}
    </StyledSidebarWrapper>
  );
};

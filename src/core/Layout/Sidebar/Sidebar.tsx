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
  sidebarWrapProps,
  sidebarStickyContentProps,
  sidebarContentProps,
  styledScrollBarProps,
  sidebarProps,
  sidebarMenuProps,
  sidebarToggleButtonProps,
  sidebarKeyboardArrowLeftIconProps,
  ...props
}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(controlledCollapsed || false);

  const onToggle = () => {
    if (isStatic) return;

    setCollapsed(!collapsed);
    onCollapsed && onCollapsed(!collapsed);
  };

  return (
    <StyledSidebarWrapper className="easy_sidebar-wrap" {...sidebarWrapProps}>
      <SidebarStickyContent className="easy_sidebar-sticky-content" {...props} {...sidebarStickyContentProps}>
        <SidebarContent className="easy_sidebar-content" {...sidebarContentProps}>
          <StyledScrollbar $collapsed={collapsed} {...styledScrollBarProps}>
            <StyledSidebar
              className="easy_sidebar"
              as={as}
              $collapsed={collapsed}
              $minWidth={minWidth}
              $maxWidth={maxWidth}
              {...sidebarProps}
            >
              <SidebarMenu
                className="easy_sidebar-menu"
                items={menu}
                collapsed={collapsed}
                maxWidth={maxWidth}
                {...sidebarMenuProps}
              />
              {children}
            </StyledSidebar>
          </StyledScrollbar>
          {!isStatic && !hideButton && (
            <ToggleBtn
              onClick={onToggle}
              $collapsed={collapsed}
              $maxWidth={maxWidth}
              className="easy_sidebar-toggle_button"
              {...sidebarToggleButtonProps}
            >
              <KeyboardArrowLeftIcon {...sidebarKeyboardArrowLeftIconProps} />
            </ToggleBtn>
          )}
        </SidebarContent>
      </SidebarStickyContent>
      {!isStatic && !hideButton && (
        <ToggleBtn onClick={onToggle} $collapsed={collapsed} {...sidebarToggleButtonProps}>
          <KeyboardArrowLeftIcon {...sidebarKeyboardArrowLeftIconProps} />
        </ToggleBtn>
      )}
    </StyledSidebarWrapper>
  );
};

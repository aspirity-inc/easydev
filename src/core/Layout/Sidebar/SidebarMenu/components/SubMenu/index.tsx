import { useState, useRef, useEffect } from 'react';

import { Box } from '@core/Box';
import { Flex } from '@core/Flex';

import { StyledSubMenuItem } from './styles';
import { StyledIcon } from '../../styles';
import type { SubMenuProps } from '../../types';
import { ChevronArrow } from '../ChevronArrow';
import { SubMenuList } from '../SubMenuList';

export const SubMenu = ({
  children,
  disabled,
  menuChildren,
  icon,
  activeId,
  collapsed,
  onChange,
  ...props
}: SubMenuProps) => {
  const [opened, setOpened] = useState(false);
  const [height, setHeight] = useState<number>(0);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const toggleOpen = () => {
    if (!collapsed) setOpened((prev) => !prev);
  };

  useEffect(() => {
    setHeight(panelRef.current?.offsetHeight || 0);
  }, [opened]);

  useEffect(() => {
    opened && collapsed && setOpened(false);
  }, [collapsed, opened]);

  return (
    <Box as="li" className="easy_dropdown-menu-item">
      <StyledSubMenuItem $disabled={disabled} $opened={opened} onClick={toggleOpen} {...props}>
        <Flex gap={8} wrap="nowrap">
          {icon && <StyledIcon>{icon}</StyledIcon>}
          {!collapsed && children}
        </Flex>

        <ChevronArrow show={menuChildren && !collapsed} />
      </StyledSubMenuItem>
      {menuChildren && (
        <SubMenuList
          opened={opened}
          height={height}
          collapsed={collapsed}
          menuChildren={menuChildren}
          panelRef={panelRef}
          activeId={activeId || -1}
          onChange={onChange}
        />
      )}
    </Box>
  );
};

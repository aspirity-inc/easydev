import { Box } from '@core/Box';
import { Flex } from '@core/Flex';

import { StyledMenuItem } from './styles';
import { StyledIcon } from '../../styles';
import type { MenuItemProps } from '../../types';

export const MenuItem = ({
  children,
  disabled,
  icon,
  active,
  collapsed,
  href,
  onChange,
  onClick,
  ...props
}: MenuItemProps) => {
  const handleClick = () => {
    onChange && onChange();
    onClick && onClick();
  };

  return (
    <StyledMenuItem
      as="li"
      className="easy_dropdown-menu-item"
      $disabled={disabled}
      $active={active}
      onClick={handleClick}
      {...props}
    >
      <Box as="a" href={href}>
        <Flex gap={8} wrap="nowrap">
          {icon && <StyledIcon>{icon}</StyledIcon>}
          {!collapsed && children}
        </Flex>
      </Box>
    </StyledMenuItem>
  );
};

import { useState } from 'react';

import type { MenuItemStateHookParams } from '../types';

export function useMenuItemState({ collapsed, hovered: parentHovered }: MenuItemStateHookParams) {
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = () => {
    collapsed && setHovered(true);
  };

  const handleMouseLeave = () => {
    collapsed && setHovered(false);
  };

  const isVisibleLabel = () => !collapsed || parentHovered || hovered;

  return {
    hovered,
    handleMouseMove,
    handleMouseLeave,
    showLabel: isVisibleLabel(),
  };
}

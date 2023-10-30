import { useEffect, useState } from 'react';

import type { MenuItemStateHookParams } from '../types';

export function useMenuItemState({
  collapsed,
  hovered: parentHovered,
  onChange,
  onClick,
  id,
}: MenuItemStateHookParams) {
  const [hovered, setHovered] = useState(false);
  const [showLabel, setShowLabel] = useState(true);
  const [collapsedAnimation, setCollapsedAnimation] = useState(false);

  const handleMouseMove = () => {
    collapsed && setHovered(true);
  };

  const handleMouseLeave = () => {
    collapsed && setHovered(false);
  };

  const handleClickItem = () => {
    (!collapsed || hovered) && onChange && onChange(id);
    onChange && onChange(id);
    onClick && onClick();
  };

  const handleClickIcon = () => {
    collapsed && onChange && onChange(id);
    onClick && onClick();
  };

  useEffect(() => {
    const isVisibleLabel = parentHovered || hovered;
    setShowLabel(isVisibleLabel);
    setCollapsedAnimation(!isVisibleLabel);
  }, [parentHovered, hovered]);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    //For rigth work animation
    if (collapsed) {
      setCollapsedAnimation(true);
      timeout = setTimeout(() => setShowLabel(false), 300);
    } else {
      setShowLabel(true);
      timeout = setTimeout(() => setCollapsedAnimation(false), 100);
    }

    return () => clearTimeout(timeout);
  }, [collapsed]);

  return {
    hovered,
    handleMouseMove,
    handleMouseLeave,
    handleClickItem,
    handleClickIcon,
    showLabel,
    collapsedAnimation,
  };
}

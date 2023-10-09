import { useEffect, useRef, useState } from 'react';

import type { SubMenuStateHookParams } from '../types';

export function useSubMenuState({ collapsed }: SubMenuStateHookParams) {
  const [hovered, setHovered] = useState(false);
  const [opened, setOpened] = useState(false);
  const [height, setHeight] = useState<number>(0);
  const panelRef = useRef<HTMLDivElement | null>(null);

  //For rigth work animation
  const [delayCollapsed, setDelayCollapsed] = useState(false);

  const handleMouseMove = () => {
    if (collapsed) {
      setHovered(true);
      setOpened(true);
    }
  };

  const handleMouseLeave = () => {
    if (collapsed) {
      setHovered(false);
      setOpened(false);
    }
  };

  const toggleOpen = () => {
    if (!collapsed) {
      setOpened((prev) => !prev);
    }
  };

  useEffect(() => {
    setHeight(panelRef.current?.offsetHeight || 0);
  }, [opened]);

  useEffect(() => {
    //Close submenu during collapse sidebar
    collapsed && !hovered && opened && setOpened(false);
    const timeout = setTimeout(() => setDelayCollapsed(collapsed), 300);

    return () => clearTimeout(timeout);
  }, [collapsed, opened, hovered]);

  const isVisibleLabel = () => !collapsed || hovered;

  return {
    hovered,
    opened,
    toggleOpen,
    height,
    panelRef,
    delayCollapsed,
    handleMouseMove,
    handleMouseLeave,
    showLabel: isVisibleLabel(),
  };
}

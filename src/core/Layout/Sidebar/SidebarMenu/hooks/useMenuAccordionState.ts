import { useEffect, useState } from 'react';

import { AccordionItemValue } from '@core/Accordion';

import type { MenuAccordionStateHookParams } from '../types';

export function useMenuAccordionState({ id, collapsed }: MenuAccordionStateHookParams) {
  const [hovered, setHovered] = useState(false);
  const [opened, setOpened] = useState<AccordionItemValue<false>>('');
  const [showLabel, setShowLabel] = useState(true);

  //For animation
  const [delayCollapsed, setDelayCollapsed] = useState(false);
  const [collapsedAnimation, setCollapsedAnimation] = useState(false);

  const handleMouseMove = () => {
    if (collapsed) {
      setHovered(true);
      setOpened(id);
    }
  };

  const handleMouseLeave = () => {
    if (collapsed) {
      setHovered(false);
      setOpened('');
    }
  };

  const onChange = (value: AccordionItemValue<false>) => {
    setOpened(value);
  };

  useEffect(() => {
    //Close submenu during collapse sidebar
    collapsed && !hovered && opened && setOpened('');
    const timeout = setTimeout(() => setDelayCollapsed(collapsed), 400);

    return () => clearTimeout(timeout);
  }, [collapsed, opened, hovered]);

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

  useEffect(() => {
    const isVisibleLabel = !collapsed || hovered;
    setShowLabel(isVisibleLabel);
  }, [collapsed, hovered]);

  return {
    hovered,
    opened,
    onChange,
    delayCollapsed,
    handleMouseMove,
    handleMouseLeave,
    showLabel,
    collapsedAnimation,
  };
}

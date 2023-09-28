import { useCallback, useEffect, useRef, useState } from 'react';

import type { DropdownHookParams } from '../types';

export function useDropdownControl({ open, onChangeOpen, trigger, disabled }: DropdownHookParams) {
  const [opened, setOpened] = useState(open || false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleOpenChange = useCallback(
    (value: boolean) => {
      setOpened(value);
      onChangeOpen && onChangeOpen(value);
    },
    [onChangeOpen]
  );

  const handleClick = (value: boolean) => {
    if (trigger === 'click') {
      handleOpenChange(value);
    }
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    trigger === 'hover' && handleOpenChange(true);
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    trigger === 'hover' && handleOpenChange(false);
  };

  const toggleOpen = () => {
    if (disabled) return;
    handleClick(!opened);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        trigger === 'click' &&
        !menuRef.current?.contains(event.target as Node) &&
        !targetRef.current?.contains(event.target as Node)
      ) {
        handleOpenChange(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleOpenChange, trigger]);

  return {
    opened,
    handleMouseEnter,
    handleMouseLeave,
    toggleOpen,
    targetRef,
    menuRef,
    dropdownRef,
  };
}

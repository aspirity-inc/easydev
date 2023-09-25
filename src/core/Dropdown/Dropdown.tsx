import { useCallback, useEffect, useRef, useState } from 'react';

import { StyledDropdown, StyledMenu, StyledMenuItem } from './styles';
import type { DropdownProps } from './types';

export const Dropdown = ({ children, menu, open, onChangeOpen, ...otherProps }: DropdownProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const childrenRef = useRef<HTMLDivElement | null>(null);

  const [opened, setOpened] = useState(open || false);

  const handleOpenChange = useCallback(
    (value: boolean) => {
      setOpened(value);
      onChangeOpen && onChangeOpen(value);
    },
    [onChangeOpen]
  );

  const toggleOpen = () => {
    handleOpenChange(!opened);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node) && !childrenRef.current?.contains(event.target as Node)) {
        handleOpenChange(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleOpenChange]);

  return (
    <StyledDropdown {...otherProps}>
      <div ref={childrenRef} onClick={toggleOpen}>
        {children}
      </div>

      {opened && (
        <StyledMenu className="easy_dropdown-menu" ref={menuRef}>
          {menu.map((item) => (
            <StyledMenuItem className="easy_dropdown-menu-item" key={item.key} $disabled={item.disabled}>
              {item.label}
            </StyledMenuItem>
          ))}
        </StyledMenu>
      )}
    </StyledDropdown>
  );
};

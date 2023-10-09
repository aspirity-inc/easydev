import { Children, cloneElement, isValidElement } from 'react';

import { Menu } from './components/Menu';
import { Target } from './components/Target';
import { useDropdownControl } from './hooks/useDropdownControl';
import { StyledDropdown } from './styles';
import type { DropdownProps } from './types';

export const Dropdown = ({
  children,
  open,
  onChangeOpen,
  disabled,
  position = 'bottom-left',
  trigger = 'click',
  ...props
}: DropdownProps) => {
  const { opened, handleMouseEnter, handleMouseLeave, toggleOpen, targetRef, menuRef, dropdownRef } =
    useDropdownControl({
      open,
      onChangeOpen,
      trigger,
      disabled,
    });

  const childrenWithProps = Children.toArray(children).map((child) => {
    if (!isValidElement(child)) return null;

    if ((child as any)?.type === Target) {
      return cloneElement(child, {
        ...child.props,
        ref: targetRef,
        open: opened,
        disabled: disabled,
        onClick: toggleOpen,
        onMouseEnter: handleMouseEnter,
      });
    }

    if ((child as any)?.type === Menu) {
      return cloneElement(child, {
        ...child.props,
        ref: menuRef,
        open: opened,
        position,
      });
    }
  });

  return (
    <StyledDropdown className="easy_dropdown" ref={dropdownRef} onMouseLeave={handleMouseLeave} {...props}>
      {childrenWithProps}
    </StyledDropdown>
  );
};

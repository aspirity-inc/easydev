import { Children, cloneElement, isValidElement } from 'react';

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
  width,
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
    if (isValidElement(child)) {
      const childName = (child as any)?.type?.__docgenInfo.displayName;

      if (childName === 'Target') {
        return cloneElement(child, {
          ...child.props,
          ref: targetRef,
          onClick: toggleOpen,
          onMouseEnter: handleMouseEnter,
        });
      } else if (childName === 'Menu') {
        return cloneElement(child, {
          ...child.props,
          ref: menuRef,
          open: opened,
          position,
        });
      }
    }
  });

  return (
    <StyledDropdown
      className="easy_dropdown"
      ref={dropdownRef}
      onMouseLeave={handleMouseLeave}
      $width={width}
      {...props}
    >
      {childrenWithProps}
    </StyledDropdown>
  );
};

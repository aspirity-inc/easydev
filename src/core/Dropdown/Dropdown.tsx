import { Menu } from './components/Menu';
import { Target } from './components/Target';
import { useDropdownControl } from './hooks/useDropdownControl';
import { StyledDropdown } from './styles';
import type { DropdownProps } from './types';

export const Dropdown = ({
  open,
  onChangeOpen,
  disabled,
  position = 'bottom-left',
  trigger = 'click',
  targetTitle,
  target,
  content,
  dropdownTargetProps,
  dropdownMenuProps,
  ...props
}: DropdownProps) => {
  const { opened, handleMouseEnter, handleMouseLeave, toggleOpen, targetRef, menuRef, dropdownRef } =
    useDropdownControl({
      open,
      onChangeOpen,
      trigger,
      disabled,
    });

  return (
    <StyledDropdown className="easy_dropdown" ref={dropdownRef} onMouseLeave={handleMouseLeave} {...props}>
      <Target
        title={targetTitle}
        ref={targetRef}
        open={opened}
        disabled={disabled}
        onClick={toggleOpen}
        onMouseEnter={handleMouseEnter}
        {...dropdownTargetProps}
      >
        {target}
      </Target>
      <Menu ref={menuRef} open={opened} position={position} {...dropdownMenuProps}>
        {content}
      </Menu>
    </StyledDropdown>
  );
};

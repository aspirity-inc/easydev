import { forwardRef } from 'react';

import { StyledMenu, PositionWrapper } from './styles';
import type { MenuProps } from '../../types';

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ children, open, position, dropdownMenuPositionProps, ...props }, ref) => {
    return (
      <>
        {open && (
          <PositionWrapper
            className="easy_dropdown-menu-position"
            $position={position}
            ref={ref}
            {...dropdownMenuPositionProps}
          >
            <StyledMenu className="easy_dropdown-menu" {...props}>
              {children}
            </StyledMenu>
          </PositionWrapper>
        )}
      </>
    );
  }
);

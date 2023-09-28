import { forwardRef } from 'react';

import { StyledMenu } from './styles';
import type { MenuProps } from '../../types';

export const Menu = forwardRef<HTMLDivElement, MenuProps>(({ children, open, position, ...props }, ref) => {
  return (
    <>
      {open && (
        <StyledMenu className="easy_dropdown-menu" $position={position} {...props} ref={ref}>
          {children}
        </StyledMenu>
      )}
    </>
  );
});

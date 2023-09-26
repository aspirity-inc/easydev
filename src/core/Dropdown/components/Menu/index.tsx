import { forwardRef } from 'react';

import { StyledMenu } from './styles';
import type { MenuProps } from '../../types';

export const Menu = forwardRef<HTMLDivElement, MenuProps>(({ children, open, position, ...otherProps }, ref) => {
  return (
    <>
      {open && (
        <StyledMenu className="easy_dropdown-menu" $position={position} {...otherProps} ref={ref}>
          {children}
        </StyledMenu>
      )}
    </>
  );
});

import { forwardRef } from 'react';

import { TargetButton } from './TargetButton';
import { TargetProps } from '../../types';

export const Target = forwardRef<HTMLDivElement, TargetProps>(({ title, children, ...props }, ref) => {
  return title ? (
    <TargetButton ref={ref} {...props}>
      {title}
    </TargetButton>
  ) : (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
});

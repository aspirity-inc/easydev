import { useRef } from 'react';

import { AnimationWrapper, StyledPanel } from './styles';
import type { PanelProps } from '../../types';

export const Panel = ({ children, opened = false, variant, duration, ...props }: PanelProps) => {
  const panelRef = useRef<HTMLDivElement | null>(null);

  return (
    <AnimationWrapper
      className="easy_accordion-animation"
      $opened={opened}
      $height={panelRef.current?.offsetHeight}
      $duration={duration}
    >
      <StyledPanel
        className="easy_accordion-panel"
        ref={panelRef}
        $opened={opened}
        $variant={variant}
        $duration={duration}
        {...props}
      >
        {children}
      </StyledPanel>
    </AnimationWrapper>
  );
};

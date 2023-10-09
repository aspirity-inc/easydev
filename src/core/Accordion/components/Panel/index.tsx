import { useEffect, useRef, useState } from 'react';

import { AnimationWrapper, StyledPanel } from './styles';
import type { PanelProps } from '../../types';

export const Panel = ({ children, opened = false, variant, duration, ...props }: PanelProps) => {
  const [height, setHeight] = useState<number>(0);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setHeight(panelRef.current?.offsetHeight || 0);
  }, [opened]);

  return (
    <AnimationWrapper className="easy_accordion-animation" $opened={opened} $height={height} $duration={duration}>
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

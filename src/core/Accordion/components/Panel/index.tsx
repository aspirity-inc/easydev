import { useEffect, useRef, useState } from 'react';

import { AnimationWrapper, StyledPanel } from './styles';
import type { PanelProps } from '../../types';

export const Panel = ({
  children,
  opened,
  variant = 'filled',
  duration = 400,
  accordionAnimationProps,
  accordionPanelProps,
  ...props
}: PanelProps) => {
  const [height, setHeight] = useState(0);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setHeight(panelRef.current?.offsetHeight || 0);
  }, [opened]);

  return (
    <AnimationWrapper
      className="easy_accordion-animation"
      $opened={opened}
      $height={height}
      $duration={duration}
      data-testid={`easydev-opened-${opened}`}
      {...accordionAnimationProps}
    >
      <StyledPanel
        className="easy_accordion-panel"
        ref={panelRef}
        $opened={opened}
        $variant={variant}
        $duration={duration}
        {...accordionPanelProps}
        {...props}
      >
        {children}
      </StyledPanel>
    </AnimationWrapper>
  );
};

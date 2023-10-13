import type { MouseEvent } from 'react';

import { Dot } from './Dot';
import { StyledDots } from './styles';
import type { DotsProps } from '../../types';
import { Arrow } from '../Arrows/Arrow';

export const Dots = ({ currentSlide, withArrows, instanceRef, ...props }: DotsProps) => {
  if (!instanceRef.current) return null;

  const getLength = () => {
    let length = instanceRef.current?.track.details.slides.length;
    if (length) {
      const slides = instanceRef.current?.options.slides;
      let perView = 1;
      if (slides) {
        if (typeof slides === 'number') {
          perView = slides;
        } else if (typeof slides === 'object' && slides.perView && typeof slides.perView === 'number') {
          perView = slides?.perView;
        }
        length -= perView - 1;
      }
    }
    return length;
  };

  return (
    <StyledDots className="easy_carousel-dots" gap={8} {...props}>
      {withArrows && (
        <Arrow
          left
          type="withDots"
          onClick={(e: MouseEvent) => {
            e.stopPropagation();
            instanceRef.current?.prev();
          }}
        />
      )}
      {[...Array(getLength()).keys()].map((idx) => {
        return (
          <Dot
            key={idx}
            onClick={() => {
              instanceRef.current?.moveToIdx(idx);
            }}
            active={currentSlide === idx}
          />
        );
      })}
      {withArrows && (
        <Arrow
          type="withDots"
          onClick={(e: MouseEvent) => {
            e.stopPropagation();
            instanceRef.current?.next();
          }}
        />
      )}
    </StyledDots>
  );
};

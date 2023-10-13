import { MouseEvent } from 'react';

import { Arrow } from './Arrow';
import { StyledArrows } from './styles';
import type { ArrowsProps } from '../../types';

export const Arrows = ({ currentSlide, instanceRef, type, loop, ...props }: ArrowsProps) => {
  if (!instanceRef.current) return null;
  if (type === 'withDots') return null;

  const isDisabledLeft = () => {
    if (typeof loop === 'boolean' || !loop) {
      if (type === 'onTop') return false;

      return loop ? true : currentSlide === 0;
    }

    return true;
  };

  const isDisabledRight = () => {
    if (typeof loop === 'boolean' || !loop) {
      if (type === 'onTop') return false;

      const length = instanceRef.current?.track.details.slides.length;
      if (!length) return true;

      const slides = instanceRef.current?.options.slides;
      let perView = 1;
      if (slides) {
        if (typeof slides === 'number') {
          perView = slides;
        } else if (typeof slides === 'object' && slides.perView && typeof slides.perView === 'number') {
          perView = slides?.perView;
        }
      }

      return loop ? true : currentSlide === length - perView;
    }

    return true;
  };

  return (
    <StyledArrows className="easy_carousel-arrows" $type={type} {...props}>
      {!isDisabledLeft() && (
        <Arrow
          left
          onClick={(e: MouseEvent) => {
            e.stopPropagation();
            instanceRef.current?.prev();
          }}
          type={type}
        />
      )}

      {!isDisabledRight() && (
        <Arrow
          onClick={(e: MouseEvent) => {
            e.stopPropagation();
            instanceRef.current?.next();
          }}
          disabled={isDisabledRight()}
          type={type}
        />
      )}
    </StyledArrows>
  );
};

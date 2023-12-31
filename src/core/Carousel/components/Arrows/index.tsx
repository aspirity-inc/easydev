import { MouseEvent } from 'react';

import { Arrow } from './Arrow';
import { StyledArrows } from './styles';
import type { ArrowsProps } from '../../types';

export const Arrows = ({
  currentSlide,
  instanceRef,
  type,
  loop,
  icon,
  carouselArrowsProps,
  carouselArrowProps,
  defaultArrowIconProps,
  ...props
}: ArrowsProps) => {
  if (!instanceRef.current) return null;
  if (type === 'withDots') return null;

  const isDisabledLeft = () => {
    if (typeof loop === 'boolean' || !loop) {
      if (type === 'onTop') return false;

      return loop ? false : currentSlide === 0;
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

      return loop ? false : currentSlide === length - perView;
    }

    return true;
  };

  const handleClickArrow =
    (isLeftArrow = false) =>
    (e: MouseEvent) => {
      e.stopPropagation();
      isLeftArrow ? instanceRef.current?.prev() : instanceRef.current?.next();
    };

  return (
    <StyledArrows className="easy_carousel-arrows" $type={type} {...carouselArrowsProps} {...props}>
      {!isDisabledLeft() && <Arrow left onClick={handleClickArrow(true)} type={type} icon={icon} />}

      {!isDisabledRight() && (
        <Arrow
          onClick={handleClickArrow()}
          disabled={isDisabledRight()}
          type={type}
          icon={icon}
          carouselArrowProps={carouselArrowProps}
          defaultArrowIconProps={defaultArrowIconProps}
        />
      )}
    </StyledArrows>
  );
};

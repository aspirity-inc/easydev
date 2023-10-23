import type { MouseEvent } from 'react';

import { Dot } from './Dot';
import { StyledDots } from './styles';
import type { DotsProps } from '../../types';
import { Arrow } from '../Arrows/Arrow';

export const Dots = ({ currentSlide, withArrows, instanceRef, icons, arrowIcon, ...props }: DotsProps) => {
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

  const handleClickArrow =
    (isLeftArrow = false) =>
    (e: MouseEvent) => {
      e.stopPropagation();
      isLeftArrow ? instanceRef.current?.prev() : instanceRef.current?.next();
    };

  const handleClickDot = (index: number) => {
    instanceRef.current?.moveToIdx(index);
  };

  return (
    <StyledDots className="easy_carousel-dots" gap={8} {...props}>
      {withArrows && <Arrow left type="withDots" onClick={handleClickArrow(true)} icon={arrowIcon} />}
      {[...Array(getLength()).keys()].map((idx) => {
        return <Dot key={idx} onClick={() => handleClickDot(idx)} active={currentSlide === idx} icons={icons} />;
      })}
      {withArrows && <Arrow type="withDots" onClick={handleClickArrow()} icon={arrowIcon} />}
    </StyledDots>
  );
};

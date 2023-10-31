import { useEffect, useRef, useState } from 'react';

import 'keen-slider/keen-slider.min.css';
import { type KeenSliderHooks, type KeenSliderOptions, useKeenSlider } from 'keen-slider/react';

import { Flex } from '@core/Flex';

import { Arrows } from './components/Arrows';
import { Dots } from './components/Dots';
import { Thumbnails } from './components/Thumbnails';
import { ThumbnailPlugin } from './components/Thumbnails/ThumbnailPlugin';
import { CarouselInnerWrapper, CarouselWrapper, StyledCarousel, StyledSlide } from './styles';
import type { CarouselProps } from './types';

export const Carousel = ({
  title,
  items,
  arrows = true,
  arrowIcon,
  dots = true,
  dotIcons,
  thumbnails = false,
  arrowsType = 'center',
  keenSliderProps,
  thumbnailsProps,
  height,
  ...props
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderOptions, setSliderOptions] = useState<KeenSliderOptions<object, object, KeenSliderHooks>>({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    ...keenSliderProps,
  });
  const [thumbnailsOptions, setThumbnailsOptions] = useState<KeenSliderOptions<object, object, KeenSliderHooks>>({
    slides: {
      perView: 4,
      spacing: 24,
    },
    ...thumbnailsProps,
  });
  const [sliderRef, instanceRef] = useKeenSlider(sliderOptions);
  const [thumbnailRef, thumbnailInstanceRef] = useKeenSlider(thumbnailsOptions, [ThumbnailPlugin(instanceRef)]);

  //Refresh options for correct slide width calculation
  useEffect(() => {
    setSliderOptions({
      ...instanceRef.current?.options,
    });
    setThumbnailsOptions({
      ...thumbnailInstanceRef.current?.options,
    });
    thumbnailInstanceRef.current?.update();
  }, [instanceRef, thumbnailInstanceRef, thumbnails]);

  //Update slider for dynamic width container
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const wrapperElement = wrapperRef.current;
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      instanceRef.current?.update();
      thumbnailInstanceRef.current?.update();
    });

    if (wrapperElement) {
      resizeObserver.observe(wrapperElement);
    }

    return () => {
      if (wrapperElement) {
        resizeObserver.unobserve(wrapperElement);
      }
    };
  }, [instanceRef, thumbnailInstanceRef, wrapperElement]);

  return (
    <CarouselWrapper className="easy_carousel-wrapper" align="center" direction="column" {...props}>
      <CarouselInnerWrapper className="easy_carousel-inner-wrapper" ref={wrapperRef}>
        <Flex justify="space-between" align="flex-start" className="easy_carousel-top-title-arrows">
          {title}
          {arrows && (
            <Arrows
              currentSlide={currentSlide}
              instanceRef={instanceRef}
              type={arrowsType}
              icon={arrowIcon}
              loop={keenSliderProps?.loop}
            />
          )}
        </Flex>

        <StyledCarousel ref={sliderRef} className="easy_carousel keen-slider" $height={height}>
          {items.map((item, index) => (
            <StyledSlide key={index} className="easy_carousel-slide keen-slider__slide">
              {item}
            </StyledSlide>
          ))}
        </StyledCarousel>
      </CarouselInnerWrapper>

      {!thumbnails && dots && (
        <Dots
          currentSlide={currentSlide}
          instanceRef={instanceRef}
          withArrows={arrowsType === 'withDots'}
          icons={dotIcons}
          arrowIcon={arrowIcon}
        />
      )}

      {thumbnails && <Thumbnails items={items} thumbnailRef={thumbnailRef} />}
    </CarouselWrapper>
  );
};

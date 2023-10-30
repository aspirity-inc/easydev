import { StyledThumbnails, StyledThumbnail } from './styles';
import type { ThumbnailsProps } from '../../types';

export const Thumbnails = ({ items, thumbnailRef, ...props }: ThumbnailsProps) => {
  return (
    <StyledThumbnails ref={thumbnailRef} className="easy_carousel-thumbnails keen-slider" {...props}>
      {items.map((item, index) => (
        <StyledThumbnail key={index} className="easy_carousel-thumbnail keen-slider__slide">
          {item}
        </StyledThumbnail>
      ))}
    </StyledThumbnails>
  );
};

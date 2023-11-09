import {
  Button,
  Flex,
  Subtitle,
  Text,
  Title,
  Carousel,
} from '@aspirity/easydev';
import { Wrapper, StyledBadge, StyledSlide, StyledImage } from './styles';
import { ReactNode } from 'react';
import 'keen-slider/keen-slider.min.css';

import { slides } from '@src/assets/data/recommendations';

export const RecommendationCarousel = () => {
  const items: ReactNode[] = slides.map((slide) => (
    <StyledSlide key={slide.id} direction="column" gap={24}>
      <StyledImage src={slide.img} className="rounded-[8px] w-full" />
      {slide.sale && <StyledBadge>SALE</StyledBadge>}
      <Flex justify="space-between" align="center" className="w-full">
        <Flex direction="column" gap={8} align="flex-start">
          <Text variant="body1">{slide.title}</Text>
          <Subtitle level={3}>$ {slide.price}</Subtitle>
        </Flex>
        <Button
          rounded="sm"
          style={{ minWidth: 0, padding: 12 }}
          icon={
            <span className="material-symbols-outlined">shopping_cart</span>
          }
        />
      </Flex>
    </StyledSlide>
  ));

  return (
    <Wrapper style={{ marginBottom: 72 }}>
      <Carousel
        title={<Title variant="h3">You may be interested</Title>}
        arrowsType="onTop"
        dots={false}
        items={items}
        keenSliderProps={{
          slides: {
            perView: 4,
            spacing: 24,
          },
        }}
      />
    </Wrapper>
  );
};

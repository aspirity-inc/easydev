import { Button, Flex, Subtitle, Text, Title, Carousel } from '@aspirity/easydev';
import { Wrapper, StyledBadge, StyledSlide, StyledImage } from './styles';
import { ReactNode } from 'react';
import 'keen-slider/keen-slider.min.css';

import { slides } from '@src/assets/data/recommendations';

export const RecommendationCarousel = () => {
  const items: ReactNode[] = slides.map((slide) => (
    <StyledSlide key={slide.id} direction="column" gap={24}>
      <StyledImage src={slide.img} style={{ width: '100%', borderRadius: 8 }} />
      {slide.sale && <StyledBadge>SALE</StyledBadge>}
      <Flex justify="space-between" align="center" style={{ width: '100%' }}>
        <Flex direction="column" gap={8} align="flex-start">
          <Text variant="body1">{slide.title}</Text>
          <Subtitle level={3}>$ {slide.price}</Subtitle>
        </Flex>
        <Button
          rounded="sm"
          style={{ minWidth: 0, padding: 12 }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
            </svg>
          }
        />
      </Flex>
    </StyledSlide>
  ));

  return (
    <Wrapper style={{ marginBottom: 72, width: 1020 }}>
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

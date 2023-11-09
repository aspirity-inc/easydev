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
import { slides } from '@src/assets/data/sliderData';

export const PromptCarousel = () => {
  const items: ReactNode[] = slides.map((slide) => (
    <StyledSlide key={slide.id} direction="column" gap={24}>
      <StyledImage src={slide.img} style={{ borderRadius: 8, width: '100%' }} />
      {slide.sale && <StyledBadge>SALE</StyledBadge>}
      <Flex
        justify="space-between"
        align="center"
        className="w-full"
        style={{ width: '100%' }}
      >
        <Flex direction="column" gap={8} align="flex-start">
          <Text variant="body1">{slide.title}</Text>
          <Subtitle level={3}>$ {slide.price}</Subtitle>
        </Flex>
        <Button
          rounded="sm"
          style={{ minWidth: 0, padding: 12 }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
            </svg>
          }
        />
      </Flex>
    </StyledSlide>
  ));

  return (
    <Wrapper style={{ marginBottom: 72 }}>
      <Carousel
        title={<Title variant="h3">Prompt for me</Title>}
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

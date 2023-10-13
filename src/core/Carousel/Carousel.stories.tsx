import type { ReactNode } from 'react';

import { styled } from 'styled-components';

import { Carousel } from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Core/Carousel',
  component: Carousel,
} satisfies Meta<typeof Carousel>;

const Slide = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  background-color: #5f7ffe;
`;

const Template: StoryFn<typeof Carousel> = ({ ...args }) => {
  const items: ReactNode[] = [...Array(6).keys()].map((index) => <Slide key={index}>{index + 1}</Slide>);

  return <Carousel {...args} items={items} height={200} />;
};

export const DefaultCarousel: StoryFn<typeof Carousel> = Template.bind({});
DefaultCarousel.args = {};

export const TwoSlidesCarousel: StoryFn<typeof Carousel> = Template.bind({});
TwoSlidesCarousel.args = {
  keenSliderProps: {
    slides: {
      perView: 2,
      spacing: 24,
    },
  },
};

export const ThumbnailsCarousel: StoryFn<typeof Carousel> = Template.bind({});
ThumbnailsCarousel.args = {
  thumbnails: true,
};

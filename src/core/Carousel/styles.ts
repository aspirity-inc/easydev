import { styled } from 'styled-components';

import { Box } from '@core/Box';
import { Flex } from '@core/Flex';

import type { StyledCarouselProps } from './types';

export const CarouselWrapper = styled(Flex)`
  width: 100%;
  overflow: hidden;
`;

export const CarouselInnerWrapper = styled(Box)`
  width: 100%;
  position: relative;
`;

export const StyledCarousel = styled(Box)<StyledCarouselProps>`
  border-radius: 8px;
  height: ${({ $height }) => ($height ? `${$height}px` : 'auto')};
`;

export const StyledSlide = styled(Box)`
  border-radius: 8px;
  max-height: 100vh;
`;

import { styled } from 'styled-components';

import { Box } from '@core/Box';

export const CarouselInnerWrapper = styled(Box)`
  width: 100%;
  position: relative;
`;

export const StyledCarousel = styled(Box)<{ $height?: number }>`
  border-radius: 8px;
  height: ${({ $height }) => ($height ? `${$height}px` : 'auto')};
`;

export const StyledSlide = styled(Box)`
  border-radius: 8px;
  max-height: 100vh;
`;

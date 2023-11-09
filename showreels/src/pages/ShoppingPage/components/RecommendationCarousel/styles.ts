import { Flex, Badge } from '@aspirity/easydev';
import styled from 'styled-components';

export const Wrapper = styled('section')`
  & .easy_carousel {
    overflow: visible !important;
  }
`;

export const StyledBadge = styled(Badge)`
  padding: 8px 16px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.error[400]};
  color: ${({ theme }) => theme.colors.surface[50]};
  border-radius: 4px;

  position: absolute;
  top: 24px;
  left: 16px;
`;

export const StyledSlide = styled(Flex)`
  position: relative;
`;

export const StyledImage = styled('img')`
  width: 100%;
  height: 320px;
  object-fit: cover;
`;

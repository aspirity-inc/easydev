import { css, styled } from 'styled-components';

import { Box } from '@core/Box';
import { getTextVariants } from '@core/Typography/Text/styles';

import type { AnimationPanelProps, StyledControlProps } from '../../types';

export const AnimationWrapper = styled(Box)<AnimationPanelProps>`
  --duration: ${({ $duration }) => $duration}ms;

  height: 0;
  overflow: hidden;
  transition: height var(--duration) ease;
  border-bottom: 1px solid
    ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['600'])};

  ${({ $opened, $height }) =>
    $opened &&
    css`
      height: ${$height}px;
    `}
`;

export const StyledPanel = styled(Box)<StyledControlProps>`
  height: auto;
  box-sizing: border-box;
  padding: 4px 16px 16px 16px;

  ${getTextVariants('body3')};
  font-family: inherit;
  line-height: 1.2;
  font-weight: 186;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};

  ${({ $variant }) => ($variant === 'filled' ? getFilledStyles() : getBorderedStyles())}
`;

const getFilledStyles = () => {
  return css`
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['800']};
  `;
};

const getBorderedStyles = () => {
  return css`
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900']};
  `;
};

import { styled } from 'styled-components';

import { Text } from '@core/Typography';

import type { TooltipType } from './types.ts';
import { colors } from '../styles.ts';

export const TooltipTail = styled('span')`
  display: block;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.secondary['900']};
  text-align: left;
  bottom: -2px;
  left: 55%;
  width: 10px;
  height: 10px;
  border-top-right-radius: 30%;
  transform: rotate(0deg) skewX(-26deg) scale(1, 0.866) translateX(-50%);
  z-index: -1;

  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: inherit;
    width: 10px;
    height: 10px;
    border-top-right-radius: 30%;
  }

  &:before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%);
  }

  &:after {
    transform: rotate(135deg) skewY(-40deg) scale(0.707, 1.414) translate(50%);
  }
`;

export const Tooltip = styled(Text)<TooltipType>`
  display: block;
  position: absolute;
  top: -33px;
  max-width: 45px;
  width: 100%;
  padding: 4px;
  text-align: center;
  opacity: ${({ tooltipShown }) => (tooltipShown === 'onHover' ? 0 : 1)};
  color: ${({ theme }) => theme.colors.surface['50']};
  background-color: ${({ theme }) => theme.colors.secondary['900']};
  border-radius: ${({ theme }) => theme.spacing.borderRadius.small}px;
  transform: translateX(-50%);
  transition: opacity ${({ theme }) => theme.transition.default};
  z-index: 2;
  pointer-events: none;
`;

export const StyledProgress = styled('input')<{ progress: number }>`
  ${colors};

  --progressValue: ${({ progress }) => progress}%;
  --thumbBg: var(--progressBgColor);

  position: relative;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  height: 6px;
  background: linear-gradient(
    to right,
    var(--progressColor) var(--progressValue),
    var(--progressBgColor) var(--progressValue)
  );

  &::-webkit-slider-thumb {
    appearance: none;
    height: 20px;
    width: 20px;
    background: var(--thumbBg);
    border: 4px solid ${({ theme }) => theme.colors.secondary['500']};
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    height: 20px;
    width: 20px;
    background: var(--thumbBg);
    border: 4px solid ${({ theme }) => theme.colors.secondary['500']};
    border-radius: 50%;
  }
`;

export const RangeWrap = styled('div')`
  margin-top: 35px;
  position: relative;

  &:has(.easy_range:hover) {
    .easy_tooltip {
      opacity: 1;
    }
  }
`;

import { css, styled } from 'styled-components';

import { Subtitle } from '@core/Typography';

export type ProgressBarType = {
  value: number;
  bgColor?: string;
  progressColor?: string;
};

export type ProgressBarWrapType = {
  $label?: boolean;
  color?: string;
};

export const StyledProgressBar = styled('div')<ProgressBarType>`
  --bgColor: ${({ theme }) => (theme.type === 'light' ? theme.colors.secondary['200'] : theme.colors.surface['700'])};
  --progressBgColor: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.secondary['500'] : theme.colors.secondary['400']};

  position: relative;
  width: 100%;
  height: 10px;
  background-color: ${({ bgColor }) => bgColor || 'var(--bgColor)'};
  border-radius: 10px;
  overflow: hidden;

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: -100%;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${({ progressColor }) => progressColor || 'var(--progressBgColor)'};
    border-radius: 10px;
    transform-origin: left;
    transition: transform ${({ theme }) => theme.transition.default};
    transform: translate(${({ value }) => value}%);
  }
`;

export const StyledValue = styled(Subtitle)`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  color: inherit;
`;
export const ProgressBarWrap = styled('div')<ProgressBarWrapType>`
  --color: ${({ theme }) => (theme.type === 'light' ? theme.colors.secondary['900'] : theme.colors.secondary['200'])};

  position: relative;
  color: ${({ color }) => color || 'var(--color)'};

  ${({ $label }) =>
    $label &&
    css`
      margin-top: 20px;
    `}
`;

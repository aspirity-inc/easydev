import { css, styled } from 'styled-components';

import { ProgressBarTypeBase } from './types.ts';

export const colors = css`
  --progressColor: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.secondary['500'] : theme.colors.secondary['400']};
  --progressBgColor: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.secondary['200'] : theme.colors.surface['700']};
`;

export const StyledProgressBarBase = styled('div')<ProgressBarTypeBase>`
  ${colors};

  position: relative;
  width: 100%;
  height: 10px;
  background-color: ${({ $progressBackground }) => $progressBackground || 'var(--progressBgColor)'};
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
    background-color: ${({ $progressColor }) => $progressColor || 'var(--progressColor)'};
    border-radius: 10px;
    transform-origin: left;
    transition: transform ${({ theme }) => theme.transition.default};
    transform: translate(${({ value }) => value}%);
  }
`;

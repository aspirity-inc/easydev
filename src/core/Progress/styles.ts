import { styled } from 'styled-components';

import { ProgressBarType } from './ProgressBar/styles.ts';

export const StyledProgressBar = styled('div')<ProgressBarType>`
  --bgColor: ${({ theme }) => (theme.type === 'light' ? theme.colors.secondary['200'] : theme.colors.surface['700'])};
  --progressBgColor: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.secondary['500'] : theme.colors.secondary['400']};

  position: relative;
  width: 100%;
  height: 10px;
  background-color: var(--bgColor);
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
    background-color: var(--progressBgColor);
    border-radius: 10px;
    transform-origin: left;
    transition: transform ${({ theme }) => theme.transition.default};
    transform: translate(${({ value }) => value}%);
  }
`;
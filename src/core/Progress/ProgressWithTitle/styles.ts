import { styled } from 'styled-components';

import { Subtitle } from '@core/Typography';

import { colors, StyledProgressBar } from '../styles.ts';

export const StyledProgress = styled(StyledProgressBar)`
  height: 5px;
  border-radius: 0;
  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.secondary['200'] : theme.colors.surface['500']};

  &:after {
    border-radius: 0;
  }
`;

export const StyledProgressInfo = styled(Subtitle)`
  ${colors};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 19px;
  padding: 20px 20px 15px;
  border-top-left-radius: ${({ theme }) => theme.spacing.borderRadius.medium}px;
  border-top-right-radius: ${({ theme }) => theme.spacing.borderRadius.medium}px;
  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};

  > span:first-of-type {
    color: var(--progressColor);
  }
`;

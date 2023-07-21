import { styled } from 'styled-components';

import { Subtitle } from '@core/Typography';

import { StyledProgressBar } from '../styles.ts';

export const StyledProgress = styled(StyledProgressBar)`
  height: 5px;
  border-radius: 0;

  &:after {
    border-radius: 0;
  }
`;

export const StyledProgressInfo = styled(Subtitle)`
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
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.secondary['500'] : theme.colors.secondary['400'])};
  }
`;

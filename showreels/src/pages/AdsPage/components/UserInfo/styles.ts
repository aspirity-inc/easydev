import { Subtitle } from '@aspirity/easydev';
import { styled } from 'styled-components';

export const StyledProgressInfo = styled(Subtitle)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  margin-top: 24px;

  > span:last-of-type {
    color: ${({ theme }) => (theme.type === 'light' ? 'black' : 'white')};
  }
`;

export const StyledProgressBar = styled('div')`
  & .easy_progress--titleWrap {
    margin: 0;
  }
`;

export const StyledProgressNumber = styled(Subtitle)`
  color: ${({ theme }) =>
    theme.type === 'light'
      ? theme.colors.secondary['800']
      : theme.colors.secondary['300']};
`;
export const StyledProgressTitle = styled(Subtitle)`
  color: ${({ theme }) =>
    theme.type === 'light'
      ? theme.colors.surface['900']
      : theme.colors.surface['50']};
`;

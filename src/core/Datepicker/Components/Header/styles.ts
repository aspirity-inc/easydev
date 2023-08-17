import { styled } from 'styled-components';

import { getSubtitleLevelStyles } from '@core/Typography/Subtitle/styles';

export const StyledArrowButton = styled('button')`
  display: flex;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['400'])};
  cursor: pointer;
`;

export const StyledHeader = styled('div')`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['100'])};
  ${getSubtitleLevelStyles(3)}
  font-family: inherit;
`;

export const StyledSelectedButton = styled('button')`
  display: flex;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['100'])};

  ${getSubtitleLevelStyles(3)}
  font-family: inherit;
  cursor: pointer;
`;

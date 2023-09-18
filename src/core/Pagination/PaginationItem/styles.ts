import { css, styled } from 'styled-components';

import { Flex } from '@core/Flex';
import { getSubtitleLevelStyles } from '@core/Typography/Subtitle/styles';

export const StyledPaginationItem = styled(Flex)<{ $active: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid transparent;

  ${getSubtitleLevelStyles(5)}
  font-family: inherit;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['600'] : theme.colors.surface['300'])};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.primary['600'] : theme.colors.primary['500']};
  }

  ${({ $active }) =>
    $active &&
    css`
      color: ${({ theme }) => theme.colors.surface['900']};
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.primary['600'] : theme.colors.primary['500']};
    `}
`;

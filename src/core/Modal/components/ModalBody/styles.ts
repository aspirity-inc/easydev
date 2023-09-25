import { css, styled } from 'styled-components';

import { Box } from '@core/Box';
import { Text, Title } from '@core/Typography';

export const StyledModalBody = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
`;

export const StyledTitle = styled(Title)`
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.secondary['50'])};
`;

export type StyledModalTextProps = {
  centered?: boolean;
};

export const StyledText = styled(Text)<StyledModalTextProps>`
  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
    `}

  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['800'] : theme.colors.surface['200'])};
`;

export const StyledImage = styled(Box)``;

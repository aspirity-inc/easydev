import { css, styled } from 'styled-components';

import { Text, Title } from '@core/Typography';

import { StyledModalContentProps } from '../../styles';

export const StyledModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
`;

export const StyledTitle = styled(Title)<StyledModalContentProps>`
  --monochrome: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.secondary['50'])};

  color: var(--monochrome);
`;

export type StyledModalTextProps = {
  centered?: boolean;
};

export const StyledText = styled(Text)<StyledModalTextProps>`
  --monochrome: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['800'] : theme.colors.surface['200'])};

  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
    `}

  color: var(--monochrome);
`;

export const StyledImage = styled.div``;

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
  --colorful: ${({ theme }) => theme.colors.surface['900']};

  ${({ $colorful }) =>
    $colorful
      ? css`
          color: var(--colorful);
        `
      : css`
          color: var(--monochrome);
        `};
`;

export const StyledText = styled(Text)<StyledModalContentProps>`
  --monochrome: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['800'] : theme.colors.surface['200'])};
  --colorful: ${({ theme }) => theme.colors.surface['800']};

  ${({ $colorful }) =>
    $colorful
      ? css`
          color: var(--colorful);
        `
      : css`
          color: var(--monochrome);
        `};
`;

export const StyledImage = styled.div``;

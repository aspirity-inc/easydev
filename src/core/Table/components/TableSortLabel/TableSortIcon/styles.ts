import { styled, css } from 'styled-components';

export const StyledIcon = styled('div')<{ $order: string }>`
  display: block;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.secondary['50'])};
  ${({ $order }) => {
    return (
      $order === 'desc' &&
      css`
        transform: rotate(180deg);
      `
    );
  }}
`;

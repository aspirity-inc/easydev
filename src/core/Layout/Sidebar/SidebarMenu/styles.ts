import { css, styled } from 'styled-components';

import { Box } from '@core/Box';
import { getTextVariants } from '@core/Typography/Text/styles';

export const StyledMenu = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledIcon = styled(Box)`
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['200'])};
  transition: color ${({ theme }) => theme.transition.default};

  & .material-symbols-outlined {
    display: block;
  }
`;

export const getCommonMenuItemStyles = ($disabled: boolean) => {
  return css`
    --transition: ${({ theme }) => theme.transition.default};

    width: 100%;
    min-height: 40px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${getTextVariants('body2')};
    font-weight: 175;
    border-radius: 8px;
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['200'])};
    white-space: nowrap;
    transition: background-color var(--transition), color var(--transition);

    &:hover:not([disabled]) {
      cursor: pointer;
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['100'])};

      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.surface['200'] : theme.colors.surface['900']};

      & ${StyledIcon} {
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['100'])};
      }
    }

    ${$disabled &&
    css`
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['500'])};
      pointer-events: none;
      & ${StyledIcon} {
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['500'])};
      }
    `}
  `;
};

import { css, styled } from 'styled-components';

import { Subtitle } from '@core/Typography';

export type StyledTabPropsType = {
  disabled?: boolean;
};

export const StyledSubtitle = styled(Subtitle)``;

export const StyledTab = styled('button')<StyledTabPropsType>`
  --defaultBorderColor: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['700']};
  --activeBorderColor: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.tretiary['600'] : theme.colors.tretiary['300']};

  padding: 14px 24px;
  margin: 0;

  border: 0;
  border-bottom: 2px solid var(--defaultBorderColor);

  background-color: transparent;
  cursor: pointer;

  ${StyledSubtitle} {
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['100'])};
  }

  &:hover {
    ${StyledSubtitle} {
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['50'])};
    }
  }

  &.active {
    border-bottom-color: var(--activeBorderColor);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      ${StyledSubtitle} {
        color: ${({ theme }) => theme.colors.surface['500']};
      }

      cursor: default;
      pointer-events: none;
    `}
`;

export const TabButtonsList = styled('ul')`
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  list-style: none;
`;

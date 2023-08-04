import { css, styled } from 'styled-components';

import { getTextVariants } from '@core/Typography/Text/styles.ts';

import { defaultCssVars } from '../styles.ts';

export const buttonResetCss = css`
  appearance: none;
  background: none;
  padding: 0;
  border: none;
`;

export const StyledOption = styled('div')`
  .easy-option--highlight {
    background: none;
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.tretiary['600'] : theme.colors.primary['300'])};
  }
`;

export const StyledSearchValue = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const MultivalueWrapper = styled('div')`
  margin-top: 16px;
`;

export const ClearValues = styled('button')`
  ${buttonResetCss};
  display: block;
  width: fit-content;
  margin-left: auto;
  margin-right: 2px;
  cursor: pointer;
  ${getTextVariants('body3')};
  font-family: inherit;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['800'] : theme.colors.surface['200'])};
`;

export const MultivalueContainer = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;
  gap: 16px 5px;
`;

export const Multivalue = styled('div')`
  ${defaultCssVars};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['800']};
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
  border-radius: 12px;
  ${getTextVariants('body2')};
  cursor: default;
  transition: var(--transition);

  &:hover {
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.tretiary['200'] : theme.colors.secondary['50']};
    ${({ theme }) => theme.shadows.violet_light};
  }

  .icon {
    pointer-events: all;
    cursor: pointer;
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['400'])};
  }
`;

export const RemoveValueButton = styled('button')`
  ${buttonResetCss};
`;

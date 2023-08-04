import { css, styled } from 'styled-components';

import { scrollbarStyles } from '@core/Theme';
import { getTextVariants } from '@core/Typography/Text/styles.ts';

export type SelectType = {
  $rounded?: boolean;
};

const buttonResetCss = css`
  appearance: none;
  background: none;
  padding: 0;
  border: none;
`;

const defaultCssVars = css`
  --transitionTiming: ${({ theme }) => theme.transition.default};
  --transition: color var(--transitionTiming), background-color var(--transitionTiming),
    box-shadow var(--transitionTiming);
`;

export const StyledSelectWrap = styled('div')<SelectType>`
  ${defaultCssVars};

  .react-select {
    &__control {
      position: relative;
      height: 56px;
      padding: 0 16px;
      ${getTextVariants('body2')};
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['800']};
      border: 1px solid transparent;
      border-radius: ${({ theme }) => theme.spacing.borderRadius.medium}px;
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
      transition: var(--transition);
      z-index: 2;

      &:hover {
        cursor: pointer;
      }

      &:hover,
      &:active,
      &:focus-within,
      &:has(.react-select__value-container--has-value) {
        background-color: ${({ theme }) =>
          theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
        ${({ theme }) => theme.shadows.blue};
        border-color: ${({ theme }) =>
          theme.type === 'light' ? theme.colors.secondary['300'] : theme.colors.secondary['100']};
      }

      .icon-indicator {
        transition: transform var(--transitionTiming);
        color: inherit;
      }

      &--menu-is-open {
        .icon-indicator,
        .react-select__dropdown-indicator {
          transform: rotate(90deg);
        }
      }

      &--is-disabled {
        opacity: 0.5;
      }

      ${({ $rounded }) =>
        $rounded &&
        css`
          border-radius: 40px;
          background-color: ${({ theme }) =>
            theme.type === 'light' ? theme.colors.surface['200'] : theme.colors.surface['800']};

          &:hover,
          &:active,
          &:focus-within,
          &:has(.react-select__value-container--has-value) {
            background-color: ${({ theme }) =>
              theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
            ${({ theme }) => theme.shadows.violet_light};
            border-color: transparent;
          }
        `}
    }

    &__placeholder {
      ${getTextVariants('body2')};
      color: inherit;
    }

    &__indicator-separator {
      display: none;
    }

    &__menu {
      margin-top: 8px;
      border: 1px solid
        ${({ theme }) => (theme.type === 'light' ? theme.colors.secondary['100'] : theme.colors.surface['600'])};
      border-radius: ${({ theme }) => theme.spacing.borderRadius.medium}px;
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
      overflow: hidden;

      &-list {
        ${scrollbarStyles};
        scrollbar-gutter: stable;
      }

      &-notice--no-options {
        padding: 0 16px;
        text-align: left;
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['100'])};
        ${getTextVariants('caption')};
      }

      &:has(.react-select__menu-notice--no-options) {
        border: 1px solid transparent;
      }
    }

    &__option {
      height: 56px;
      padding: 0 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      ${getTextVariants('body2')};
      color: inherit;
      transition: var(--transition);

      .icon {
        display: none;
      }

      &--is-selected {
        .icon {
          display: block;
          color: ${({ theme }) =>
            theme.type === 'light' ? theme.colors.secondary['700'] : theme.colors.secondary['100']};
          transition: var(--transition);
        }

        &:hover {
          .icon {
            color: inherit;
          }
        }
      }

      &--is-disabled {
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['500'])};
        pointer-events: none;
      }

      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) =>
          theme.type === 'light' ? theme.colors.secondary['100'] : theme.colors.surface['400']};
      }
    }

    ${({ $rounded }) =>
      $rounded &&
      css`
        &__menu {
          margin-top: 16px;
          border-radius: 20px;
          overflow: hidden;
        }

        &__option {
          border: none;

          &:hover {
            cursor: pointer;
            background-color: ${({ theme }) =>
              theme.type === 'light' ? theme.colors.tretiary['100'] : theme.colors.surface['700']};
          }
        }
      `}
  }
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

export const OptionContentWrapper = styled('div')`
  width: 100%;
  position: relative;
`;
export const HighlightValue = styled('span')`
  position: absolute;
  left: 0;
  top: 0;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.tretiary['600'] : theme.colors.primary['300'])};
`;

export const StyledSearchValue = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

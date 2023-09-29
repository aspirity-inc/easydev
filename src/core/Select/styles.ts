import { css, styled } from 'styled-components';

import { scrollbarStyles } from '@core/Theme';
import { getTextVariants } from '@core/Typography/Text/styles';

import type { StyledSelectType } from './types';

export const defaultCssVars = css`
  --transitionTiming: ${({ theme }) => theme.transition.default};
  --transition: color var(--transitionTiming), background-color var(--transitionTiming),
    box-shadow var(--transitionTiming), border-color var(--transitionTiming);
`;

export const StyledSelectWrap = styled('div')<StyledSelectType>`
  ${defaultCssVars};

  .react-select {
    &__control {
      position: relative;
      height: 56px;
      padding: 0 16px;
      ${getTextVariants('body2')};
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900']};
      border: 1px solid ${({ theme }) => theme.colors.surface['400']};
      border-radius: ${({ theme }) => theme.spacing.borderRadius.medium}px;
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
      transition: var(--transition);
      z-index: 2;
      gap: 6px;

      &:hover {
        cursor: pointer;
      }

      &:hover,
      &:active,
      &:focus-within {
        ${({ theme }) => theme.shadows.blue};
        border-color: ${({ theme }) =>
          theme.type === 'light' ? theme.colors.secondary['300'] : theme.colors.secondary['100']};
      }
      &:has(.react-select__value-container--has-value) {
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

      &--is-disabled,
      &--is-disabled:has(.react-select__value-container--has-value) {
        color: ${({ theme }) => theme.colors.surface['500']};
        border: 1px solid ${({ theme }) => theme.colors.surface['400']};
        pointer-events: none;
      }

      ${({ $rounded }) =>
        $rounded &&
        css`
          border-radius: 40px;
          background-color: ${({ theme }) =>
            theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900']};

          &:hover,
          &:active,
          &:focus-within {
            border-color: ${({ theme }) =>
              theme.type === 'light' ? theme.colors.tretiary['50'] : theme.colors.tretiary['700']};
            ${({ theme }) => theme.shadows.violet_light};
          }
          &:has(.react-select__value-container--has-value) {
            border-color: ${({ theme }) =>
              theme.type === 'light' ? theme.colors.tretiary['50'] : theme.colors.tretiary['700']};
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

      &-notice--loading {
        padding: 16px;
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['100'])};
        ${getTextVariants('caption')};
      }

      &:has(.react-select__menu-notice--no-options) {
        border: 1px solid transparent;
      }

      ${({ $rounded }) =>
        $rounded &&
        css`
          border-color: ${({ theme }) =>
            theme.type === 'light' ? theme.colors.tretiary['50'] : theme.colors.tretiary['700']};
        `}
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
      }

      &--is-disabled {
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['500'])};
        pointer-events: none;
      }

      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) =>
          theme.type === 'light' ? theme.colors.surface['200'] : theme.colors.surface['900']};
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

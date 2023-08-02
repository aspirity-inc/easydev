import { css, styled } from 'styled-components';

import { scrollbarStyles } from '@core/Theme';
import { getTextVariants } from '@core/Typography/Text/styles.ts';

export type SelectType = {
  $rounded?: boolean;
};

export const StyledSelectWrap = styled('div')<SelectType>`
  --transitionTiming: ${({ theme }) => theme.transition.default};
  --transition: color var(--transitionTiming), background-color var(--transitionTiming),
    box-shadow var(--transitionTiming);

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
          transform: rotate(180deg);
        }
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
        padding-left: 16px;
        text-align: left;
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['100'])};
        ${getTextVariants('caption')};
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

export const StyledFilters = styled('div')`
  margin-top: 32px;
  padding-bottom: 2px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  flex-wrap: nowrap;
  overflow-x: auto;

  ${scrollbarStyles};
  &::-webkit-scrollbar {
    height: 4px;
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
  }
`;

export const StyledMultivalueContainer = styled('div')`
  > div {
    margin-top: 16px;
    gap: 16px;
    pointer-events: none;
    display: flex;
    flex-direction: column-reverse;
  }

  .react-select {
    &__indicators {
      margin-left: auto;
      pointer-events: all;
      cursor: pointer;

      .react-select__dropdown-indicator {
        display: none;
      }
    }

    &__value-container--is-multi {
      pointer-events: none;
      gap: 16px 5px;
    }

    &__multi-value {
      padding: 10px 16px;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['800']};
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
      border-radius: 12px;
      ${getTextVariants('body2')};

      .icon {
        pointer-events: all;
        cursor: pointer;
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['400'])};
      }
    }

    &__placeholder {
      display: none;
    }
  }
`;
export const StyledClearIndicator = styled('span')`
  ${getTextVariants('body3')};
`;

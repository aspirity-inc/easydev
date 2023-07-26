import { css, styled } from 'styled-components';

import { scrollbarStyles } from '@core/Theme';
import { getTextVariants } from '@core/Typography/Text/styles.ts';

type SelectWrapType = {
  $menuHeight?: number;
};

export const StyledSelectWrap = styled('div')<SelectWrapType>`
  --transitionTiming: ${({ theme }) => theme.transition.default};
  --transition: color var(--transitionTiming), background-color var(--transitionTiming),
    box-shadow var(--transitionTiming);

  .react-select {
    &__control {
      position: relative;
      height: 56px;
      padding: 0 16px;
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['800']};
      border-radius: ${({ theme }) => theme.spacing.borderRadius.medium}px;
      border-color: transparent;
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
        .icon-indicator {
          transform: rotate(180deg);
        }
      }
    }

    &__placeholder {
      ${getTextVariants('body2')};
      color: inherit;
    }

    &__indicator-separator {
      display: none;
    }

    &__menu {
      margin-top: -4px;

      &-list {
        ${scrollbarStyles};
        ${({ $menuHeight }) =>
          $menuHeight &&
          css`
            max-height: ${$menuHeight}px;
            scrollbar-gutter: stable;
            overflow-y: auto;
            overflow-x: hidden;
          `}
      }
    }

    &__option {
      height: 56px;
      padding: 0 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid
        ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['500'])};
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
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
            theme.type === 'light' ? theme.colors.secondary['500'] : theme.colors.secondary['100']};
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
          theme.type === 'light' ? theme.colors.secondary['200'] : theme.colors.secondary['100']};
      }
    }
  }
`;

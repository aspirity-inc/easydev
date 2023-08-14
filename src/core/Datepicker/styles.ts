import { styled } from 'styled-components';

import { getSubtitleLevelStyles } from '@core/Typography/Subtitle/styles';
import { getTextVariants } from '@core/Typography/Text/styles';

export const DatepickerWrapper = styled('div')`
  & .react-datepicker {
    width: 368px;
    padding: 8px 16px;
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
    border: none;
    ${({ theme }) => theme.shadows.gray};
    font-family: inherit;

    &__triangle {
      display: none;
    }

    &__header {
      padding: 0;
      background-color: transparent;
      border: none;
    }

    &__week {
      display: flex;
    }

    &__children-container {
      width: 100%;
    }
  }

  & .react-datepicker__month {
    margin: 0;

    &-container {
      width: 100%;
    }

    &-wrapper {
      display: flex;
      margin-top: 22px;
    }

    &-wrapper:last-child {
      margin-bottom: 22px;
    }
  }

  & .react-datepicker__day-name,
  & .react-datepicker__day {
    width: 48px;
    height: 48px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
  }

  & .react-datepicker__day {
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
    ${getTextVariants('body2')};

    &:hover {
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['600']};
      border-radius: 50%;
    }

    &--today {
      border-radius: 50%;
      border: 2px solid
        ${({ theme }) => (theme.type === 'light' ? theme.colors.tretiary['500'] : theme.colors.tretiary['400'])};
    }

    &--selected,
    &--keyboard-selected {
      color: ${({ theme }) => theme.colors.surface['50']};
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.tretiary['600'] : theme.colors.tretiary['800']};
      border-radius: 50%;
    }

    &--disabled:hover {
      background-color: transparent;
    }

    &--outside-month,
    &--disabled {
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['400'])};
    }

    &-name {
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['100'])};
      ${getSubtitleLevelStyles(4)}
    }

    &-names {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  & .react-datepicker__year-wrapper {
    max-width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }

  & .react-datepicker__year .react-datepicker__year-text,
  & .react-datepicker__month .react-datepicker__month-text {
    width: 112px;
    height: 48px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;

    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
    ${getSubtitleLevelStyles(4)}
    border-radius: 16px;

    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
    &:hover {
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['600']};
    }

    &--selected,
    &--keyboard-selected {
      background-color: ${({ theme }) => theme.colors.tretiary['500']};
    }
  }
`;

import { css, styled } from 'styled-components';

import { getTextVariants } from '@core/Typography/Text/styles';

import type { StyledPopoverProps } from './types';

export const TriggerPopoverWrapper = styled.div`
  width: fit-content;
`;

export const StyledTitle = styled.span`
  display: block;
  padding: 8px 16px;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900'])};
  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.tretiary['500'] : theme.colors.tretiary['400']};
  border-radius: 8px 8px 0 0;
`;

export const StyledBody = styled.div`
  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['200'])};
  ${getTextVariants('body4')};
`;

export const StyledArrow = styled.div`
  &,
  &::before {
    position: absolute;
    z-index: -1;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
    ${({ theme }) => theme.shadows.gray};
  }

  & {
    visibility: hidden;
  }

  &::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  }
`;

export const StyledPopover = styled.div<StyledPopoverProps>`
  max-width: 210px;
  ${({ $isTitled }) => getBorderRasius($isTitled)};
  ${({ theme }) => theme.shadows.gray};
  opacity: 0;

  &[data-show] {
    opacity: 1;
  }

  &[data-popper-placement^='top'] > ${StyledArrow} {
    bottom: -4px;
  }

  &[data-popper-placement^='bottom'] > ${StyledArrow} {
    top: -4px;
  }

  &[data-popper-placement^='left'] > ${StyledArrow} {
    right: -4px;
  }

  &[data-popper-placement^='right'] > ${StyledArrow} {
    left: -4px;
  }
`;

export const getBorderRasius = (isTitled: boolean) => {
  return isTitled
    ? css`
        border-radius: 8px 8px 6px 6px;

        ${StyledBody} {
          padding: 8px 16px;
          border-radius: 0 0 6px 6px;
        }
      `
    : css`
        border-radius: 4px;

        ${StyledBody} {
          padding: 6px 8px;
          border-radius: 4px;
        }
      `;
};

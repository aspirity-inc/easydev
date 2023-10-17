import { css, styled } from 'styled-components';

import { Accordion } from '@core/Accordion';
import { AnimationWrapper } from '@core/Accordion/components/Panel/styles';
import { Box } from '@core/Box';

import { StyledLabel, defaultHoverStyles, getCommonMenuItemStyles } from '../../styles';
import type { StyledAccordionProps, StyledSidebarMenuItemProps, StyledAccordionListProps } from '../../types';

export const StyledAccordionWrapper = styled(Box)<StyledAccordionListProps>`
  position: relative;
  ${({ $hovered, $maxWidth }) =>
    $hovered &&
    css`
      width: ${$maxWidth}px;
    `};
`;

export const StyledControl = styled(Box)<StyledSidebarMenuItemProps>`
  cursor: default;
  &:hover:not([disabled]) {
    background-color: transparent;
  }
  ${({ $disabled, $collapsed, $hovered }) =>
    getCommonMenuItemStyles($disabled || false, $collapsed || false, $hovered || false)};

  width: 100%;
  background-color: transparent;

  border-radius: 8px 8px 0px 8px;

  ${({ $collapsed, $hovered }) => {
    if ($collapsed && $hovered) {
      return css`
        ${defaultHoverStyles};
      `;
    }
  }}

  ${({ $hovered, $maxWidth }) =>
    $hovered &&
    css`
      width: ${$maxWidth}px;
    `};

  ${({ $collapsedAnimation, $hovered }) =>
    !$hovered && $collapsedAnimation
      ? css`
          & ${CollapsedChevronWrapper}, & ${StyledLabel} {
            transform: scale(0);
            opacity: 0;
          }
        `
      : css`
          & ${CollapsedChevronWrapper},& ${StyledLabel} {
            transform: scale(1);
            opacity: 1;
          }
        `}
`;

export const CollapsedChevronWrapper = styled(Box)`
  transition: transform ${({ theme }) => theme.transition.default} ease;
  margin-left: auto;
`;

export const StyledPanel = styled(Box)`
  background-color: transparent;
`;

export const StyledAccordion = styled(Accordion<false>)<StyledAccordionProps>`
  & ${AnimationWrapper} {
    border: none;
  }

  ${({ $opened }) => {
    return $opened
      ? css`
          & ${AnimationWrapper} {
            border-bottom: 1px solid
              ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['600'])};
          }
        `
      : css`
          & ${AnimationWrapper} {
            border-color: transparent;
          }
        `;
  }};

  ${({ $collapsed }) => {
    return (
      $collapsed &&
      css`
        & ${AnimationWrapper} {
          position: absolute;
          right: 0;
          width: calc(100% - 48px);
          background-color: ${({ theme }) =>
            theme.type === 'light' ? theme.colors.surface['200'] : theme.colors.surface['700']};
          border: none;
          border-radius: 0px 0px 8px 8px;
        }
      `
    );
  }};

  & .easy_accordion-panel {
    background-color: transparent;
    padding: 0;
  }
`;

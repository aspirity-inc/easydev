import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

import type { StyledSidebarProps } from './types';

export const StyledSidebarWrapper = styled(Box)`
  height: 100%;
  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900']};
`;

export const SidebarStickyContent = styled(Box)`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100vh;
`;

export const SidebarContent = styled(Box)`
  position: relative;
  height: inherit;
`;

export const StyledSidebar = styled(Box)<StyledSidebarProps>`
  height: inherit;
  width: ${({ $maxWidth }) => $maxWidth}px;
  padding: 8px;
  transition: width ${({ theme }) => theme.transition.default} ease;

  // For right work hidden case of sidebar
  ${SidebarContent} {
    width: ${({ $maxWidth }) => $maxWidth}px;
  }

  ${({ $collapsed, $minWidth }) => {
    return (
      $collapsed &&
      css`
        width: ${$minWidth}px;

        ${SidebarContent} {
          width: 100%;
        }
      `
    );
  }}
`;

export const ToggleBtn = styled('button')<StyledSidebarProps>`
  position: absolute;
  right: 0;
  bottom: 50px;
  z-index: 1;

  padding: 5px 0 5px 2px;
  border: none;
  border-radius: 0;
  border-bottom-left-radius: 100%;
  border-top-left-radius: 100%;
  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['200'] : theme.colors.surface['800']};
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['800'] : theme.colors.surface['100'])};
  transform-origin: right;
  transition: transform ${({ theme }) => theme.transition.default} ease,
    color ${({ theme }) => theme.transition.default} ease,
    background-color ${({ theme }) => theme.transition.default} ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.primary['700'] : theme.colors.primary['500'])};
  }

  &:focus-visible,
  &:active,
  &:focus {
    outline: none;
  }

  ${({ $collapsed }) => {
    return (
      $collapsed &&
      css`
        background-color: ${({ theme }) =>
          theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900']};
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['100'])};
        transform: rotateY(-180deg);
      `
    );
  }}
`;

import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

import type { StyledSidebarProps } from './types';

export const StyledSidebarWrapper = styled(Box)`
  position: relative;
`;

export const SidebarContent = styled(Box)`
  padding: 8px;
`;

export const StyledSidebar = styled(Box)<StyledSidebarProps>`
  height: 100%;
  width: ${({ $maxWidth }) => $maxWidth}px;

  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900']};

  transition: width ${({ theme }) => theme.transition.default} ease;
  overflow-x: hidden;

  ${({ $collapsed, $minWidth }) => {
    return (
      $collapsed &&
      css`
        width: ${$minWidth}px;
      `
    );
  }}
`;

export const ToggleBtn = styled('button')<StyledSidebarProps>`
  position: absolute;
  right: 0;
  bottom: 30px;
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

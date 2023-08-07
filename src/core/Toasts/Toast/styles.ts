import { css, styled } from 'styled-components';

import { StatusColorType, ToastStatus } from '../types';

type StyledToastProps = {
  $status?: ToastStatus;
  $statusBackground?: string;
  $colorful?: boolean;
};

type StyledMainContentProps = {
  $colorful?: boolean;
};

const backgroundColors: StatusColorType = {
  light: {
    info: {
      palette: 'secondary',
      value: '300',
    },
    success: {
      palette: 'success',
      value: '300',
    },
    warning: {
      palette: 'warning',
      value: '500',
    },
    error: {
      palette: 'error',
      value: '300',
    },
  },
  dark: {
    info: {
      palette: 'secondary',
      value: '100',
    },
    success: {
      palette: 'success',
      value: '500',
    },
    warning: {
      palette: 'warning',
      value: '400',
    },
    error: {
      palette: 'error',
      value: '400',
    },
  },
};

export const StyledToast = styled.div<StyledToastProps>`
  display: flex;
  width: 358px;
  padding: 10px 16px;
  ${({ $status, $statusBackground, $colorful }) =>
    $status && getBackgroundColor($status, $statusBackground, $colorful || false)}
  border-radius: 8px;
  ${({ theme }) => theme.shadows.gray};
  pointer-events: auto;
`;

export const StyledMainContent = styled.div<StyledMainContentProps>`
  --monochrome: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
  --colorful: ${({ theme }) => theme.colors.surface['900']};

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px 0;

  ${({ $colorful }) =>
    $colorful
      ? css`
          color: var(--colorful);
        `
      : css`
          color: var(--monochrome);
        `};
`;

export const getBackgroundColor = (status: ToastStatus, statusBackground: string | undefined, colorful: boolean) => {
  if (!colorful) {
    return css`
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
    `;
  }

  return css`
    background-color: ${({ theme }) => {
      const color = backgroundColors[theme.type][status];
      return statusBackground || theme.colors[color.palette][color.value];
    }};
  `;
};

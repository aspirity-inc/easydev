import { css, styled } from 'styled-components';

import {
  slideInRight,
  slideOutRight,
  slideInLeft,
  slideOutLeft,
  slideInUp,
  slideOutUp,
  slideInDown,
  slideOutDown,
  duration,
} from './animation';
import type { StyledAnimationProps, StyledToastProps, StyledMainContentProps } from './types';
import type { StatusColorType, ToastStatus } from '../types';

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

export const StyledAnimationWrapper = styled.div<StyledAnimationProps>`
  max-height: 500px;
  opacity: 1;
  transition: max-height ${duration} cubic-bezier(0, 0.91, 1, 1), opacity 0.2s ease-out;

  // Animation for smoothly resize the toast list when the toast is added or deleted
  ${({ $isAdded, $isDeleting }) =>
    (!$isAdded || $isDeleting) &&
    css`
      opacity: 0;
      max-height: 0px;
    `}

  // Animation for enter/exit toast
  ${({ $isDeleting, $position }) => {
    let slideInStyle, slideOutStyle;

    switch ($position) {
      case 'top-right':
      case 'bottom-right': {
        slideInStyle = css`
          animation: ${slideInRight} ${duration} ease-in-out forwards;
        `;
        slideOutStyle = css`
          animation: ${slideOutRight} ${duration} ease-out forwards;
        `;
        break;
      }
      case 'top-left':
      case 'bottom-left': {
        slideInStyle = css`
          animation: ${slideInLeft} ${duration} ease-in-out forwards;
        `;
        slideOutStyle = css`
          animation: ${slideOutLeft} ${duration} ease-out forwards;
        `;
        break;
      }
      case 'top-center': {
        slideInStyle = css`
          animation: ${slideInUp} ${duration} ease-in-out forwards;
        `;
        slideOutStyle = css`
          animation: ${slideOutUp} ${duration} ease-out forwards;
        `;
        break;
      }
      case 'center-center': {
        slideInStyle = css`
          animation: ${slideInDown} ${duration} ease-in-out forwards;
        `;
        slideOutStyle = css`
          animation: ${slideOutUp} ${duration} ease-out forwards;
        `;
        break;
      }
      case 'bottom-center': {
        slideInStyle = css`
          animation: ${slideInDown} ${duration} ease-in-out forwards;
        `;
        slideOutStyle = css`
          animation: ${slideOutDown} ${duration} ease-out forwards;
        `;
        break;
      }
    }

    return $isDeleting ? slideOutStyle : slideInStyle;
  }}
`;

export const StyledToast = styled.div<StyledToastProps>`
  display: flex;
  width: 358px;
  padding: 14px 16px;
  margin-bottom: 8px;
  ${({ $status, $statusBackground, $colorful }) =>
    $status && getBackgroundColor($status, $statusBackground, $colorful || false)}
  border-radius: 8px;
  ${({ theme }) => theme.shadows.gray};
  pointer-events: auto;

  ${({ $hasDescription }) => {
    return (
      !$hasDescription &&
      css`
        padding: 10px 16px;
        align-items: center;
      `
    );
  }}
`;

export const StyledMainContent = styled.div<StyledMainContentProps>`
  --monochrome: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
  --colorful: ${({ theme }) => theme.colors.surface['900']};

  display: flex;
  flex-direction: column;
  gap: 10px;

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

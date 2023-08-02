import { styled, css } from 'styled-components';

import { StatusColorType, ToastStatus } from '../types';

export type StyledStatusIconProps = {
  $status?: ToastStatus;
  $colorful?: boolean;
};

const iconColors: StatusColorType = {
  light: {
    info: {
      palette: 'secondary',
      value: '500',
    },
    success: {
      palette: 'success',
      value: '500',
    },
    warning: {
      palette: 'warning',
      value: '600',
    },
    error: {
      palette: 'error',
      value: '500',
    },
  },
  dark: {
    info: {
      palette: 'secondary',
      value: '50',
    },
    success: {
      palette: 'success',
      value: '400',
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

export const StyledIcon = styled('div')<StyledStatusIconProps>`
  display: flex;
  ${({ $status, $colorful }) => $status && getStatusColor($status, $colorful || false)};

  & > div {
    padding-right: 10px;
    font-size: 32px;
  }
`;

export const getStatusColor = (status: ToastStatus, colorful: boolean) => {
  if (colorful) {
    return css`
      color: ${({ theme }) => theme.colors.surface['900']};
    `;
  }

  return css`
    color: ${({ theme }) => {
      const iconColor = iconColors[theme.type][status];
      return theme.colors[iconColor.palette][iconColor.value];
    }};
  `;
};

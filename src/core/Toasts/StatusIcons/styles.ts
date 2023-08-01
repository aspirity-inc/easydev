import { styled, css } from 'styled-components';

import { ToastStatus } from '../types';

export type StyledStatusIconProps = {
  $status?: ToastStatus;
  $colorful?: boolean;
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

  switch (status) {
    case 'info':
      return css`
        color: ${({ theme }) =>
          theme.type === 'light' ? theme.colors.secondary['500'] : theme.colors.secondary['100']};
      `;
    case 'success':
      return css`
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.success['500'] : theme.colors.success['400'])};
      `;
    case 'warning':
      return css`
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.warning['600'] : theme.colors.warning['400'])};
      `;
    case 'error':
      return css`
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.error['500'] : theme.colors.error['400'])};
      `;

    default:
      return css``;
  }
};

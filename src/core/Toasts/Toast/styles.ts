import { css, styled } from 'styled-components';

import { BackgroundProps, ToastStatus } from '../types';

type StyledToastProps = {
  $status?: ToastStatus;
  $statusBackground?: BackgroundProps;
  $colorful?: boolean;
};

type StyledMainContentProps = {
  $colorful?: boolean;
};

export const StyledToast = styled.div<StyledToastProps>`
  --monochrome: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
  --colorful: ${({ theme }) => theme.colors.surface['900']};

  display: flex;
  width: 358px;
  padding: 10px 16px;
  ${({ $status, $statusBackground, $colorful }) =>
    $status && getBackgroundColor($status, $statusBackground, $colorful || false)}
  border-radius: 8px;
  ${({ theme }) => theme.shadows.gray}
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

export const getBackgroundColor = (
  status: ToastStatus,
  statusBackground: BackgroundProps | undefined,
  colorful: boolean
) => {
  if (!colorful) {
    return css`
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
    `;
  }

  switch (status) {
    case 'info':
      return css`
        background-color: ${statusBackground?.info ||
        (({ theme }) => (theme.type === 'light' ? theme.colors.secondary['500'] : theme.colors.secondary['100']))};
      `;
    case 'success':
      return css`
        background-color: ${statusBackground?.success ||
        (({ theme }) => (theme.type === 'light' ? theme.colors.success['500'] : theme.colors.success['400']))};
      `;
    case 'warning':
      return css`
        background-color: ${statusBackground?.warning ||
        (({ theme }) => (theme.type === 'light' ? theme.colors.warning['600'] : theme.colors.warning['400']))};
      `;
    case 'error':
      return css`
        background-color: ${statusBackground?.error ||
        (({ theme }) => (theme.type === 'light' ? theme.colors.error['500'] : theme.colors.error['400']))};
      `;
    default:
      return css``;
  }
};

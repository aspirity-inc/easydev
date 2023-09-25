import type { CSSProperties, ReactNode } from 'react';

import { toastPositions } from './constants';

export type ToastStatus = 'info' | 'success' | 'warning' | 'error';

export type ToastProps = {
  toastId?: number;
  title?: string | ReactNode;
  description?: string | ReactNode;
  icon?: ReactNode;
  colorful?: boolean;
  statusBackground?: string;
  status?: ToastStatus;
  closeBtn?: ReactNode;
  autoClose?: boolean;
  autoCloseDelay?: number;
  onDelete: (id: number | undefined) => void;
  className?: string;
  position: ToastPosition;
  style?: CSSProperties;
};

export type ToastItemType = Omit<ToastProps, 'onDelete'> & {
  position?: ToastPosition;
};

export type StatusColorType = {
  [key: string]: {
    [key: string]: {
      palette: string;
      value: string;
    };
  };
};

export type ToastPosition = (typeof toastPositions)[number];

export type NotifyFnType = (args: ToastItemType) => void;

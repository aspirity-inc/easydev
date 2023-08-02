import { CSSProperties, ReactNode } from 'react';

export type ToastStatus = 'info' | 'success' | 'warning' | 'error';

export type ToastProps = {
  title?: string | ReactNode;
  description?: string | ReactNode;
  icon?: ReactNode;
  colorful?: boolean;
  statusBackground?: string;
  status?: ToastStatus;
  closeBtnIcon?: ReactNode;
  closeBtn?: boolean;
  autoClose?: boolean;
  autoCloseDelay?: number;
  className?: string;
  style?: CSSProperties;
};

export type StatusColorType = {
  [key: string]: {
    [key: string]: {
      palette: string;
      value: string;
    };
  };
};

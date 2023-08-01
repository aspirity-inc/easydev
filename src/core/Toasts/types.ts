import { CSSProperties, ReactNode } from 'react';

export type ToastStatus = 'info' | 'success' | 'warning' | 'error';

export type ToastProps = {
  title?: string | ReactNode;
  description?: string | ReactNode;
  icons?: IconsProps;
  colorful?: boolean;
  statusBackground?: BackgroundProps;
  status?: ToastStatus;
  closeBtnIcon?: ReactNode;
  onClose?: () => void;
  className?: string;
  style?: CSSProperties;
};

export type IconsProps = {
  info?: ReactNode;
  success?: ReactNode;
  warning?: ReactNode;
  error?: ReactNode;
};

export type BackgroundProps = {
  info?: string;
  success?: string;
  warning?: string;
  error?: string;
};

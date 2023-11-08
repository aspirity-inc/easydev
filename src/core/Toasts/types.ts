import type { CSSProperties, ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types';

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
  position?: ToastPosition;
  style?: CSSProperties;

  toastAnimationContainerProps?: Pick<BaseComponentType, 'style'>;
  toastStatusIconProps?: Pick<BaseComponentType, 'style'>;
  toastContentProps?: Pick<BaseComponentType, 'style'>;
  toastTitleProps?: Pick<BaseComponentType, 'style'>;
  toastDescriptionProps?: Pick<BaseComponentType, 'style'>;
  toastCloseButtonProps?: Pick<BaseComponentType, 'style'>;
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

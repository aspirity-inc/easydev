import type { ReactNode } from 'react';

import { CheckCircleIcon, ErrorIcon, InfoIcon, WarningIcon } from '@icons';

import { StyledIcon } from './styles';
import { ToastStatus } from '../types';

export type ToastStatusIconProps = {
  status: ToastStatus;
  icon?: ReactNode;
  colorful?: boolean;
};

const icons = { info: <InfoIcon />, success: <CheckCircleIcon />, warning: <WarningIcon />, error: <ErrorIcon /> };

export const ToastStatusIcon = ({ status, icon, colorful }: ToastStatusIconProps) => (
  <StyledIcon $status={status} $colorful={colorful}>
    {icon || icons[status]}
  </StyledIcon>
);

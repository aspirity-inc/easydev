import type { ReactNode } from 'react';

import 'material-symbols';

import { StyledIcon } from './styles';
import type { ToastStatusIconProps } from '../types';

const icons = { info: 'error_outline', success: 'check_circle_outline', warning: 'warning', error: 'error_outline' };

export const ToastStatusIcon = ({ status, icon, colorful }: ToastStatusIconProps) => (
  <StyledIcon $status={status} $colorful={colorful}>
    {icon || <div className="material-symbols-rounded">{icons[status]}</div>}
  </StyledIcon>
);

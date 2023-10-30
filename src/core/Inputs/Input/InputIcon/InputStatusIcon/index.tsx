import { ReactNode } from 'react';

import { ErrorIcon, ProgressActivityIcon, WarningIcon } from '@icons';

import { RotateBox } from '@core/Button/styles';

import { StyledIcon } from './styles';
import type { InputBaseStatus } from '../../../types';

export type InputStatusIconProps = {
  status?: InputBaseStatus;
  errorIcon?: ReactNode;
  warningIcon?: ReactNode;
  loadingIcon?: ReactNode;
};

export const InputStatusIcon = ({ status, ...icons }: InputStatusIconProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'warning':
        return icons.warningIcon || <WarningIcon />;
      case 'error':
        return icons.errorIcon || <ErrorIcon />;
      case 'loading':
        return <RotateBox>{icons.loadingIcon || <ProgressActivityIcon />}</RotateBox>;
      default:
        return null;
    }
  };

  return <StyledIcon $status={status}>{getStatusIcon()}</StyledIcon>;
};

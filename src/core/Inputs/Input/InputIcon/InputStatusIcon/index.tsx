import type { ReactNode } from 'react';

import 'material-symbols';

import { RotateBox } from '@core/Button/styles';

import { StyledIcon } from './styles';
import type { IconProps, InputBaseStatus } from '../../../types';

export type InputStatusIconProps = {
  status?: InputBaseStatus;
  errorIcon?: ReactNode;
  warningIcon?: ReactNode;
  loadingIcon?: ReactNode;
};

export const WarningIcon = ({ icon }: IconProps) => (
  <>{icon || <div className="material-symbols-rounded">warning</div>}</>
);
export const ErrorIcon = ({ icon }: IconProps) => (
  <>{icon || <div className="material-symbols-rounded">error_outline</div>}</>
);
export const SuccessIcon = ({ icon }: IconProps) => (
  <>{icon || <div className="material-symbols-rounded">check_circle_outline</div>}</>
);
export const LoadingIcon = ({ icon }: IconProps) => (
  <RotateBox>{icon || <div className="material-symbols-rounded">progress_activity</div>}</RotateBox>
);

export const InputStatusIcon = ({ status, ...icons }: InputStatusIconProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'warning':
        return <WarningIcon icon={icons.warningIcon} />;
      case 'error':
        return <ErrorIcon icon={icons.errorIcon} />;
      case 'loading':
        return <LoadingIcon icon={icons.loadingIcon} />;
      case 'success':
        return <SuccessIcon />;
      default:
        return null;
    }
  };

  return <StyledIcon $status={status}>{getStatusIcon()}</StyledIcon>;
};

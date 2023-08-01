import { ReactNode } from 'react';

import 'material-symbols';

import { StyledIcon } from './styles';
import { IconsProps, ToastStatus } from '../types';

export type ToastStatusIconProps = {
  status?: ToastStatus;
  icons?: IconsProps;
  colorful?: boolean;
};

export type IconProps = {
  icon?: ReactNode;
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
export const InfoIcon = ({ icon }: IconProps) => (
  <>{icon || <div className="material-symbols-rounded">error_outline</div>}</>
);

export const ToastStatusIcon = ({ status, icons, colorful }: ToastStatusIconProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'info':
        return <InfoIcon icon={icons?.info} />;
      case 'success':
        return <SuccessIcon icon={icons?.success} />;
      case 'warning':
        return <WarningIcon icon={icons?.warning} />;
      case 'error':
        return <ErrorIcon icon={icons?.error} />;
      default:
        return null;
    }
  };

  return (
    <StyledIcon $status={status} $colorful={colorful}>
      {getStatusIcon()}
    </StyledIcon>
  );
};

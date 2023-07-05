import { RotateBox } from '@core/Button/styles';
import { InputStatus } from '../styles';
import { StyledIcon } from './styles';
import 'material-symbols';

export type InputStatusIconProps = {
  status?: InputStatus;
};

export const WarningIcon = () => <div className="material-symbols-rounded">warning</div>;
export const ErrorIcon = () => <div className="material-symbols-rounded">error_outline</div>;
export const SuccessIcon = () => <div className="material-symbols-rounded">check_circle_outline</div>;
export const LoadingIcon = () => (
  <RotateBox>
    <div className="material-symbols-rounded">progress_activity</div>
  </RotateBox>
);

export const InputStatusIcon = ({ status = 'default' }: InputStatusIconProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'warning':
        return <WarningIcon />;
      case 'error':
        return <ErrorIcon />;
      case 'loading':
        return <LoadingIcon />;
      case 'success':
        return <SuccessIcon />;
      default:
        return null;
    }
  };

  return <StyledIcon $status={status}>{getStatusIcon()}</StyledIcon>;
};

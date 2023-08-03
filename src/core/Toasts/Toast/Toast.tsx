import { useEffect } from 'react';

import { Text, Subtitle } from '@core/Typography';

import { StyledMainContent, StyledToast } from './styles';
import { CloseButton } from '../CloseButton';
import { ToastStatusIcon } from '../StatusIcons';
import { ToastProps } from '../types';

export const Toast = ({
  toastId,
  title,
  description,
  status = 'info',
  colorful = false,
  icon,
  autoClose = true,
  autoCloseDelay = 5000,
  statusBackground,
  closeBtn = true,
  closeBtnIcon,
  onDelete,
  ...props
}: ToastProps) => {
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        onDelete(toastId);
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseDelay, onDelete]);

  return (
    <StyledToast $colorful={colorful} $statusBackground={statusBackground} $status={status} {...props}>
      <ToastStatusIcon colorful={colorful} status={status} icon={icon} />

      <StyledMainContent $colorful={colorful}>
        <Subtitle level={4}>
          {title} {toastId}
        </Subtitle>
        {description && <Text variant="body2">{description}</Text>}
      </StyledMainContent>

      {closeBtn && <CloseButton icon={closeBtnIcon} colorful={colorful} onClick={() => onDelete(toastId)} />}
    </StyledToast>
  );
};

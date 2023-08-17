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
  closeBtn,
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
  }, [autoClose, autoCloseDelay, onDelete, toastId]);

  return (
    <StyledToast
      $colorful={colorful}
      $statusBackground={statusBackground}
      $status={status}
      $hasDescription={description ? true : false}
      {...props}
    >
      <ToastStatusIcon colorful={colorful} status={status} icon={icon} />

      <StyledMainContent $colorful={colorful}>
        <Subtitle level={4}>{title}</Subtitle>
        {description && <Text variant="body2">{description}</Text>}
      </StyledMainContent>

      <CloseButton icon={closeBtn} colorful={colorful} onClick={() => onDelete(toastId)} />
    </StyledToast>
  );
};

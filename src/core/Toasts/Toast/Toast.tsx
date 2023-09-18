import { useEffect, useState } from 'react';

import { Text, Subtitle } from '@core/Typography';

import { StyledMainContent, StyledToast, StyledAnimationWrapper } from './styles';
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
  position = 'bottom-right',
  onDelete,
  ...props
}: ToastProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  // Start animation for smoothly resize list, when entering new toast
  useEffect(() => {
    const timeoutId = setTimeout(() => setIsAdded(true), 50);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Start animation for exit(delete) new toast
  useEffect(() => {
    if (isDeleting) {
      const timeoutId = setTimeout(() => onDelete(toastId), 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isDeleting, onDelete, toastId]);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseDelay, onDelete, toastId]);

  return (
    <StyledAnimationWrapper
      className="easy_toast-animationContainer"
      $isDeleting={isDeleting}
      $position={position}
      $isAdded={isAdded}
    >
      <StyledToast
        className="easy_toast"
        $colorful={colorful}
        $statusBackground={statusBackground}
        $status={status}
        $hasDescription={description ? true : false}
        {...props}
      >
        <ToastStatusIcon colorful={colorful} status={status} icon={icon} />

        <StyledMainContent className="easy_toast-content" $colorful={colorful}>
          <Subtitle level={4}>{title}</Subtitle>
          {description && <Text variant="body2">{description}</Text>}
        </StyledMainContent>

        <CloseButton icon={closeBtn} colorful={colorful} onClick={() => setIsDeleting(true)} />
      </StyledToast>
    </StyledAnimationWrapper>
  );
};

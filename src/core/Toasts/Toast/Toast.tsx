import { useEffect, useState } from 'react';

import { Subtitle, Text } from '@core/Typography';

import { StyledAnimationWrapper, StyledMainContent, StyledToast } from './styles';
import { CloseButton } from '../CloseButton';
import { ToastStatusIcon } from '../StatusIcons';
import type { ToastProps } from '../types';

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
  toastAnimationContainerProps,
  toastStatusIconProps,
  toastContentProps,
  toastTitleProps,
  toastDescriptionProps,
  toastCloseButtonProps,
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
      {...toastAnimationContainerProps}
    >
      <StyledToast
        className="easy_toast"
        $colorful={colorful}
        $statusBackground={statusBackground}
        $status={status}
        $hasDescription={!!description}
        {...props}
      >
        <ToastStatusIcon colorful={colorful} status={status} icon={icon} {...toastStatusIconProps} />

        <StyledMainContent className="easy_toast-content" $colorful={colorful} {...toastContentProps}>
          <Subtitle level={4} {...toastTitleProps}>
            {title}
          </Subtitle>
          {description && (
            <Text variant="body2" {...toastDescriptionProps}>
              {description}
            </Text>
          )}
        </StyledMainContent>

        <CloseButton
          icon={closeBtn}
          colorful={colorful}
          onClick={() => setIsDeleting(true)}
          data-testid="close"
          {...toastCloseButtonProps}
        />
      </StyledToast>
    </StyledAnimationWrapper>
  );
};

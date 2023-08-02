import { useEffect, useState } from 'react';

import { Text, Subtitle } from '@core/Typography';

import { StyledMainContent, StyledToast } from './styles';
import { CloseButton } from '../CloseButton';
import { ToastStatusIcon } from '../StatusIcons';
import { ToastProps } from '../types';

export const Toast = ({
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
  ...props
}: ToastProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseDelay]);

  if (!visible) {
    return null;
  }

  return (
    <StyledToast $colorful={colorful} $statusBackground={statusBackground} $status={status} {...props}>
      <ToastStatusIcon colorful={colorful} status={status} icon={icon} />

      <StyledMainContent $colorful={colorful}>
        <Subtitle level={4}>{title}</Subtitle>
        {description && <Text variant="body2">{description}</Text>}
      </StyledMainContent>

      {closeBtn && <CloseButton icon={closeBtnIcon} colorful={colorful} onClick={() => setVisible(false)} />}
    </StyledToast>
  );
};

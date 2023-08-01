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
  icons,
  statusBackground,
  onClose,
  closeBtnIcon,
  ...props
}: ToastProps) => {
  return (
    <StyledToast $colorful={colorful} $statusBackground={statusBackground} $status={status} {...props}>
      {status && <ToastStatusIcon colorful={colorful} status={status} icons={icons} />}

      <StyledMainContent $colorful={colorful}>
        <Subtitle level={4}>{title}</Subtitle>
        {description && <Text variant="body2">{description}</Text>}
      </StyledMainContent>

      {onClose && <CloseButton icon={closeBtnIcon} colorful={colorful} />}
    </StyledToast>
  );
};

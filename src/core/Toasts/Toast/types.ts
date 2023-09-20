import type { ToastStatus, ToastPosition } from '..';

export type StyledToastProps = {
  $status?: ToastStatus;
  $statusBackground?: string;
  $colorful?: boolean;
  $hasDescription?: boolean | undefined;
};

export type StyledAnimationProps = {
  $isDeleting: boolean;
  $position: ToastPosition;
  $isAdded: boolean;
};

export type StyledMainContentProps = {
  $colorful?: boolean;
};

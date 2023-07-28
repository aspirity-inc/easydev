import { CSSProperties, ReactNode } from 'react';

import { StyledModalContentProps } from './styles';

export type PortalElement = Element | DocumentFragment | HTMLElement | null;

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  colorful?: boolean;
  portal?: PortalElement;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export type BaseModalProps = ModalProps & {
  closeBtn?: boolean;
};

export type CloseBtnProps = React.ComponentPropsWithoutRef<'button'> & StyledModalContentProps;

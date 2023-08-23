import { CSSProperties, ReactNode } from 'react';

import { StyledModalContentProps } from './styles';

export type PortalElement = Element | DocumentFragment | HTMLElement | null;

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  bgColor?: CSSProperties['backgroundColor'];
  portal?: PortalElement;
  children: ReactNode | ReactNode[];
  className?: string;
  style?: CSSProperties;
};

export type CloseBtnProps = React.ComponentPropsWithoutRef<'button'> & StyledModalContentProps;

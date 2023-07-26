import { createPortal } from 'react-dom';

import { StyledPortalModal } from './styles';
import { ModalProps } from '../Modal';

type PortalModalProps = ModalProps & {
  portal?: Element | DocumentFragment | HTMLElement | null;
};

export const PortalModal = ({ portal, children, ...props }: PortalModalProps) => {
  return <>{portal && createPortal(<StyledPortalModal {...props}>{children}</StyledPortalModal>, portal)}</>;
};

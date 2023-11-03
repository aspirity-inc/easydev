import { type MouseEventHandler, useEffect, useRef } from 'react';

import { createPortal } from 'react-dom';

import { CloseButton } from './components/CloseButton';
import { ModalContent, ModalWrapper } from './styles';
import type { ModalProps } from './types';

export const Modal = ({ open, onClose, children, portal = document?.body, ...props }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const ModalWindow = () => (
    <ModalWrapper className="easy_modal-wrap" open={open} onClick={handleClick} $isPortal={Boolean(portal)} {...props}>
      <ModalContent className="easy_modal-content" ref={modalRef}>
        {children}
      </ModalContent>
    </ModalWrapper>
  );

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return <>{portal ? createPortal(ModalWindow(), portal) : ModalWindow()}</>;
};
export { CloseButton };

import { MouseEventHandler, useRef } from 'react';

import { createPortal } from 'react-dom';

import { ModalContent, ModalWrapper } from './styles';
import { ModalProps } from './types';

export const Modal = ({ open, onClose, children, colorful = false, portal, ...props }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const ModalWindow = () => (
    <ModalWrapper open={open} onClick={handleClick} $isPortal={Boolean(portal)} {...props}>
      <ModalContent ref={modalRef} $colorful={colorful}>
        {children}
      </ModalContent>
    </ModalWrapper>
  );

  return <>{portal ? createPortal(ModalWindow(), portal) : ModalWindow()}</>;
};

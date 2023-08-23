import { MouseEventHandler, useEffect, useRef } from 'react';

import { createPortal } from 'react-dom';

import { ModalContent, ModalWrapper, StyledCloseButton } from './styles';
import { CloseBtnProps, ModalProps } from './types';

export const CloseButton = (props: CloseBtnProps) => (
  <StyledCloseButton type="button" {...props}>
    <div className="material-symbols-outlined">close</div>
  </StyledCloseButton>
);

export const Modal = ({ open, onClose, children, bgColor, closeBtn, portal = document.body, ...props }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const ModalWindow = () => (
    <ModalWrapper open={open} onClick={handleClick} $isPortal={Boolean(portal)} {...props}>
      <ModalContent ref={modalRef} bgColor={bgColor}>
        {closeBtn && <CloseButton onClick={onClose} />}
        {children}
      </ModalContent>
    </ModalWrapper>
  );

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return <>{portal ? createPortal(ModalWindow(), portal) : ModalWindow()}</>;
};

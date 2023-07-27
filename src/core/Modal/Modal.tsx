import { CSSProperties, MouseEventHandler, ReactNode, useRef } from 'react';

import { ModalContext } from './ModalContext';
import { ModalContent, ModalWrapper } from './styles';

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  colorful?: boolean;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const Modal = ({ open, onClose, children, colorful = false, ...props }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <ModalWrapper open={open} onClick={handleClick} {...props}>
      <ModalContent ref={modalRef} $colorful={colorful}>
        <ModalContext.Provider value={{ colorful, onClose }}>{children}</ModalContext.Provider>
      </ModalContent>
    </ModalWrapper>
  );
};

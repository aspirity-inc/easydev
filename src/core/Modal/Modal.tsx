import { CSSProperties, MouseEventHandler, ReactNode, useRef } from 'react';

import { ModalContent, ModalWrapper, StyledCloseButton, StyledModalContentProps } from './styles';

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  colorful?: boolean;
  closeBtn?: boolean;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const CloseButton = (props: React.ComponentPropsWithoutRef<'button'> & StyledModalContentProps) => (
  <StyledCloseButton type="button" {...props}>
    <div className="material-symbols-outlined">close</div>
  </StyledCloseButton>
);

export const Modal = ({ open, onClose, children, closeBtn = false, colorful, ...props }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <ModalWrapper open={open} onClick={handleClick} {...props}>
      <ModalContent ref={modalRef} $colorful={colorful}>
        {closeBtn && <CloseButton onClick={onClose} $colorful={colorful} />}
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

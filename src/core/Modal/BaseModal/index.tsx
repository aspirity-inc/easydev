import { StyledCloseButton } from './styles';
import { Modal } from '../Modal';
import { BaseModalProps, CloseBtnProps } from '../types';

export const CloseButton = (props: CloseBtnProps) => (
  <StyledCloseButton type="button" {...props}>
    <div className="material-symbols-outlined">close</div>
  </StyledCloseButton>
);

export const BaseModal = ({ onClose, children, colorful = false, closeBtn = false, ...props }: BaseModalProps) => (
  <Modal onClose={onClose} colorful={colorful} {...props}>
    {closeBtn && <CloseButton onClick={onClose} $colorful={colorful} />}
    {children}
  </Modal>
);

import { InfoModalContext } from './InfoModalContext';
import { Modal } from '../Modal';
import { ModalProps } from '../types';

export const InfoModal = ({ onClose, children, colorful = false, ...props }: ModalProps) => (
  <Modal onClose={onClose} colorful={colorful} {...props}>
    <InfoModalContext.Provider value={{ colorful, onClose }}>{children}</InfoModalContext.Provider>
  </Modal>
);

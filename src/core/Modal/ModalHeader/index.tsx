import { CSSProperties, ReactNode, useContext } from 'react';

import { StyledCloseButton, StyledModalHeader } from './styles';
import { ModalContext } from '../ModalContext';
import { StyledModalContentProps } from '../styles';

export type ModalHeaderProps = {
  closeBtn?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const CloseButton = (props: React.ComponentPropsWithoutRef<'button'> & StyledModalContentProps) => (
  <StyledCloseButton type="button" {...props}>
    <div className="material-symbols-outlined">close</div>
  </StyledCloseButton>
);

export const ModalHeader = ({ children, closeBtn = false, ...props }: ModalHeaderProps) => {
  const { onClose, colorful } = useContext(ModalContext);

  return (
    <StyledModalHeader {...props}>
      {children}
      {closeBtn && <CloseButton onClick={onClose} $colorful={colorful} />}
    </StyledModalHeader>
  );
};

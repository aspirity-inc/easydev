import { CSSProperties, ReactNode } from 'react';

import { StyledModalHeader } from './styles';
import { CloseButton } from '../CloseButton';

export type ModalHeaderProps = {
  onClose: () => void;
  headerContent?: () => ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const ModalHeader = ({ headerContent, onClose, ...props }: ModalHeaderProps) => {
  return (
    <StyledModalHeader className="easy_modal-header" {...props}>
      {headerContent && headerContent()}
      <CloseButton onClick={onClose} />
    </StyledModalHeader>
  );
};

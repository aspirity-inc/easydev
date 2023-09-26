import type { ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types.ts';

import { StyledModalHeader } from './styles';
import { CloseButton } from '../CloseButton';

export type ModalHeaderProps = BaseComponentType & {
  onClose: () => void;
  headerContent?: () => ReactNode;
};

export const ModalHeader = ({ headerContent, onClose, ...props }: ModalHeaderProps) => {
  return (
    <StyledModalHeader className="easy_modal-header" {...props}>
      {headerContent && headerContent()}
      <CloseButton onClick={onClose} />
    </StyledModalHeader>
  );
};

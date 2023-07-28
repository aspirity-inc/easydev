import { CSSProperties, ReactNode, useContext } from 'react';

import { CloseButton } from '@core/Modal/BaseModal';

import { StyledModalHeader } from './styles';
import { InfoModalContext } from '../InfoModalContext';

export type ModalHeaderProps = {
  headerContent?: () => ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const ModalHeader = ({ headerContent, ...props }: ModalHeaderProps) => {
  const { onClose, colorful } = useContext(InfoModalContext);

  return (
    <StyledModalHeader {...props}>
      {headerContent ? headerContent() : <CloseButton onClick={onClose} $colorful={colorful} />}
    </StyledModalHeader>
  );
};

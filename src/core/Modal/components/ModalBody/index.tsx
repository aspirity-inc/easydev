import { CSSProperties, ReactNode } from 'react';

import { StyledModalBody } from './styles';

export type ModalBodyProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const ModalBody = ({ children, ...props }: ModalBodyProps) => {
  return (
    <StyledModalBody className="easy_modal-body" {...props}>
      {children}
    </StyledModalBody>
  );
};

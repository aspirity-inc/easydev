import type { BaseComponentType } from '@core/Box/types.ts';

import { StyledModalBody } from './styles';

export type ModalBodyProps = BaseComponentType;

export const ModalBody = ({ children, ...props }: ModalBodyProps) => {
  return (
    <StyledModalBody className="easy_modal-body" {...props}>
      {children}
    </StyledModalBody>
  );
};

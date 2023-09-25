import type { BaseComponentType } from '@core/Box/types.ts';

import { StyledModalFooter } from './styles';

export type ModalFooterProps = BaseComponentType;

export const ModalFooter = ({ children, ...props }: ModalFooterProps) => (
  <StyledModalFooter className="easy_modal-footer" {...props}>
    {children}
  </StyledModalFooter>
);

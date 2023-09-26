import { StyledCloseButton } from './styles';
import type { CloseBtnProps } from '../../types';

export const CloseButton = (props: CloseBtnProps) => (
  <StyledCloseButton type="button" {...props}>
    <div className="material-symbols-outlined">close</div>
  </StyledCloseButton>
);

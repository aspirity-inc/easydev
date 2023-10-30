import { CloseIcon } from '@icons';

import { StyledCloseButton } from './styles';
import type { CloseBtnProps } from '../../types';

export const CloseButton = (props: CloseBtnProps) => (
  <StyledCloseButton type="button" {...props}>
    <CloseIcon />
  </StyledCloseButton>
);

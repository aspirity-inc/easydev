import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { CloseIcon } from '@icons';

import { StyledCloseButton } from './styles';

type CloseBtnProps = ComponentPropsWithoutRef<'button'> & {
  icon?: ReactNode;
  colorful?: boolean;
};

export const CloseButton = ({ icon, colorful, ...props }: CloseBtnProps) => (
  <StyledCloseButton type="button" $colorful={colorful} {...props}>
    {icon || <CloseIcon />}
  </StyledCloseButton>
);

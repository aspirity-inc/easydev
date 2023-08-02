import { ReactNode } from 'react';

import 'material-symbols';

import { StyledCloseButton } from './styles';

type CloseBtnProps = React.ComponentPropsWithoutRef<'button'> & {
  icon?: ReactNode;
  colorful?: boolean;
};

export const CloseButton = ({ icon, colorful, ...props }: CloseBtnProps) => (
  <StyledCloseButton type="button" $colorful={colorful} {...props}>
    {icon || <div className="material-symbols-outlined">close</div>}
  </StyledCloseButton>
);

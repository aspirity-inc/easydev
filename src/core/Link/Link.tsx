import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { StyledLink, StyledLinkPropsType } from './styles.ts';

type LinkPropsType = ComponentPropsWithoutRef<'a'> &
  StyledLinkPropsType & {
    children: ReactNode | ReactNode[] | string;
  };

export const Link = ({ children, ...props }: LinkPropsType) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { StyledBreadcrumbPropsType, StyledLink } from './styles';

type BreadcrumbPropsType = ComponentPropsWithoutRef<'a'> &
  StyledBreadcrumbPropsType & {
    children: ReactNode | ReactNode[] | string;
  };

export const Breadcrumb = ({ children, ...props }: BreadcrumbPropsType) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

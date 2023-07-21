import React, { ReactNode } from 'react';

import 'material-symbols';

import { StyledBreadcrumbs, StyledSeparator } from './styles';

type BreadcrumbsProps = {
  children: ReactNode | ReactNode[];
  separator?: string | ReactNode;
};

const DefaultSeparator = () => <div className="material-symbols-rounded">keyboard_arrow_right</div>;

export const Breadcrumbs = ({ children, separator }: BreadcrumbsProps) => {
  const Separator = () => <StyledSeparator>{separator || <DefaultSeparator />}</StyledSeparator>;

  return (
    <StyledBreadcrumbs>
      {React.Children.map(
        children,
        (child, index) =>
          React.isValidElement(child) && (
            <React.Fragment key={index}>
              {child}
              {Array.isArray(children) && index < children?.length - 1 && <Separator />}
            </React.Fragment>
          )
      )}
    </StyledBreadcrumbs>
  );
};

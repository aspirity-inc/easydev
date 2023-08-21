import React from 'react';

import 'material-symbols';

import { StyledBreadcrumbs, StyledLink, StyledSeparator } from './styles';
import { BreadcrumbsProps, BreadcrumbsItem } from './types';

const DefaultSeparator = () => <div className="material-symbols-rounded">keyboard_arrow_right</div>;

export const Breadcrumbs = ({ itemRender, items, separator }: BreadcrumbsProps) => {
  const Separator = () => <StyledSeparator>{separator || <DefaultSeparator />}</StyledSeparator>;

  const lastItemIndex = items?.length - 1;

  const renderItem = (item: BreadcrumbsItem) => {
    if (itemRender) {
      return itemRender(item);
    }

    const url = item.href || '/';

    return (
      <StyledLink href={url} onClick={() => item.onClick}>
        {item.title}
      </StyledLink>
    );
  };

  return (
    <StyledBreadcrumbs>
      {Array.isArray(items) &&
        items.map((item, index) => (
          <React.Fragment key={index}>
            {renderItem(item)}
            {index < lastItemIndex && <Separator />}
          </React.Fragment>
        ))}
    </StyledBreadcrumbs>
  );
};

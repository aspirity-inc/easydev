import React from 'react';

import 'material-symbols';

import { StyledBreadcrumbs, StyledLink, StyledSeparator } from './styles';
import { BreadcrumbsProps, BreadcrumbsItem } from './types';

const DefaultSeparator = () => <div className="material-symbols-rounded">keyboard_arrow_right</div>;

export function Breadcrumbs<TItem>({ itemRender, items, separator }: BreadcrumbsProps<TItem>) {
  const Separator = () => <StyledSeparator>{separator || <DefaultSeparator />}</StyledSeparator>;
  const lastItemIndex = items?.length - 1;

  const renderItem = (item: BreadcrumbsItem & TItem, index: number) => {
    if (itemRender) {
      return itemRender(item, index, items);
    }

    const url = item.href || '/';
    const isLast = index < lastItemIndex;

    return isLast ? (
      <StyledLink href={url} onClick={() => item.onClick}>
        {item.title}
      </StyledLink>
    ) : (
      <StyledLink disabled onClick={() => item.onClick}>
        {item.title}
      </StyledLink>
    );
  };

  return (
    <StyledBreadcrumbs>
      {Array.isArray(items) &&
        items.map((item, index) => (
          <React.Fragment key={index}>
            {renderItem(item, index)}
            {index < lastItemIndex && <Separator />}
          </React.Fragment>
        ))}
    </StyledBreadcrumbs>
  );
}

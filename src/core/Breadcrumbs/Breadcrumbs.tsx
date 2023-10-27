import { Fragment } from 'react';

import { KeyboardArrowRightIcon } from '@icons';

import { StyledBreadcrumbs, StyledLink, StyledSeparator } from './styles';
import type { BreadcrumbsProps, BreadcrumbsItem } from './types';

export function Breadcrumbs<TItem>({ itemRender, items, separator }: BreadcrumbsProps<TItem>) {
  const Separator = () => <StyledSeparator>{separator || <KeyboardArrowRightIcon />}</StyledSeparator>;
  const lastItemIndex = items?.length - 1;

  const renderItem = (item: BreadcrumbsItem & TItem, index: number) => {
    if (itemRender) {
      return itemRender(item, index, items);
    }

    const url = item.href || '/';
    const isLast = index < lastItemIndex;

    return isLast ? (
      <StyledLink className="easy_breadcrumbs-link" href={url} onClick={() => item.onClick}>
        {item.title}
      </StyledLink>
    ) : (
      <StyledLink className="easy_breadcrumbs-link" disabled>
        {item.title}
      </StyledLink>
    );
  };

  return (
    <StyledBreadcrumbs className="easy_breadcrumbs" {...props}>
      {items.length &&
        items.map((item, index) => (
          <Fragment key={index}>
            {renderItem(item, index)}
            {index < lastItemIndex && <Separator />}
          </Fragment>
        ))}
    </StyledBreadcrumbs>
  );
}

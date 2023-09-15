import { Fragment } from 'react';

import 'material-symbols';

import { StyledBreadcrumbs, StyledLink, StyledSeparator } from './styles';
import type { BreadcrumbsProps, BreadcrumbsItem } from './types';

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
      <StyledLink disabled>{item.title}</StyledLink>
    );
  };

  return (
    <StyledBreadcrumbs>
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

import type { ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types';

export type BreadcrumbsItem = {
  title: ReactNode;
  href?: string;
  onClick?: (e: MouseEvent) => void;
};

export type BreadcrumbsItemWithT<T> = BreadcrumbsItem & T;

export type BreadcrumbsProps<TItem> = Omit<BaseComponentType, 'children'> & {
  itemRender?: (item: BreadcrumbsItemWithT<TItem>, index?: number, items?: BreadcrumbsItemWithT<TItem>[]) => ReactNode;
  items: BreadcrumbsItemWithT<TItem>[];
  separator?: ReactNode;

  separatorProps?: Pick<BaseComponentType, 'style'>;
  breadcrumbsLinkProps?: Pick<BaseComponentType, 'style'>;
  lastBreadcrumbsLinkProps?: Pick<BaseComponentType, 'style'>;
};

export type StyledBreadcrumbPropsType = {
  disabled?: boolean;
};

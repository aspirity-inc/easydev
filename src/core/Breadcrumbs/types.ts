import { ReactNode } from 'react';

export type BreadcrumbsItem = {
  title: ReactNode;
  href?: string;
  onClick?: (e: MouseEvent) => void;
};

export type BreadcrumbsItemWithT<T> = BreadcrumbsItem & T;

export type BreadcrumbsProps<TItem> = {
  itemRender?: (item: BreadcrumbsItemWithT<TItem>, index?: number, items?: BreadcrumbsItemWithT<TItem>[]) => ReactNode;
  items: BreadcrumbsItemWithT<TItem>[];
  separator?: ReactNode;
};

export type StyledBreadcrumbPropsType = {
  disabled?: boolean;
};

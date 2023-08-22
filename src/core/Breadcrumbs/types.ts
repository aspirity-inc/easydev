import { ReactNode } from 'react';

export type BreadcrumbsItem = {
  title: string | ReactNode;
  href?: string;
  onClick?: (e: MouseEvent) => void;
};

export type BreadcrumbsProps<TItem> = {
  itemRender?: (item: BreadcrumbsItem & TItem, index?: number, items?: (BreadcrumbsItem & TItem)[]) => ReactNode;
  items: (BreadcrumbsItem & TItem)[];
  separator?: string | ReactNode;
};

export type StyledBreadcrumbPropsType = {
  disabled?: boolean;
};

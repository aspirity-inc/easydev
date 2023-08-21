import { ReactNode } from 'react';

export type BreadcrumbsItem = {
  title: string | ReactNode;
  href?: string;
  onClick?: (e: MouseEvent) => void;
};

export type BreadcrumbsProps = {
  itemRender?: (item: BreadcrumbsItem) => ReactNode;
  items: BreadcrumbsItem[];
  separator?: string | ReactNode;
};

export type StyledBreadcrumbPropsType = {
  disabled?: boolean;
};

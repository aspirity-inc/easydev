import { ComponentPropsWithoutRef, ReactNode } from 'react';

export const paginationControls = ['next', 'prev', 'first', 'last'] as const;
export type PaginationControlsType = (typeof paginationControls)[number];

export type PaginationIconProps = {
  [key in PaginationControlsType]: ReactNode;
};

export type PaginationProps = {
  total: number;
  page: number;
  onChange: (page: number) => void;
  icons?: PaginationIconProps;
  hidePages?: boolean;
  withEdges?: boolean;
  siblings?: number;
};

export type PaginationButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant: PaginationControlsType;
  icons?: PaginationIconProps;
};

export type PaginationHookParams = {
  page: number;
  total: number;
  siblings: number;
  onChange: (page: number) => void;
};

export type PaginationItemProps = { page: number; active: boolean; onClick: () => void };

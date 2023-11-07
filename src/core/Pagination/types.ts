import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types';

export const paginationControls = ['next', 'prev', 'first', 'last'] as const;
export type PaginationControlsType = (typeof paginationControls)[number];

export type PaginationIconProps = {
  [key in PaginationControlsType]: ReactNode;
};

export type PaginationProps = Omit<BaseComponentType, 'children'> & {
  total: number;
  page: number;
  onChange: (page: number) => void;
  icons?: PaginationIconProps;
  hidePages?: boolean;
  withEdges?: boolean;
  siblings?: number;

  paginationButtonProps?: Pick<BaseComponentType, 'style'>;
  paginationButtonIconProps?: Pick<BaseComponentType, 'style'>;
};

export type PaginationButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant: PaginationControlsType;
  icons?: PaginationIconProps;

  paginationButtonProps?: Pick<BaseComponentType, 'style'>;
  paginationButtonIconProps?: Pick<BaseComponentType, 'style'>;
};

export type PaginationHookParams = {
  page: number;
  total: number;
  siblings: number;
  onChange: (page: number) => void;
};

export type PaginationItemProps = { page: number; active: boolean; onClick: () => void };

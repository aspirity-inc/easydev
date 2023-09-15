import { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react';

export type TableProps = ComponentPropsWithoutRef<'table'> & {
  striped?: boolean;
  withRowBorder?: boolean;
};

export type StyledTableProps = { $striped: boolean; $withRowBorder: boolean };

export type TableCellProps = ComponentPropsWithoutRef<'td'> & {
  variant?: 'th' | 'td';
  align?: CSSProperties['textAlign'];
};

export type StyledTableCellProps = { $variant: string; $align: string };

export type TableRowProps = ComponentPropsWithoutRef<'tr'>;
export type TableHeadProps = ComponentPropsWithoutRef<'thead'>;
export type TableBodyProps = ComponentPropsWithoutRef<'tbody'>;

export type OrderType = 'asc' | 'desc';

export type TableSortLabelProps = ComponentPropsWithoutRef<'button'> & {
  order?: OrderType;
  hideSortIcon?: boolean;
  sortIcon?: ReactNode;
  onClick: () => void;
};

export type TableSortIconProps = ComponentPropsWithoutRef<'div'> & {
  order: OrderType;
  sortIcon?: ReactNode;
};

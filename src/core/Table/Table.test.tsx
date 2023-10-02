import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';

import { EasydevProvider } from '@core/Theme';
import { lightPalette } from '@core/Theme/themePalette';

import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '.';
import { StyledTableBody, StyledTableRow } from './styled';

test('table', () => {
  render(
    <EasydevProvider>
      <Table striped={true} withRowBorder={true}>
        <TableBody>
          <TableRow>row</TableRow>
        </TableBody>
      </Table>
    </EasydevProvider>
  );

  const table = screen.getByRole('table');
  expect(table).toHaveStyleRule('background-color', lightPalette.surface['200'], {
    modifier: `& ${StyledTableBody.toString()} ${StyledTableRow.toString()}:nth-of-type(odd)`,
  });
  expect(table).toHaveStyleRule('border-bottom', `1px solid ${lightPalette.surface['400']}`, {
    modifier: `& ${StyledTableRow.toString()}`,
  });
});

test('table cell', () => {
  render(
    <EasydevProvider>
      <Table striped={true} withRowBorder={true}>
        <TableBody>
          <TableRow>
            <TableCell variant="td" align="center">
              cell
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </EasydevProvider>
  );

  const cell = screen.getByText('cell');
  expect(cell.tagName).toBe('TD');
  expect(cell).toHaveStyleRule('text-align', 'center');
});

test('table body props', () => {
  render(
    <EasydevProvider>
      <Table striped={true} withRowBorder={true}>
        <TableBody color="#ededed">body</TableBody>
      </Table>
    </EasydevProvider>
  );

  expect(screen.getByText('body')).toHaveAttribute('color', '#ededed');
});

test('table head props', () => {
  render(
    <EasydevProvider>
      <Table striped={true} withRowBorder={true}>
        <TableHead color="#ededed">head</TableHead>
      </Table>
    </EasydevProvider>
  );

  expect(screen.getByText('head')).toHaveAttribute('color', '#ededed');
});

test('table row props', () => {
  render(
    <EasydevProvider>
      <Table striped={true} withRowBorder={true}>
        <TableBody>
          <TableRow color="#ededed">row</TableRow>
        </TableBody>
      </Table>
    </EasydevProvider>
  );

  expect(screen.getByText('row')).toHaveAttribute('color', '#ededed');
});

test('table sort label', async () => {
  const mockFn = vi.fn();
  render(
    <EasydevProvider>
      <Table striped={true} withRowBorder={true}>
        <TableHead>
          <TableCell variant="th">
            <TableSortLabel order="desc" onClick={mockFn}>
              col1
            </TableSortLabel>
          </TableCell>
        </TableHead>
      </Table>
    </EasydevProvider>
  );

  const columnElement = screen.getByText('col1');
  expect(columnElement.childNodes[1]).toHaveStyleRule('transform', 'rotate(180deg)');

  await userEvent.click(columnElement);
  expect(mockFn).toBeCalledTimes(1);
});

test('sortIcon', () => {
  const mockFn = vi.fn();
  render(
    <EasydevProvider>
      <Table striped={true} withRowBorder={true}>
        <TableHead>
          <TableCell variant="th">
            <TableSortLabel
              order="desc"
              onClick={mockFn}
              sortIcon={<div className="material-symbols-rounded">add</div>}
            >
              col1
            </TableSortLabel>
          </TableCell>
        </TableHead>
      </Table>
    </EasydevProvider>
  );

  const customIcon = screen.getByText('add');
  expect(customIcon.className).toBe('material-symbols-rounded');
});

test('hideSortIcon', () => {
  const mockFn = vi.fn();
  const { container } = render(
    <EasydevProvider>
      <Table striped={true} withRowBorder={true}>
        <TableHead>
          <TableCell variant="th">
            <TableSortLabel order="desc" onClick={mockFn} hideSortIcon>
              col1
            </TableSortLabel>
          </TableCell>
        </TableHead>
      </Table>
    </EasydevProvider>
  );

  expect(container.querySelector('material-symbols-rounded')).not.toBeInTheDocument();
});

import {
  OrderType,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Flex,
  Subtitle,
  Avatar,
  Checkbox,
  Center,
  Badge,
  ProgressBar,
  Pagination,
  TableSortLabel,
  useEasyThemeContext,
} from '@aspirity/easydev';

import { ChangeEvent, useState } from 'react';
import { StyledPaginationInfo, StyledTableBorderWrap } from './styles';
import { columnData, generateLongDataArray, rowData } from '@src/assets/data/tableData';

type TableDataType = {
  [key: string]: string | number;
};

const generatedData = generateLongDataArray(rowData, 3);

export const ClientTable = () => {
  const { type } = useEasyThemeContext();
  const [data, setData] = useState<TableDataType[]>(generatedData);
  const [sortOrder, setSortOrder] = useState<OrderType>('asc');
  const [sortedBy, setSortedBy] = useState<keyof TableDataType | null>(null);
  const [selected, setSelected] = useState<number[]>([]);

  const sortByColumn = (column: keyof TableDataType) => {
    const currentSortOrder =
      sortedBy === column ? (sortOrder === 'asc' ? 'desc' : sortOrder === 'desc' ? 'default' : 'asc') : 'asc';

    const sortedData = [...data].sort((a, b) => {
      if (a[column] < b[column]) return currentSortOrder === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return currentSortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setData(currentSortOrder === 'default' ? generatedData : sortedData);
    setSortOrder(currentSortOrder);
    setSortedBy(column);
  };

  const selectAllRows = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = data.map((item) => Number(item.id));
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const selectItem = (id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelectedIds: number[];

    if (selectedIndex === -1) {
      newSelectedIds = [...selected, id];
    } else {
      newSelectedIds = [...selected.slice(0, selectedIndex), ...selected.slice(selectedIndex + 1)];
    }

    setSelected(newSelectedIds);
  };

  //Pagination state
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <StyledTableBorderWrap align="flex-end" direction="column">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="th">
              <Center>
                <Checkbox checked={data.length > 0 && selected.length === data.length} onChange={selectAllRows} />
              </Center>
            </TableCell>
            {columnData.map((column) => (
              <TableCell variant="th" key={column.label}>
                <TableSortLabel
                  hideSortIcon={sortedBy !== column.label || sortOrder === 'default'}
                  order={sortedBy === column.label ? sortOrder : undefined}
                  onClick={() => sortByColumn(column.label)}
                >
                  {column.title}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {currentItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Center>
                  <Checkbox checked={isSelected(Number(item.id))} onChange={() => selectItem(Number(item.id))} />
                </Center>
              </TableCell>
              <TableCell>
                <Flex gap={8} wrap="nowrap">
                  <Avatar size="sm" alt="photo" src={item.src_img.toString()} />
                  <Flex direction="column" align="flex-start">
                    <Subtitle as="h4" level={4}>
                      {item.name} {item.id}
                    </Subtitle>
                    {item.nickname}
                  </Flex>
                </Flex>
              </TableCell>
              <TableCell>
                <Badge color={item.status === 'inactive' ? 'warning' : 'success'}>{item.status}</Badge>
              </TableCell>
              <TableCell>{item.last_visit}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>
                <ProgressBar value={Number(item.volume)} />
              </TableCell>
              <TableCell>{item.procedure}</TableCell>
              <TableCell>
                <Center>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    fill={type === 'light' ? '#272729' : '#E6E6E6'}
                    style={{ cursor: 'pointer' }}
                  >
                    <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                  </svg>
                </Center>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Flex gap={32} style={{ padding: '12px 16px' }}>
        <StyledPaginationInfo>
          {indexOfFirstItem + 1}-{indexOfLastItem} of {data.length}{' '}
        </StyledPaginationInfo>
        <Pagination page={page} onChange={setPage} total={totalPages} siblings={1} withEdges={true} />
      </Flex>
    </StyledTableBorderWrap>
  );
};

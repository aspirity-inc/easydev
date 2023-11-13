import {
  OrderType,
  Flex,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Center,
  Checkbox,
  TableSortLabel,
  TableBody,
  Avatar,
  Subtitle,
  Badge,
  AvatarGroup,
  Pagination,
  Text,
  useEasyThemeContext,
} from '@aspirity/easydev';
import { useState, ChangeEvent } from 'react';

import { StyledPagination, StyledPaginationInfo, StyledTableBorderWrap } from '../styles';
import type { TableDataType } from '../types';

import { columnDataProject, generatedProjectData } from '@src/assets/data/tables-page/tablesData';

export const ProjectsTable = () => {
  const { type } = useEasyThemeContext();

  const [data, setData] = useState(generatedProjectData);
  const [sortOrder, setSortOrder] = useState<OrderType>('default');
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

    setData(currentSortOrder === 'default' ? generatedProjectData : sortedData);
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

  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <StyledTableBorderWrap style={{ marginBottom: 48 }}>
      <Table striped>
        <TableHead>
          <TableRow>
            <TableCell variant="th">
              <Center>
                <Checkbox checked={data.length > 0 && selected.length === data.length} onChange={selectAllRows} />
              </Center>
            </TableCell>
            {columnDataProject.map((column) => (
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
            <TableRow key={item.id as number}>
              <TableCell>
                <Center>
                  <Checkbox checked={isSelected(Number(item.id))} onChange={() => selectItem(Number(item.id))} />
                </Center>
              </TableCell>
              <TableCell>
                <Flex gap={8} wrap="nowrap">
                  <Avatar size="sm" alt="photo" src={item.projectImage as string} style={{ marginRight: 8 }} />
                  <Flex direction="column" align="flex-start">
                    <Subtitle as="h4" level={4}>
                      {item.projectName}
                    </Subtitle>
                    <Text variant="body2">{item.tag}</Text>
                  </Flex>
                </Flex>
              </TableCell>
              <TableCell>
                <Badge
                  style={{
                    color:
                      item.status === 'Time & Material'
                        ? type === 'light'
                          ? '#134D90'
                          : '#006770'
                        : type === 'light'
                        ? '#4200D2'
                        : '#8B6CF1',
                    backgroundColor:
                      item.status === 'Time & Material'
                        ? type === 'light'
                          ? '#EDE5FF'
                          : '#E3FFFF'
                        : type === 'light'
                        ? '#D5E6FA'
                        : '#ECE7FE',
                    padding: '4px 12px',
                  }}
                >
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell>{item.dateStart}</TableCell>
              <TableCell>{item.generalTask}</TableCell>
              <TableCell>
                <AvatarGroup
                  spacing={12}
                  groupItemProps={{
                    style: {
                      backgroundColor: type === 'light' ? '#D5E6FA' : '#E3FFFF',
                      color: type === 'light' ? '#267EE3' : '#00B1CE',
                    },
                  }}
                >
                  {(item.teamMembers as string[]).map((avatarSrc, i) => {
                    return <Avatar size="xs" src={avatarSrc} key={i} />;
                  })}
                </AvatarGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <StyledPagination gap={32} justify="flex-end">
        <StyledPaginationInfo>
          {indexOfFirstItem + 1}-{indexOfLastItem} of {data.length}{' '}
        </StyledPaginationInfo>
        <Pagination page={page} onChange={setPage} total={totalPages} siblings={3} withEdges={true} />
      </StyledPagination>
    </StyledTableBorderWrap>
  );
};

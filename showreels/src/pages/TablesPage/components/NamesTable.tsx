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
  ProgressBar,
  Pagination,
  Text,
} from '@aspirity/easydev';
import { useState, ChangeEvent } from 'react';

import { StyledPagination, StyledPaginationInfo, StyledTableBorderWrap } from '../styles';
import type { TableDataType } from '../types';

import AvatarImage1 from '@src/assets/img/table/avatars/1.png';
import AvatarImage2 from '@src/assets/img/table/avatars/2.png';
import AvatarImage3 from '@src/assets/img/table/avatars/3.png';
import AvatarImage4 from '@src/assets/img/table/avatars/4.png';
import AvatarImage5 from '@src/assets/img/table/avatars/5.png';
import AvatarImage6 from '@src/assets/img/table/avatars/6.png';
import AvatarImage7 from '@src/assets/img/table/avatars/7.png';
import AvatarImage8 from '@src/assets/img/table/avatars/8.png';
import AvatarImage9 from '@src/assets/img/table/avatars/9.png';

const namesTableData: TableDataType[] = [
  {
    id: 1,
    avatarImage: AvatarImage1,
    name: 'Jane Cooper',
    tag: '@professor1985',
    status: 'Active',
    dateStart: '2020-06-29',
    courseName: 'Financial Accounting Fundamentals',
    progress: 50,
    lastUpdate: '2 minutes ago',
  },
  {
    id: 2,
    avatarImage: AvatarImage2,
    name: 'Robert Fox',
    tag: '@CoolMaster',
    status: 'Active',
    dateStart: '2020-03-09',
    courseName: 'UX/UI Design Principles',
    progress: 30,
    lastUpdate: '12 hours ago',
  },
  {
    id: 3,
    avatarImage: AvatarImage3,
    name: 'Eleanor Pena',
    tag: '@imyourgod',
    status: 'Active',
    dateStart: '2020-01-12',
    courseName: 'Business Analytics and Visualization',
    progress: 60,
    lastUpdate: '2 hours ago',
  },
  {
    id: 4,
    avatarImage: AvatarImage4,
    name: 'Guy Hawkins',
    tag: '@1234567',
    status: 'Active',
    dateStart: '2020-07-15',
    courseName: 'Introduction to JavaScript',
    progress: 50,
    lastUpdate: '2 minutes ago',
  },
  {
    id: 5,
    avatarImage: AvatarImage5,
    name: 'Esther Howard',
    tag: '@Copycat',
    status: 'Inactive',
    dateStart: '2020-05-30',
    courseName: 'Public Speaking Mastery',
    progress: 50,
    lastUpdate: '3 days ago',
  },
  {
    id: 6,
    avatarImage: AvatarImage6,
    name: 'Cameron Williamson',
    tag: '@username',
    status: 'Active',
    dateStart: '2020-07-23',
    courseName: 'Artificial Intelligence and Machine Learning',
    progress: 50,
    lastUpdate: '2 hours ago',
  },
  {
    id: 7,
    avatarImage: AvatarImage7,
    name: 'Arlene McCoy',
    tag: '@BestDesigner',
    status: 'Inactive',
    dateStart: '2020-05-06',
    courseName: 'Front-end Web Development with HTML/CSS',
    progress: 50,
    lastUpdate: '2 hours ago',
  },
  {
    id: 8,
    avatarImage: AvatarImage8,
    name: 'Leslie Alexander',
    tag: '@angrymuffin',
    status: 'Active',
    dateStart: '2020-06-18',
    courseName: 'Photography Masterclass',
    progress: 50,
    lastUpdate: '10 minutes ago',
  },
  {
    id: 9,
    avatarImage: AvatarImage9,
    name: 'Jacob Jones',
    tag: '@JJones',
    status: 'Active',
    dateStart: '2020-07-15',
    courseName: 'Mobile App Development with React Native',
    progress: 70,
    lastUpdate: '22 hours ago',
  },
];

const generateNamesData = () => {
  const array: TableDataType[] = [];

  for (let i = 0; i < 5; i++) {
    namesTableData.forEach((nameTableData, index) => {
      array.push({ ...nameTableData, id: i * 10 + index });
    });
  }

  return array;
};

const columnDataNames: TableDataType[] = [
  {
    title: 'Name',
    label: 'name',
  },
  {
    title: 'Status',
    label: 'status',
  },
  {
    title: 'Date start',
    label: 'dateStart',
  },
  {
    title: 'Course name',
    label: 'course',
  },
  {
    title: 'Progress',
    label: 'progress',
  },
  {
    title: 'Last update',
    label: 'updated',
  },
];

const generatedNamesData = generateNamesData();

export const NamesTable = () => {
  const [data, setData] = useState<TableDataType[]>(generatedNamesData);
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

    setData(currentSortOrder === 'default' ? generatedNamesData : sortedData);
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
            {columnDataNames.map((column) => (
              <TableCell variant="th" key={column.label as number}>
                <TableSortLabel
                  hideSortIcon={sortedBy !== column.label || sortOrder === 'default'}
                  order={sortedBy === column.label ? sortOrder : undefined}
                  onClick={() => sortByColumn(column.label as string)}
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
                  <Avatar size="sm" alt="photo" src={item.avatarImage as string} style={{ marginRight: 8 }} />
                  <Flex direction="column" align="flex-start">
                    <Subtitle as="h4" level={4}>
                      {item.name}
                    </Subtitle>
                    <Text variant="body2">{item.tag}</Text>
                  </Flex>
                </Flex>
              </TableCell>
              <TableCell>
                <Badge color={item.status === 'Inactive' ? 'warning' : 'success'} style={{ padding: '4px 12px' }}>
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell>{item.dateStart}</TableCell>
              <TableCell>{item.courseName}</TableCell>
              <TableCell>
                <ProgressBar value={Number(item.progress)} />
              </TableCell>
              <TableCell>{item.lastUpdate}</TableCell>
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

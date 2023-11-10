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
import type { TableDataType, TableHeadType } from '../types';

import ProjectImage1 from '@src/assets/img/table/avatars/projects/1.png';
import ProjectImage2 from '@src/assets/img/table/avatars/projects/2.png';
import ProjectImage3 from '@src/assets/img/table/avatars/projects/3.png';
import ProjectImage4 from '@src/assets/img/table/avatars/projects/4.png';
import ProjectImage5 from '@src/assets/img/table/avatars/projects/5.png';
import ProjectImage6 from '@src/assets/img/table/avatars/projects/6.png';
import ProjectImage7 from '@src/assets/img/table/avatars/projects/7.png';
import ProjectImage8 from '@src/assets/img/table/avatars/projects/8.png';
import ProjectImage9 from '@src/assets/img/table/avatars/projects/9.png';

import AvatarImage1 from '@src/assets/img/table/avatars/1.png';
import AvatarImage2 from '@src/assets/img/table/avatars/2.png';
import AvatarImage3 from '@src/assets/img/table/avatars/3.png';
import AvatarImage4 from '@src/assets/img/table/avatars/4.png';
import AvatarImage5 from '@src/assets/img/table/avatars/5.png';
import AvatarImage6 from '@src/assets/img/table/avatars/6.png';
import AvatarImage7 from '@src/assets/img/table/avatars/7.png';
import AvatarImage8 from '@src/assets/img/table/avatars/8.png';
import AvatarImage9 from '@src/assets/img/table/avatars/9.png';

const projectNameTableData: TableDataType[] = [
  {
    id: 1,
    projectImage: ProjectImage1,
    projectName: 'Performante',
    tag: 'degussa-goldhandel.de',
    status: 'Fixed Price',
    dateStart: '2020-06-29',
    generalTask: 'Financial Accounting Fundamentals',
    teamMembers: [
      AvatarImage1,
      AvatarImage2,
      AvatarImage3,
      AvatarImage4,
      AvatarImage5,
      AvatarImage6,
      AvatarImage7,
      AvatarImage8,
      AvatarImage9,
      AvatarImage6,
      AvatarImage7,
      AvatarImage8,
      AvatarImage9,
    ],
  },
  {
    id: 2,
    projectImage: ProjectImage2,
    tag: 'velum.biz',
    projectName: 'Wintheiser LLC',
    status: 'Fixed Price',
    dateStart: '2020-03-09',
    generalTask: 'Devide milking group for better hierarchy',
    teamMembers: [AvatarImage1, AvatarImage2, AvatarImage3, AvatarImage4, AvatarImage5],
  },
  {
    id: 3,
    projectImage: ProjectImage3,
    tag: 'transnova-ruf.de',
    projectName: 'Batz Group',
    status: 'Fixed Price',
    dateStart: '2020-01-12',
    generalTask: 'Push feed after milking',
    teamMembers: [AvatarImage1, AvatarImage2, AvatarImage3, AvatarImage4, AvatarImage5, AvatarImage6, AvatarImage7],
  },
  {
    id: 4,
    projectImage: ProjectImage4,
    tag: 'gevekom.de',
    projectName: 'Verify',
    status: 'Time & Material',
    dateStart: '2020-07-15',
    generalTask: 'Devide milking group for better hierarchy',
    teamMembers: [
      AvatarImage1,
      AvatarImage2,
      AvatarImage3,
      AvatarImage4,
      AvatarImage5,
      AvatarImage6,
      AvatarImage7,
      AvatarImage8,
    ],
  },
  {
    id: 5,
    projectImage: ProjectImage5,
    tag: 'klotz.de',
    projectName: 'Advanta Inc.',
    status: 'Time & Material',
    dateStart: '2020-05-30',
    generalTask: 'Change bedding for all cows',
    teamMembers: [AvatarImage1, AvatarImage2, AvatarImage3, AvatarImage4, AvatarImage5, AvatarImage6, AvatarImage7],
  },
  {
    id: 6,
    projectImage: ProjectImage6,
    tag: 'aristo-pharma.de',
    projectName: 'Solenoid',
    status: 'Fixed Price',
    dateStart: '2020-07-23',
    generalTask: 'Push feed after milking',
    teamMembers: [
      AvatarImage1,
      AvatarImage2,
      AvatarImage3,
      AvatarImage4,
      AvatarImage5,
      AvatarImage6,
      AvatarImage7,
      AvatarImage8,
      AvatarImage9,
    ],
  },
  {
    id: 7,
    projectImage: ProjectImage7,
    tag: 'peachproperty.com',
    projectName: 'FastTrak',
    status: 'Time & Material',
    dateStart: '2020-05-06',
    generalTask: 'Change bedding for all cows',
    teamMembers: [AvatarImage1, AvatarImage2, AvatarImage3, AvatarImage4, AvatarImage5],
  },
  {
    id: 8,
    projectImage: ProjectImage8,
    tag: 'hr-industrierohrbau.de',
    projectName: 'Rapid Dynamics',
    status: 'Fixed Price',
    dateStart: '2020-06-18',
    generalTask: 'Stabilise feeding pattern',
    teamMembers: [AvatarImage1, AvatarImage2, AvatarImage3],
  },
  {
    id: 9,
    projectImage: ProjectImage9,
    tag: 'fabasoft.com',
    projectName: 'TypeSafe',
    status: 'Fixed Price',
    dateStart: '2020-07-15',
    generalTask: 'Stabilise feeding pattern',
    teamMembers: [AvatarImage1, AvatarImage2, AvatarImage3, AvatarImage4],
  },
];

const generateProjectData = () => {
  const array: TableDataType[] = [];

  for (let i = 0; i < 5; i++) {
    projectNameTableData.forEach((nameTableData, index) => {
      array.push({
        ...nameTableData,
        id: i * 10 + index,
      });
    });
  }

  return array;
};

const columnDataProject: TableHeadType[] = [
  {
    title: 'Project Name',
    label: 'projectName',
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
    title: 'General task',
    label: 'generalTask',
  },
  {
    title: 'Team members',
    label: 'teamMembers',
  },
];

const generatedProjectData = generateProjectData();

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

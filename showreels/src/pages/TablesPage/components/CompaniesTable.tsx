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
  Pagination,
  useEasyThemeContext,
  Text,
} from '@aspirity/easydev';
import { useState, ChangeEvent } from 'react';

import ProjectImage1 from '@src/assets/img/table/avatars/projects/1.png';
import ProjectImage2 from '@src/assets/img/table/avatars/projects/2.png';
import ProjectImage3 from '@src/assets/img/table/avatars/projects/3.png';
import ProjectImage4 from '@src/assets/img/table/avatars/projects/4.png';
import ProjectImage5 from '@src/assets/img/table/avatars/projects/5.png';
import ProjectImage6 from '@src/assets/img/table/avatars/projects/6.png';
import ProjectImage7 from '@src/assets/img/table/avatars/projects/7.png';
import ProjectImage8 from '@src/assets/img/table/avatars/projects/8.png';
import ProjectImage9 from '@src/assets/img/table/avatars/projects/9.png';

import type { TableDataType } from '../types';
import { StyledPagination, StyledPaginationInfo, StyledTableBorderWrap } from '../styles';

const companyTableData: TableDataType[] = [
  {
    id: 1,
    name: 'Aluminium Works',
    companyAvatar: ProjectImage1,
    clientCompany: 'Performante',
    status: 'Completed',
    deadline: '2020-06-2029',
    category: 'Swimming pool',
    budget: '$876,320',
  },
  {
    id: 2,
    name: 'General Builder Class 3',
    companyAvatar: ProjectImage2,
    clientCompany: 'Wintheiser LLC',
    status: 'In progress',
    deadline: '2020-06-2029',
    category: 'Garden',
    budget: '$400,000',
  },
  {
    id: 3,
    name: 'Scaffolding Works',
    companyAvatar: ProjectImage3,
    clientCompany: 'Batz Group',
    status: 'In progress',
    deadline: '2020-06-2029',
    category: 'Park',
    budget: '$876,320',
  },
  {
    id: 4,
    name: 'Plumbing and Sanitary Works',
    companyAvatar: ProjectImage4,
    clientCompany: 'Verify',
    status: 'Completed',
    deadline: '2020-06-2029',
    category: 'Interior',
    budget: '$1,236,000',
  },
  {
    id: 5,
    name: 'Pre-cast Concrete Works',
    companyAvatar: ProjectImage5,
    clientCompany: 'Advanta Inc.',
    status: 'On hold',
    deadline: '2020-06-2029',
    category: 'Estate',
    budget: '$400,000',
  },
  {
    id: 6,
    name: 'Demolition Works',
    companyAvatar: ProjectImage6,
    clientCompany: 'Solenoid',
    status: 'Canceled',
    deadline: '2020-06-2029',
    category: 'Home',
    budget: '$6,000,000',
  },
  {
    id: 7,
    name: 'Lift and Escalator Works',
    companyAvatar: ProjectImage7,
    clientCompany: 'FastTrak',
    status: 'On hold',
    deadline: '2020-06-2029',
    category: 'Golf Ground',
    budget: '$764,000',
  },
  {
    id: 8,
    name: 'Piling Works',
    companyAvatar: ProjectImage8,
    clientCompany: 'Rapid Dynamics',
    status: 'Completed',
    deadline: '2020-06-2029',
    category: 'Hotel',
    budget: '$886,320',
  },
  {
    id: 9,
    name: 'Waterproofing Works',
    companyAvatar: ProjectImage9,
    clientCompany: 'TypeSafe',
    status: 'Completed',
    deadline: '2020-06-2029',
    category: 'Guest House',
    budget: '$764,000',
  },
];

const generateCompanyData = () => {
  const array: TableDataType[] = [];

  for (let i = 0; i < 5; i++) {
    companyTableData.forEach((nameTableData, index) => {
      array.push({ ...nameTableData, id: i * 10 + index });
    });
  }

  return array;
};

const columnDataCompany: TableDataType[] = [
  {
    title: 'Name',
    label: 'name',
  },
  {
    title: 'Client/Company',
    label: 'clientCompany',
  },
  {
    title: 'Status',
    label: 'status',
  },
  {
    title: 'Deadline',
    label: 'deadline',
  },
  {
    title: 'Category',
    label: 'category',
  },
  {
    title: 'Budget',
    label: 'budget',
  },
];

const getStatusCss = (statusType: string, themeType: string) => {
  switch (statusType) {
    case 'Completed':
      return {
        color: themeType === 'light' ? '#1A6600' : '##3F3A43',
        backgroundColor: themeType === 'light' ? '#DFFFD7' : '#E6E6E6',
      };
    case 'Canceled':
      return {
        color: themeType === 'light' ? '#740000' : '#B71C1B',
        backgroundColor: themeType === 'light' ? '#FFBBBB' : '#FFEBEE',
      };
    case 'On hold':
      return {
        color: themeType === 'light' ? '#272729' : '#2A282C',
        backgroundColor: themeType === 'light' ? '#FBFBFE' : '#E6E6E6',
      };
    case 'In progress':
      return {
        color: themeType === 'light' ? '#E75403' : '#623C04',
        backgroundColor: themeType === 'light' ? '#FFF4E0' : '#FFE7C2',
      };
    default:
      return {
        color: themeType === 'light' ? '' : '',
        backgroundColor: themeType === 'light' ? '' : '',
      };
  }
};

const generatedCompanyData = generateCompanyData();

export const CompaniesTable = () => {
  const { type } = useEasyThemeContext();

  const [data, setData] = useState(generatedCompanyData);
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

    setData(currentSortOrder === 'default' ? generatedCompanyData : sortedData);
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
    <StyledTableBorderWrap>
      <Table striped>
        <TableHead>
          <TableRow>
            <TableCell variant="th">
              <Center>
                <Checkbox checked={data.length > 0 && selected.length === data.length} onChange={selectAllRows} />
              </Center>
            </TableCell>
            {columnDataCompany.map((column) => (
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
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Flex gap={8} wrap="nowrap">
                  <Avatar size="sm" alt="photo" src={item.companyAvatar as string} style={{ marginRight: 8 }} />
                  <Flex direction="column" align="flex-start">
                    <Subtitle as="h4" level={4}>
                      {item.clientCompany}
                    </Subtitle>
                  </Flex>
                </Flex>
              </TableCell>
              <TableCell>
                <Badge style={{ ...getStatusCss(item.status as string, type!), padding: '4px 12px' }}>
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell>{item.deadline}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text variant="body2">{item.budget}</Text>
                <Center style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
      <StyledPagination gap={32} justify="flex-end">
        <StyledPaginationInfo>
          {indexOfFirstItem + 1}-{indexOfLastItem} of {data.length}{' '}
        </StyledPaginationInfo>
        <Pagination page={page} onChange={setPage} total={totalPages} siblings={3} withEdges={true} />
      </StyledPagination>
    </StyledTableBorderWrap>
  );
};

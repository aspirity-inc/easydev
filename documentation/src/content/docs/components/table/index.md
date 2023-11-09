---
title: Table
---

The Table display sets of data. You can customize it as you want.

The Table component can have the next props: striped, withRowBorder. [See there](/storybook/?path=/docs/core-table--docs) to get more information.

## Table variants

### [Default Table](/storybook/?path=/story/core-table--default-table)

```tsx
type TableDataType = {
  [key: string]: string | number;
};

const columnData: TableDataType[] = [
  {
    title: 'Name',
    label: 'name',
  },
  {
    title: 'Status',
    label: 'status',
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

const rowData: TableDataType[] = [
  {
    id: 1,
    name: 'Jane Cooper',
    nickname: '@professor1985',
    status: 'inactive',
    course: 'Financial Accounting Fundamentals',
    progress: '13',
    updated: '2 minutes ago',
    src_img:
      'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1693801961~exp=1693802561~hmac=7555601ef0121b3c969f8485d8595331e3e576d084f4fe459c9c65862ddb422b',
  },
  {
    id: 2,
    name: 'Robert Fox',
    nickname: '@CoolMaster',
    status: 'active',
    course: 'UX/UI Design Principles',
    progress: '78',
    updated: '2 days ago',
    src_img:
      'https://img.freepik.com/premium-vector/hand-drawing-cartoon-girl-wearing-scarf-cute-girl-drawing-for-profile-picture_488586-712.jpg?w=826',
  },
  {
    id: 3,
    name: 'Esther Howard',
    nickname: '@Copycat',
    status: 'active',
    course: 'Business Analytics and Visualization',
    progress: '50',
    updated: '12 hours ago',
    src_img:
      'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-a-cigarette_52683-34828.jpg?w=826&t=st=1694516654~exp=1694517254~hmac=7bc78aa04f6a70f5ae327c65200540e0f002fc0aafda97a1957c2af810a57586',
  },
];

const StyledTableBorderWrap = styled(Flex)`
  border: 1px solid ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['900']};
  border-radius: 8px;
  overflow: hidden;
`;

const DefaultTable = () => {
  const [data, setData] = useState<TableDataType[]>(rowData);
  const [sortOrder, setSortOrder] = useState<OrderType>('default');
  const [sortedBy, setSortedBy] = useState<keyof TableDataType | null>(null);
  const [selected, setSelected] = useState<number[]>([]);

  const currentSortOrder =
    sortedBy === column ? (sortOrder === 'asc' ? 'desc' : sortOrder === 'desc' ? 'default' : 'asc') : 'asc';

  const sortByColumn = (column: keyof TableDataType) => {
    const sortedData = [...data].sort((a, b) => {
      if (a[column] < b[column]) return currentSortOrder === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return currentSortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setData(currentSortOrder === 'default' ? rowData : sortedData);
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

  return (
    <StyledTableBorderWrap>
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
          {data.map((item) => (
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
                      {item.name}
                    </Subtitle>
                    {item.nickname}
                  </Flex>
                </Flex>
              </TableCell>
              <TableCell>
                <Badge color={item.status === 'inactive' ? 'warning' : 'success'}>{item.status}</Badge>
              </TableCell>
              <TableCell>{item.course}</TableCell>
              <TableCell>
                <ProgressBar value={Number(item.progress)} />
              </TableCell>
              <TableCell>{item.updated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableBorderWrap>
  );
};
```

### [Table With Pagination](/storybook/?path=/story/core-table--table-with-pagination)

```tsx
type TableDataType = {
  [key: string]: string | number;
};

const columnData: TableDataType[] = [
  {
    title: 'Name',
    label: 'name',
  },
  {
    title: 'Status',
    label: 'status',
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

const rowData: TableDataType[] = [
  {
    id: 1,
    name: 'Jane Cooper',
    nickname: '@professor1985',
    status: 'inactive',
    course: 'Financial Accounting Fundamentals',
    progress: '13',
    updated: '2 minutes ago',
    src_img:
      'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1693801961~exp=1693802561~hmac=7555601ef0121b3c969f8485d8595331e3e576d084f4fe459c9c65862ddb422b',
  },
  {
    id: 2,
    name: 'Robert Fox',
    nickname: '@CoolMaster',
    status: 'active',
    course: 'UX/UI Design Principles',
    progress: '78',
    updated: '2 days ago',
    src_img:
      'https://img.freepik.com/premium-vector/hand-drawing-cartoon-girl-wearing-scarf-cute-girl-drawing-for-profile-picture_488586-712.jpg?w=826',
  },
  {
    id: 3,
    name: 'Esther Howard',
    nickname: '@Copycat',
    status: 'active',
    course: 'Business Analytics and Visualization',
    progress: '50',
    updated: '12 hours ago',
    src_img:
      'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-a-cigarette_52683-34828.jpg?w=826&t=st=1694516654~exp=1694517254~hmac=7bc78aa04f6a70f5ae327c65200540e0f002fc0aafda97a1957c2af810a57586',
  },
];

const StyledTableBorderWrap = styled(Flex)`
  border: 1px solid ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['900']};
  border-radius: 8px;
  overflow: hidden;
`;

const StyledPaginationInfo = styled('div')`
  ${getSubtitleLevelStyles(5)}
  font-family: inherit;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['600'] : theme.colors.surface['300'])};
`;

function generateLongDataArray(data: TableDataType[], n: number): TableDataType[] {
  const newData: TableDataType[] = [];
  let currentId = 1;
  for (let i = 0; i < n; i++) {
    for (const item of data) {
      newData.push({
        ...item,
        id: currentId,
        progress: Math.floor(Math.random() * (100 - 1)),
        status: Math.random() < 0.5 ? 'active' : 'inactive',
      });
      currentId++;
    }
  }
  return newData;
}
const generatedData = generateLongDataArray(rowData, 3);

const TableWithPagination = () => {
  const [data, setData] = useState<TableDataType[]>(generatedData);
  const [sortOrder, setSortOrder] = useState<OrderType>('default');
  const [sortedBy, setSortedBy] = useState<keyof TableDataType | null>(null);
  const [selected, setSelected] = useState<number[]>([]);

  const sortByColumn = (column: keyof TableDataType) => {
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
              <TableCell>{item.course}</TableCell>
              <TableCell>
                <ProgressBar value={Number(item.progress)} />
              </TableCell>
              <TableCell>{item.updated}</TableCell>
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
```

## CSS

The following class names are useful for styling with CSS.

| Class               | Description                            |
| ------------------- | -------------------------------------- |
| **easy_table**      | Styles applied to the root element.    |
| **easy_table-body** | Styles applied to the table body.      |
| **easy_table-cell** | Styles applied to the table cell.      |
| **easy_table-head** | Styles applied to the table head cell. |
| **easy_table-row**  | Styles applied to the table row.       |

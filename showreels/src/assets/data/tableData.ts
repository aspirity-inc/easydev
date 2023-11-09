import { TableDataType } from '@easydev';
import avatar2 from '@src/assets/img/avatars/avatar2.png';
import avatar3 from '@src/assets/img/avatars/avatar3.png';
import avatar4 from '@src/assets/img/avatars/avatar4.png';
import avatar5 from '@src/assets/img/avatars/avatar5.png';
import avatar6 from '@src/assets/img/avatars/avatar6.png';

type TableDataType = {
  [key: string]: string | number;
};

export const columnData: TableDataType[] = [
  {
    title: 'Name',
    label: 'name',
  },
  {
    title: 'Status',
    label: 'status',
  },
  {
    title: 'Last visit',
    label: 'last_visit',
  },
  {
    title: 'Number phone',
    label: 'phone',
  },
  {
    title: 'Income volume',
    label: 'volume',
  },
  {
    title: 'Last procedure',
    label: 'procedure',
  },
];

export const rowData: TableDataType[] = [
  {
    id: 1,
    name: 'Jane Cooper',
    nickname: '@professor1985',
    status: 'inactive',
    last_visit: '2020-06-29',
    phone: '+ 13 999 991 00 00',
    volume: '50',
    procedure: 'Nude make up',
    src_img: avatar2,
  },
  {
    id: 2,
    name: 'Robert Fox',
    nickname: '@CoolMaster',
    status: 'active',
    last_visit: '2020-06-29',
    phone: '+ 13 999 991 00 00',
    volume: '20',
    procedure: 'Evening make up',
    src_img: avatar3,
  },
  {
    id: 3,
    name: 'Eleanor Pena',
    nickname: '@imyourgod',
    status: 'active',
    last_visit: '2020-06-29',
    phone: '+ 13 999 991 00 00',
    volume: '10',
    procedure: 'Nude make up',
    src_img: avatar4,
  },
  {
    id: 4,
    name: 'Guy Hawkins',
    nickname: '@1234567',
    status: 'inactive',
    last_visit: '2020-06-29',
    phone: '+ 13 999 991 00 00',
    volume: '5',
    procedure: 'Evening make up',
    src_img: avatar5,
  },
  {
    id: 5,
    name: 'Esther Howard',
    nickname: '@Copycat',
    status: 'inactive',
    last_visit: '2020-06-29',
    phone: '+ 13 999 991 00 00',
    volume: '5',
    procedure: 'Nude make up',
    src_img: avatar6,
  },
];

export function generateLongDataArray(
  data: TableDataType[],
  n: number
): TableDataType[] {
  const newData: TableDataType[] = [];
  let currentId = 1;

  for (let i = 0; i < n; i++) {
    for (const item of data) {
      newData.push({
        ...item,
        id: currentId,
        volume: Math.floor(Math.random() * (100 - 1)),
        status: Math.random() < 0.5 ? 'active' : 'inactive',
      });
      currentId++;
    }
  }

  return newData;
}

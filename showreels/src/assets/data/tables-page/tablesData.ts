import type { TableDataType, TableHeadType } from '@src/pages/TablesPage/types';

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

export const companyTableData: TableDataType[] = [
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

export const columnDataCompany: TableHeadType[] = [
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

export const namesTableData: TableDataType[] = [
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

export const columnDataNames: TableHeadType[] = [
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

export const projectNameTableData: TableDataType[] = [
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

export const columnDataProject: TableHeadType[] = [
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

const generateCompanyData = () => {
  const array: TableDataType[] = [];

  for (let i = 0; i < 5; i++) {
    companyTableData.forEach((nameTableData, index) => {
      array.push({ ...nameTableData, id: i * 10 + index });
    });
  }

  return array;
};

export const generatedCompanyData = generateCompanyData();

const generateNamesData = () => {
  const array: TableDataType[] = [];

  for (let i = 0; i < 5; i++) {
    namesTableData.forEach((nameTableData, index) => {
      array.push({ ...nameTableData, id: i * 10 + index });
    });
  }

  return array;
};

export const generatedNamesData = generateNamesData();

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

export const generatedProjectData = generateProjectData();
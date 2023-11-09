import { MenuItemType } from '@aspirity/easydev';

type LinkType = MenuItemType & {
  to?: string;
};

export const getMenuItems = (themeType: string): LinkType[] => {
  return [
    {
      id: 0,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill={themeType === 'light' ? '#000' : '#fff'}
        >
          <path d="m437-398 227-226-57-57-170 170-85-85-56 56 141 142ZM40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z" />
        </svg>
      ),
      label: 'Ads',
      to: '/showreels/ads',
    },
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill={themeType === 'light' ? '#000' : '#fff'}
        >
          <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
        </svg>
      ),
      label: 'Online shopping',
      to: '/showreels/shopping',
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill={themeType === 'light' ? '#000' : '#fff'}
        >
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h600q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H200Zm0-200v120h600v-120H200Zm480-80h120v-360H680v360Zm-480 0h120v-360H200v360Zm200 0h200v-360H400v360Z" />
        </svg>
      ),
      label: 'Tables',
      to: '/showreels/tables',
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill={themeType === 'light' ? '#000' : '#fff'}
        >
          <path d="M480-120 80-600l120-240h560l120 240-400 480Zm-95-520h190l-60-120h-70l-60 120Zm55 347v-267H218l222 267Zm80 0 222-267H520v267Zm144-347h106l-60-120H604l60 120Zm-474 0h106l60-120H250l-60 120Z" />
        </svg>
      ),
      label: 'Blog',
      to: '/showreels/blog',
    },
    {
      id: 4,
      type: 'divider',
    },
    {
      id: 5,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill={themeType === 'light' ? '#000' : '#fff'}
        >
          <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
        </svg>
      ),
      label: 'Back to library',
      to: '/',
    },
  ];
};

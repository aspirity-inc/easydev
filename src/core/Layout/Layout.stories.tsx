import { DiamondIcon, FactCheckIcon, RocketLaunchIcon, ShoppingCartIcon, StoreIcon } from '@icons';

import { Center } from '@core/Center/Center';
import { lightPalette } from '@core/Theme/themePalette';

import { Footer, Header, Layout, Main, type MenuItemType, Sidebar } from '.';
import type { Meta, StoryFn } from '@storybook/react';

const metaLayout: Meta<typeof Layout> = {
  title: 'Core/Layout',
  component: Layout,
};

export default metaLayout;

const headerStyle = { padding: '20px 25px', backgroundColor: lightPalette.primary[500] };
const footerStyle = { padding: '20px 50px', backgroundColor: lightPalette.primary[700] };
const mainStyle = {
  display: 'flex',
  backgroundColor: lightPalette.primary[50],
  border: `1px solid ${lightPalette.secondary[500]}`,
};

const Template: StoryFn<typeof Layout> = ({ ...args }) => {
  return (
    <Layout {...args}>
      <Header style={headerStyle}>
        <Center>Header</Center>
      </Header>
      <Main style={mainStyle}>
        <Center>Main</Center>
      </Main>
      <Footer style={footerStyle}>
        <Center>Footer</Center>
      </Footer>
    </Layout>
  );
};

export const DefaultLayout: StoryFn<typeof Layout> = Template.bind({});
DefaultLayout.args = {};

const TemplateWithFixedHeader = ({ ...args }) => {
  return (
    <div style={{ height: '200px' }}>
      <Layout {...args}>
        <Header style={headerStyle} fixed>
          <Center>Header</Center>
        </Header>
        <Main style={{ minHeight: 300, ...mainStyle }}>
          <Center>Main</Center>
        </Main>
        <Footer style={footerStyle}>
          <Center>Footer</Center>
        </Footer>
      </Layout>
    </div>
  );
};

export const LayoutWithFixedHeader: StoryFn<typeof Layout> = TemplateWithFixedHeader.bind({});
LayoutWithFixedHeader.args = {};

const menuItems: MenuItemType[] = [
  {
    id: 0,
    icon: <FactCheckIcon />,
    label: 'Documents',
  },
  {
    id: 1,
    icon: <ShoppingCartIcon />,
    label: 'E-commerce',
  },
  {
    id: 2,
    icon: <DiamondIcon />,
    label: 'Favourites',
  },
  {
    id: 3,
    type: 'divider',
  },
  {
    id: 4,
    icon: <RocketLaunchIcon />,
    label: 'UI Elements',
    children: [
      {
        id: 5,
        label: 'Alerts',
      },
      {
        id: 6,
        label: 'Buttons',
      },
      {
        id: 7,
        label: 'Carousel',
      },
    ],
  },
  {
    id: 8,
    icon: <StoreIcon />,
    label: 'Marketing',
  },
  {
    id: 9,
    label: 'Sales',
  },
];

const sidebarStyle = {
  height: '500px',
};

const TemplateWithSidebar = ({ ...args }) => {
  return (
    <div style={{ height: '500px' }}>
      <Layout {...args}>
        <Header style={headerStyle}>
          <Center>Header</Center>
        </Header>
        <Main style={mainStyle}>
          <Sidebar menu={menuItems} style={sidebarStyle} />
          <Center style={{ height: '1000px' }}>Main</Center>
        </Main>
        <Footer style={footerStyle}>
          <Center>Footer</Center>
        </Footer>
      </Layout>
    </div>
  );
};

export const LayoutWithSidebar: StoryFn<typeof Layout> = TemplateWithSidebar.bind({});
LayoutWithSidebar.args = {};

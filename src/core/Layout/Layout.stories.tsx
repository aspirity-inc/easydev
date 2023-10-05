import { Box } from '@core/Box';
import { Center } from '@core/Center/Center';
import { lightPalette } from '@core/Theme/themePalette';

import { Footer, Header, Layout, Main, MenuItemType, Sidebar } from '.';
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

const menuItems: MenuItemType[] = [
  {
    id: 0,
    icon: <div className="material-symbols-outlined">fact_check</div>,
    label: 'Documents',
  },
  {
    id: 1,
    icon: <div className="material-symbols-outlined">shopping_cart</div>,
    label: 'E-commerce',
  },
  {
    id: 2,
    icon: <div className="material-symbols-outlined">diamond</div>,
    label: 'Favourites',
  },
  {
    id: 4,
    icon: <div className="material-symbols-outlined">rocket_launch</div>,
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
    icon: <div className="material-symbols-outlined">store</div>,
    label: 'Marketing',
  },
];

const TemplateWithSidebar = ({ ...args }) => {
  return (
    <Layout {...args}>
      <Header style={headerStyle}>
        <Center>Header</Center>
      </Header>
      <Main style={mainStyle}>
        <Sidebar menu={menuItems} />
        <Center>Main</Center>
      </Main>
      <Footer style={footerStyle}>
        <Center>Footer</Center>
      </Footer>
    </Layout>
  );
};

export const LayoutWithSidebar: StoryFn<typeof Layout> = TemplateWithSidebar.bind({});
LayoutWithSidebar.args = {};

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
    <Box style={{ height: '200px' }}>
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
    </Box>
  );
};

export const LayoutWithFixedHeader: StoryFn<typeof Layout> = TemplateWithFixedHeader.bind({});
LayoutWithFixedHeader.args = {};

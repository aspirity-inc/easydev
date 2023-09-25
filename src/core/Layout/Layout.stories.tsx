import { Box } from '@core/Box';
import { Center } from '@core/Center/Center';
import { lightPalette } from '@core/Theme/themePalette';

import { Footer, Header, Layout, Main } from '.';
import type { Meta, StoryFn } from '@storybook/react';

const metaLayout: Meta<typeof Layout> = {
  title: 'Core/Layout',
  component: Layout,
};

export default metaLayout;

const headerStyle = { padding: '20px 25px', backgroundColor: lightPalette.primary[500] };
const footerStyle = { padding: '20px 50px', backgroundColor: lightPalette.primary[700] };
const mainStyle = { border: `1px solid ${lightPalette.secondary[500]}` };

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

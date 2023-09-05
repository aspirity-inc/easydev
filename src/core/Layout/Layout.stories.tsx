import { Meta, StoryFn } from '@storybook/react';

import { Box } from '@core/Box';
import { Center } from '@core/Center/Center';
import { lightPalette } from '@core/Theme/themePalette';

import { Footer, Header, Layout, Main } from '.';

const metaLayout: Meta<typeof Layout> = {
  title: 'Core/Layout',
  component: Layout,
};

export default metaLayout;

const Template: StoryFn<typeof Layout> = ({ ...args }) => {
  return (
    <Layout {...args}>
      <Header height={50} backgroundColor={lightPalette.primary[500]} style={{ padding: '20px 0' }}>
        <Center>Header</Center>
      </Header>
      <Main>
        <Center>Main</Center>
      </Main>
      <Footer style={{ padding: '20px 0' }} backgroundColor={lightPalette.primary[900]} height={70}>
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
        <Header height={50} backgroundColor={lightPalette.primary[500]} style={{ padding: '20px 0' }} fix>
          <Center>Header</Center>
        </Header>
        <Main style={{ minHeight: 300 }}>
          <Center>Main</Center>
        </Main>
        <Footer style={{ padding: '20px 0' }} backgroundColor={lightPalette.primary[900]} height={70}>
          <Center>Footer</Center>
        </Footer>
      </Layout>
    </Box>
  );
};

export const LayoutWithFixedHeader: StoryFn<typeof Layout> = TemplateWithFixedHeader.bind({});
LayoutWithFixedHeader.args = {};

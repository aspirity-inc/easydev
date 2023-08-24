import { Meta, StoryFn } from '@storybook/react';

import { Grid } from '.';
import { GridItem } from './GridItem/GrdItem';
import { ItemExample } from './styles';

const metaGrid: Meta<typeof Grid> = {
  title: '',
  component: Grid,
};

export default metaGrid;

const Template: StoryFn<typeof Grid> = ({ ...args }) => {
  return (
    <Grid {...args}>
      <GridItem>
        <ItemExample>example</ItemExample>
      </GridItem>
      <GridItem>
        <ItemExample>example</ItemExample>
      </GridItem>
      <GridItem>
        <ItemExample>example</ItemExample>
      </GridItem>
    </Grid>
  );
};

export const DefaultBreadcrumbs: StoryFn<typeof Grid> = Template.bind({});

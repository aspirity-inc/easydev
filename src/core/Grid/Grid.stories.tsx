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
      <GridItem size={6}>
        <ItemExample>example 1</ItemExample>
      </GridItem>
      <GridItem>
        <ItemExample>example 2</ItemExample>
      </GridItem>
      <GridItem>
        <ItemExample>example 3</ItemExample>
      </GridItem>
    </Grid>
  );
};

export const DefaultGrid: StoryFn<typeof Grid> = Template.bind({});

DefaultGrid.args = {
  alignitems: 'flex-end',
  justifycontent: 'space-between',
  columns: 12,
};

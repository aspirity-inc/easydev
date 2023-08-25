import { Meta, StoryFn } from '@storybook/react';

import { Grid } from '.';
import { Col } from './GridItem/GrdItem';
import { ItemExample } from './styles';

const metaGrid: Meta<typeof Grid> = {
  title: '',
  component: Grid,
};

export default metaGrid;

const Template: StoryFn<typeof Grid> = ({ ...args }) => {
  return (
    <Grid {...args}>
      <Col size={4}>
        <ItemExample>example 1</ItemExample>
      </Col>
      <Col>
        <ItemExample>example 2</ItemExample>
      </Col>
      <Col>
        <ItemExample>example 3</ItemExample>
      </Col>
      <Col>
        <ItemExample>example 4</ItemExample>
      </Col>
      <Col>
        <ItemExample>example 5</ItemExample>
      </Col>
      <Col>
        <ItemExample>example 6</ItemExample>
      </Col>
    </Grid>
  );
};

export const DefaultGrid: StoryFn<typeof Grid> = Template.bind({});

DefaultGrid.args = {
  alignItems: 'flex-end',
  justifyContent: 'start',
  columns: 12,
};

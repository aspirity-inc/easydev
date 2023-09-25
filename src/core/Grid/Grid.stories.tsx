import { Col, DEFAULT_NUMBER_OF_COLUMNS, Row } from '.';
import { ItemExample } from './styles';
import type { Meta, StoryFn } from '@storybook/react';

const metaRow: Meta<typeof Row> = {
  title: 'Core/Grid',
  component: Row,
  argTypes: {
    children: {
      description: 'ReactNode',
    },
    direction: {
      defaultValue: 'row',
      description: 'the direction of placement of items',
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    columns: {
      defaultValue: DEFAULT_NUMBER_OF_COLUMNS,
      description: 'The number of columns',
    },
    columnSpacing: {
      description: 'The space that runs horizontally between the different components of a typographical item.',
      control: 'number',
    },
    columnGap: {
      description: 'The size of the column gap',
      control: 'number',
    },
    rowSpacing: {
      description: 'The space that runs vertically between the different components of a typographical item.',
      control: 'number',
    },
    rowGap: {
      description: 'The size of the column gap',
      control: 'number',
    },
    wrap: {
      defaultValue: 'wrap',
      description: 'Wrap line',
      control: 'select',
      options: ['wrap', 'no-wrap', 'wrap-reverse'],
    },
    align: {
      defaultValue: 'center',
      description: 'Alignment in the perpendicular direction',
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'baseline'],
    },
    justify: {
      defaultValue: 'flex-start',
      description: 'Defines how the browser distributes space between and around content elements along the main axis',
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    },
  },
};

export default metaRow;

const Template: StoryFn<typeof Row> = ({ ...args }) => {
  return (
    <Row {...args}>
      {Array.from({ length: 6 }, (_, i) => (
        <Col key={i}>
          <ItemExample>example {i + 1}</ItemExample>
        </Col>
      ))}
    </Row>
  );
};

export const DefaultGrid: StoryFn<typeof Row> = Template.bind({});
DefaultGrid.args = {
  align: 'flex-end',
  justify: 'space-between',
  columns: DEFAULT_NUMBER_OF_COLUMNS,
  wrap: 'wrap',
  direction: 'row',
};

const ColumnsTemplate: StoryFn<typeof Row> = ({ ...args }) => {
  return (
    <Row {...args}>
      <Col size={5}>
        <ItemExample>example 1</ItemExample>
      </Col>
      <Col size={6}>
        <ItemExample>example 2</ItemExample>
      </Col>
      <Col size={3}>
        <ItemExample>example 3</ItemExample>
      </Col>
    </Row>
  );
};

export const Columns: StoryFn<typeof Row> = ColumnsTemplate.bind({});
Columns.args = {
  columns: 12,
  justify: 'space-between',
  wrap: 'wrap',
  rowGap: 20,
};

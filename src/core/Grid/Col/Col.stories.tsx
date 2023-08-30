import { Meta, StoryFn } from '@storybook/react';

import { Col, Row } from '..';
import { ItemExample } from '../styles';

const metaCol: Meta<typeof Col> = {
  title: '',
  component: Col,
  argTypes: {
    children: {
      description: 'ReactNode',
    },
    size: {
      control: 'number',
    },
    alignContent: {
      defaultValue: 'center',
      description: 'Sets the distribution of space between and around content elements along the transverse axis',
      control: 'select',
      options: ['start', 'space-between', 'center', 'space-around'],
    },
    alignSelf: {
      defaultValue: 'center',
      description: 'Aligns flex elements to the current flex line',
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'start', 'end', 'self-start', 'self-end'],
    },
  },
};

export default metaCol;

const Template: StoryFn<typeof Col> = ({ ...args }) => {
  return (
    <Row justify="space-between">
      {Array.from({ length: 6 }, (_, i) => (
        <Col key={i} {...args}>
          <ItemExample>example {i + 1}</ItemExample>
        </Col>
      ))}
    </Row>
  );
};

export const DefaultCol: StoryFn<typeof Col> = Template.bind({});

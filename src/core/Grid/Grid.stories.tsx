import { Meta, StoryFn } from '@storybook/react';

import { Row, Col } from '.';
import { ItemExample } from './styles';

const metaRow: Meta<typeof Row> = {
  title: '',
  component: Row,
};

export default metaRow;

const Template: StoryFn<typeof Row> = ({ ...args }) => {
  return (
    <Row {...args}>
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
    </Row>
  );
};

export const DefaultRow: StoryFn<typeof Row> = Template.bind({});

DefaultRow.args = {
  alignItems: 'flex-end',
  justifyContent: 'start',
  columns: 12,
};

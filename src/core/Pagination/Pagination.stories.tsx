import { Meta, StoryFn } from '@storybook/react';

import { Pagination } from '.';
import { useState } from 'react';

export default {
  title: 'Core/Pagination',
  component: Pagination,
} satisfies Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = ({ ...args }) => {
  const [page, setPage] = useState(1);

  return <Pagination {...args} page={page} onChange={setPage} />;
};

export const DefaultPagination: StoryFn<typeof Pagination> = Template.bind({});
DefaultPagination.args = {
  total: 10,
  siblings: 1,
  withEdges: true,
  hidePages: false,
};

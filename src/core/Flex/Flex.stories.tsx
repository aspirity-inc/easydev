import { Button } from '@core/Button';

import { Flex } from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Core/Flex',
  component: Flex,
} satisfies Meta<typeof Flex>;

const Template: StoryFn<typeof Flex> = ({ ...args }) => {
  return <Flex {...args}>{args.children}</Flex>;
};

export const DefaultFlex: StoryFn<typeof Flex> = Template.bind({});
DefaultFlex.args = {
  direction: 'row-reverse',
  justify: 'space-between',
  children: (
    <>
      <Button>First button</Button>
      <Button>Second button</Button>
      <Button>Third button</Button>
    </>
  ),
};

import { Meta, StoryObj } from '@storybook/react';

import { Space } from '@core/Space';

import { Toast } from '.';

const metaToast: Meta<typeof Toast> = {
  title: 'Core/Toasts/Toast',
  component: Toast,
  argTypes: {},
};
export default metaToast;

type Story = StoryObj<typeof Toast>;

export const DefaultToast = {
  args: {
    title: 'Notification',
    description: 'Description text',
    status: 'info',
  },
} satisfies Story;

export const ListOfMonochromeToasts = ({ ...args }) => {
  return (
    <Space direction="column">
      <Toast {...args} title={'Info notification'} description={'Text'} status="info" />
      <Toast {...args} title={'Success notification'} description={'Text'} status="success" />
      <Toast {...args} title={'Warning notification'} description={'Text'} status="warning" />
      <Toast {...args} title={'Error notification'} description={'Text'} status="error" />
    </Space>
  );
};

export const ListOfColorfulToasts = ({ ...args }) => {
  return (
    <Space direction="column">
      <Toast {...args} title={'Info notification'} description={'Text'} status="info" colorful={true} />
      <Toast {...args} title={'Success notification'} description={'Text'} status="success" colorful={true} />
      <Toast {...args} title={'Warning notification'} description={'Text'} status="warning" colorful={true} />
      <Toast {...args} title={'Error notification'} description={'Text'} status="error" colorful={true} />
    </Space>
  );
};

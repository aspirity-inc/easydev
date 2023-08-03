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
    autoClose: false,
  },
} satisfies Story;

export const ListOfAutoClosedToasts = ({ ...args }) => {
  return (
    <Space direction="column">
      <Toast {...args} title={'Info notification'} description={'Text'} status="info" />
      <Toast {...args} title={'Success notification'} description={'Text'} status="success" autoCloseDelay={6000} />
      <Toast {...args} title={'Warning notification'} description={'Text'} status="warning" autoCloseDelay={10000} />
    </Space>
  );
};

export const ListOfColorfulToasts = ({ ...args }) => {
  return (
    <Space direction="column">
      <Toast
        {...args}
        title={'Info notification'}
        description={'Text'}
        status="info"
        colorful={true}
        autoClose={false}
      />
      <Toast
        {...args}
        title={'Success notification'}
        description={'Text'}
        status="success"
        colorful={true}
        autoClose={false}
      />
      <Toast
        {...args}
        title={'Warning notification'}
        description={'Text'}
        status="warning"
        colorful={true}
        autoClose={false}
      />
      <Toast
        {...args}
        title={'Error notification'}
        description={'Text'}
        status="error"
        colorful={true}
        autoClose={false}
      />
    </Space>
  );
};

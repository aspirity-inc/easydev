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
    onDelete: () => null,
  },
} satisfies Story;

export const ListOfColorfulToasts = ({ ...args }) => {
  const toastArgs = { ...args, onDelete: () => null };
  return (
    <Space direction="column">
      <Toast
        {...toastArgs}
        title={'Info notification'}
        description={'Text'}
        status="info"
        colorful={true}
        autoClose={false}
      />
      <Toast
        {...toastArgs}
        title={'Success notification'}
        description={'Text'}
        status="success"
        colorful={true}
        autoClose={false}
      />
      <Toast
        {...toastArgs}
        title={'Warning notification'}
        description={'Text'}
        status="warning"
        colorful={true}
        autoClose={false}
      />
      <Toast
        {...toastArgs}
        title={'Error notification'}
        description={'Text'}
        status="error"
        colorful={true}
        autoClose={false}
      />
    </Space>
  );
};

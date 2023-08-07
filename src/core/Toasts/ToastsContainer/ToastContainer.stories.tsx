import { Meta, StoryFn } from '@storybook/react';

import { Button } from '@core/Button';
import { Space } from '@core/Space';

import { toast } from './toastEmitters';
import { ToastContainer } from './ToastsContainer';
import { ToastItemType } from '../types';

const metaToastContainer: Meta<typeof ToastContainer> = {
  title: 'Core/Toasts/ToastContainer',
  component: ToastContainer,
  argTypes: {},
};
export default metaToastContainer;

const Template: StoryFn<typeof ToastContainer> = ({ ...args }) => {
  const toastArgs: ToastItemType = {
    title: 'Notification',
    description: 'Description text',
    colorful: false,
    autoClose: true,
  };

  return (
    <>
      <ToastContainer {...args} />
      <Space direction="row">
        <Button onClick={() => toast({ ...toastArgs, position: 'top-left' })}>top-left toast</Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'info', position: 'top-center' })}>
          top-center toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'success', position: 'top-right' })}>
          top-right toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'warning', position: 'bottom-left' })}>
          bottom-left toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'error', position: 'bottom-center' })}>
          bottom-center toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'success', position: 'bottom-right' })}>
          bottom-right toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'info', position: 'center-center' })}>
          center-center toast
        </Button>
      </Space>
    </>
  );
};

export const DefaultToastContainer: StoryFn<typeof ToastContainer> = Template.bind({});
DefaultToastContainer.args = {};

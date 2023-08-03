import { Meta, StoryFn } from '@storybook/react';

import { Button } from '@core/Button';
import { Space } from '@core/Space';

import { toast, info, success, warning, error } from './toastEmitters';
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
        <Button onClick={() => info({ ...toastArgs, position: 'top-center' })}>top-center toast</Button>
        <Button onClick={() => success({ ...toastArgs, position: 'top-right' })}>top-right toast</Button>
        <Button onClick={() => warning({ ...toastArgs, position: 'bottom-left' })}>bottom-left toast</Button>
        <Button onClick={() => error({ ...toastArgs, position: 'bottom-center' })}>bottom-center toast</Button>
        <Button onClick={() => success({ ...toastArgs, position: 'bottom-right' })}>bottom-right toast</Button>
        <Button onClick={() => info({ ...toastArgs, position: 'center-center' })}>center-center toast</Button>
      </Space>
    </>
  );
};

export const DefaultToastContainer: StoryFn<typeof ToastContainer> = Template.bind({});
DefaultToastContainer.args = {};

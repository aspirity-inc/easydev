import { Meta, StoryFn } from '@storybook/react';

import 'material-symbols';

import { Button } from '@core/Button';

import { Popover } from '.';

const metaPopover: Meta<typeof Popover> = {
  title: 'Сore/Popover',
  component: Popover,
  argTypes: {
    title: {
      type: 'string',
      control: 'text',
      description: 'Заголовок',
    },
    body: {
      type: 'string',
      control: 'text',
      description: 'Тело',
    },
    placement: {
      type: 'string',
      description: 'Положение',
      control: {
        type: 'select',
      },
      defaultValue: 'top',
      options: [
        'auto',
        'auto-start',
        'auto-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
      ],
      table: {
        defaultValue: { summary: 'top' },
      },
    },
  },
};
export default metaPopover;

const Template: StoryFn<typeof Popover> = ({ ...args }) => {
  return (
    <div
      style={{
        width: '600px',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Popover {...args}>
        <Button>Open popover</Button>
      </Popover>
    </div>
  );
};

export const DefaultPopover: StoryFn<typeof Popover> = Template.bind({});
DefaultPopover.args = {
  placement: 'top',
  title: 'Header Popover',
  body: 'No depending be convinced in unfeeling he. Excellence she unaffected and too sentiments her. ',
};

export const DefaultPopoverNoTitle: StoryFn<typeof Popover> = Template.bind({});
DefaultPopoverNoTitle.args = {
  placement: 'top',
  body: 'No depending be convinced in unfeeling he. Excellence she unaffected and too sentiments her. ',
};

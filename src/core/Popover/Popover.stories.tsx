import { Button } from '@core/Button';

import { Popover } from '.';
import type { Meta, StoryFn } from '@storybook/react';

const metaPopover: Meta<typeof Popover> = {
  title: 'Core/Popover',
  component: Popover,
  argTypes: {
    title: {
      type: 'string',
      control: 'text',
      description: 'Title',
    },
    body: {
      type: 'string',
      control: 'text',
      description: 'Body',
    },
    placement: {
      type: 'string',
      description: 'Position',
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
    openOnHover: {
      description: 'Open popover by hover',
      control: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    offset: {
      type: 'number',
      control: 'number',
      description: 'Distance between popover and target (px)',
      table: { defaultValue: { summary: 8 } },
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

const InlineTemplate: StoryFn<typeof Popover> = ({ ...args }) => {
  return (
    <div
      style={{
        height: '100px',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <p>
        Lorem ipsum dolor sit.
        <Popover {...args} style={{ color: 'violet', fontWeight: 900 }}>
          Hover on me
        </Popover>
        , earum, hic velit?
      </p>
    </div>
  );
};

export const InlinePopoverWithHoverTrigger: StoryFn<typeof Popover> = InlineTemplate.bind({});
InlinePopoverWithHoverTrigger.args = {
  placement: 'top',
  title: 'Header Popover',
  body: 'No depending be convinced in unfeeling he. Excellence she unaffected and too sentiments her. ',
  openOnHover: true,
  inline: true,
};

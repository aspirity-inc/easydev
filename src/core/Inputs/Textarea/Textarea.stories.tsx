import { ChangeEvent, useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Textarea } from '.';

const metaTextarea: Meta<typeof Textarea> = {
  title: 'Core/Inputs/Textarea',
  component: Textarea,
  argTypes: {
    value: {
      type: 'string',
      control: 'text',
      description: 'Text',
    },
    label: {
      type: 'string',
      control: 'text',
      description: 'Label',
    },
    placeholder: {
      type: 'string',
      control: 'text',
      description: 'Placeholder',
    },
    showLimit: {
      type: 'boolean',
      control: 'boolean',
      description: 'Show/hide input limit',
      table: { defaultValue: { summary: true } },
    },
    autoresized: {
      type: 'boolean',
      control: 'boolean',
      description: 'On/off automatic height change',
      table: { defaultValue: { summary: true } },
    },
    softLimit: {
      type: 'boolean',
      control: 'boolean',
      description: 'On/off soft limit',
      table: { defaultValue: { summary: false } },
    },
    maxLength: {
      type: 'number',
      control: 'number',
      description: 'Maximum number of characters',
      table: { defaultValue: { summary: 1000 } },
    },
    className: {
      description: 'CSS class for additional styling',
    },
    style: {
      description: 'Additional styles',
    },
  },
};
export default metaTextarea;

const Template: StoryFn<typeof Textarea> = ({ ...args }) => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ marginBottom: '20px' }}>
      <Textarea value={value} onChange={onChange} {...args} />
    </div>
  );
};

export const DefaultTextarea: StoryFn<typeof Textarea> = Template.bind({});
DefaultTextarea.args = { placeholder: 'Enter a comment', label: 'Comment' };

export const ErrorTextarea: StoryFn<typeof Textarea> = Template.bind({});
ErrorTextarea.args = { value: 'Ivan', placeholder: 'Enter your name', label: 'Name', error: 'Error message' };

export const DisabledTextarea: StoryFn<typeof Textarea> = Template.bind({});
DisabledTextarea.args = {
  value: 'Ivan',
  placeholder: 'Enter your name',
  label: 'Name',
  disabled: true,
};

export const DisabledEmptyTextarea: StoryFn<typeof Textarea> = Template.bind({});
DisabledEmptyTextarea.args = {
  placeholder: 'Enter your name',
  label: 'Name',
  disabled: true,
};

import { ChangeEvent, useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Textarea } from '.';

export default {
  title: 'core/Inputs/Textarea',
  component: Textarea,
  argTypes: {
    value: {
      type: 'string',
      control: 'text',
      description: 'Текст',
    },
    label: {
      type: 'string',
      control: 'text',
      description: 'Метка',
    },
    placeholder: {
      type: 'string',
      control: 'text',
      description: 'Подсказка',
    },
    showLimit: {
      type: 'boolean',
      control: 'boolean',
      description: 'Показать/скрыть ограничения на ввод',
      table: { defaultValue: { summary: true } },
    },
    autoresized: {
      type: 'boolean',
      control: 'boolean',
      description: 'Включить/выключить автоматическое изменение высоты',
      table: { defaultValue: { summary: true } },
    },
    softLimit: {
      type: 'boolean',
      control: 'boolean',
      description: 'Включить/выключить мягкое ограничение',
      table: { defaultValue: { summary: false } },
    },
    maxLength: {
      type: 'number',
      control: 'number',
      description: 'Максимально допустимое кол-во символов',
      table: { defaultValue: { summary: 1000 } },
    },
    className: {
      description: 'Любой CSS класс для дополнительной стилизации',
    },
    style: {
      description: 'Любые дополнительные стили',
    },
  },
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = ({ ...args }) => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return <Textarea value={value} onChange={onChange} {...args} />;
};

export const DefaultTextarea = Template.bind({});
DefaultTextarea.args = { placeholder: 'Оставьте комментарий', label: 'Комментарий' };

export const DisabledTextarea = Template.bind({});
DisabledTextarea.args = {
  value: 'Иван',
  placeholder: 'Введите свое имя',
  label: 'Имя',
  disabled: true,
};

export const DisabledEmptyTextarea = Template.bind({});
DisabledEmptyTextarea.args = {
  placeholder: 'Введите свое имя',
  label: 'Имя',
  disabled: true,
};
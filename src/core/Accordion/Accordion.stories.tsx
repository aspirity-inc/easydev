import { Badge } from '@core/Badge';
import { Flex } from '@core/Flex';

import { Accordion } from '.';
import type { AccordionItemType } from './types';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Core/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

const TitleIcon = () => (
  <div className="material-symbols-outlined" style={{ display: 'block' }}>
    rocket_launch
  </div>
);

const UserOpenIcon = () => {
  return <div className="material-symbols-outlined">add_circle</div>;
};
const UserCloseIcon = () => {
  return <div className="material-symbols-outlined">do_not_disturb_on</div>;
};

const items: AccordionItemType[] = [
  {
    id: 1,
    title: 'Title 1',
    panel: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis vitae laborum atque obcaecati error. Quibusdam
        tempora ex natus maxime error nulla amet! Velit reiciendis dolores odio, mollitia quisquam optio vitae.
      </p>
    ),
  },
  {
    id: 2,
    title: 'Title 2 (disabled)',
    icon: <TitleIcon />,
    disabled: true,
    panel: <p>Lorem ipsum dolor sit amet, consectetur</p>,
  },
  {
    id: 3,
    title: 'Title 3',
    icon: <TitleIcon />,
    subtitle: 'Subtitle description',
    panel: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis vitae laborum atque obcaecati error. Quibusdam
        tempora ex natus maxime error nulla amet! Velit reiciendis dolores odio, mollitia quisquam optio vitae.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Facilis vitae laborum atque obcaecati error. Quibusdam
        tempora ex natus maxime error nulla amet! Velit reiciendis dolores odio, mollitia quisquam optio vitae.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Facilis vitae laborum atque obcaecati error. Quibusdam
        tempora ex natus maxime error nulla amet! Velit reiciendis dolores odio, mollitia quisquam optio vitae.
      </p>
    ),
  },
  {
    id: 4,
    title: 'Title 4',
    subtitle: 'Subtitle description',
    panel: <p>Lorem ipsum dolor sit amet, consectetur</p>,
  },
  {
    id: 5,
    control: (
      <Flex direction="row" gap={10}>
        <Badge>Attention</Badge>
        <p>User control</p>
      </Flex>
    ),
    panel: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis vitae laborum atque obcaecati error. Quibusdam
        tempora ex natus maxime error nulla amet!
      </p>
    ),
  },
];

const Template: StoryFn<typeof Accordion> = ({ ...args }) => {
  return <Accordion {...args} onChange={undefined} items={items} />;
};

export const DefaultAccordion: StoryFn<typeof Accordion> = Template.bind({});
DefaultAccordion.args = {};

export const MultipleAccordion: StoryFn<typeof Accordion> = Template.bind({});
MultipleAccordion.args = {
  multiple: true,
};

export const BorderedAccordionWithCustomChevron: StoryFn<typeof Accordion> = Template.bind({});
BorderedAccordionWithCustomChevron.args = {
  variant: 'bordered',
  openIcon: <UserOpenIcon />,
  closeIcon: <UserCloseIcon />,
};

---
title: Accordion
---

The Accordion is used to show and hide sections of related content on a page.

The Accordion component can have the next props: items, variant, duration, openIcon, closeIcon, multiple, value, onChange, unstyledControl. [See there](/storybook/?path=/docs/core-accordion--docs) to get more information.

## Accordion variants

### [Default Accordion](/storybook/?path=/story/core-accordion--default-accordion)

```tsx
const TitleIcon = () => (
  <div className="material-symbols-outlined" style={{ display: 'block' }}>
    rocket_launch
  </div>
);

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

const DefaultAccordion = () => {
  return <Accordion items={items} />;
};
```

### [Multiple Accordion](/storybook/?path=/story/core-accordion--multiple-accordion)

```tsx
const TitleIcon = () => (
  <div className="material-symbols-outlined" style={{ display: 'block' }}>
    rocket_launch
  </div>
);

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

const MultipleAccordion = () => {
  return <Accordion multiple items={items} />;
};
```

### [Bordered Accordion With Custom Chevron](/storybook/?path=/story/core-accordion--bordered-accordion-with-custom-chevron)

```tsx
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

const BorderedAccordionWithCustomChevron = () => {
  return <Accordion variant="bordered" openIcon={<UserOpenIcon />} closeIcon={<UserCloseIcon />} items={items} />;
};
```

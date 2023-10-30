import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';

import { Badge } from '@core/Badge';
import { Flex } from '@core/Flex';
import { EasydevProvider } from '@core/Theme';
import { lightPalette } from '@core/Theme/themePalette';

import { Accordion, type AccordionItemType } from '.';
import { StyledChevronIcon } from './components/ChevronIcon/styles';
import { StyledIcon, StyledTitle } from './components/Control/styles';

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

test('duration onChange items open', async () => {
  const mockFn = vi.fn();

  const { container } = render(
    <EasydevProvider>
      <Accordion items={items} duration={500} onChange={mockFn} />
    </EasydevProvider>
  );

  expect(container.querySelectorAll('.easy_accordion-animation').length).toBe(items.length);

  expect(container.querySelectorAll('.easy_accordion-animation')[0]).toHaveStyleRule('--duration', '500ms');

  expect(container.querySelectorAll('.easy_accordion-animation')[0]).toHaveStyleRule('height', '0');
  await userEvent.click(container.querySelectorAll('.easy_accordion-control')[0] as Element);
  expect(screen.getAllByTestId('easydev-opened-true').length).toBe(1);

  expect(container.querySelectorAll('.easy_accordion-animation')[3]).toHaveStyleRule('height', '0');
  await userEvent.click(container.querySelectorAll('.easy_accordion-control')[3] as Element);
  expect(screen.getAllByTestId('easydev-opened-true').length).toBe(1);

  expect(mockFn).toBeCalled();
});

test('multiple', async () => {
  const { container } = render(
    <EasydevProvider>
      <Accordion items={items} multiple />
    </EasydevProvider>
  );

  expect(container.querySelectorAll('.easy_accordion-animation')[0]).toHaveStyleRule('height', '0');
  await userEvent.click(container.querySelectorAll('.easy_accordion-control')[0] as Element);

  expect(container.querySelectorAll('.easy_accordion-animation')[3]).toHaveStyleRule('height', '0');
  await userEvent.click(container.querySelectorAll('.easy_accordion-control')[3] as Element);

  expect(screen.getAllByTestId('easydev-opened-true').length).toBe(2);
});

test('variant openIcon closeIcon', async () => {
  const { container } = render(
    <EasydevProvider>
      <Accordion items={items} variant="bordered" openIcon={<UserOpenIcon />} closeIcon={<UserCloseIcon />} />
    </EasydevProvider>
  );

  expect(container.querySelector('.easy_accordion-control')).toHaveStyleRule('color', lightPalette.primary['800'], {
    modifier: `&:hover:not([disabled]) ${StyledIcon.toString()}`,
  });

  expect(container.querySelector('.easy_accordion-control')).toHaveStyleRule('color', lightPalette.primary['800'], {
    modifier: `&:hover:not([disabled]) ${StyledTitle.toString()}`,
  });

  expect(container.querySelector('.easy_accordion-control')).toHaveStyleRule('color', lightPalette.primary['700'], {
    modifier: `&:hover:not([disabled]) ${StyledChevronIcon.toString()}`,
  });

  expect(screen.getAllByText('add_circle').length).toBe(items.length);

  await userEvent.click(container.querySelectorAll('.easy_accordion-control')[0] as Element);
  expect(screen.getByText('do_not_disturb_on')).toBeInTheDocument();
});

test('click to disabled item', async () => {
	const mockFn = vi.fn()

  const { container } = render(
    <EasydevProvider>
      <Accordion items={items} onChange={mockFn}/>
    </EasydevProvider>
  );

  await userEvent.click(container.querySelectorAll('.easy_accordion-control')[1] as Element);

  expect(mockFn).toBeCalledTimes(0);
});

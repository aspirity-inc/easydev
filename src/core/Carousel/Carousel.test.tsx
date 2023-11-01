import { CheckCircleIcon, DoneIcon, KeyboardDoubleArrowLeftIcon } from '@icons';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { styled } from 'styled-components';
import { expect, test, vi } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { Carousel } from '.';

window.ResizeObserver =
  window.ResizeObserver ||
  vi.fn().mockImplementation(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    unobserve: vi.fn(),
  }));

test('items, height, arrows, dots, arrowsType', async () => {
  const Slide = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 32px;
    background-color: #98abf6;
  `;

  const items = [...Array(6).keys()].map((index) => <Slide key={index}>{index + 1}</Slide>);

  const { container } = render(
    <EasydevProvider>
      <Carousel title="carousel title" items={items} height={200} arrows dots arrowsType="center" />
    </EasydevProvider>
  );

  await userEvent.click(container.querySelector('.easy_carousel-arrow') as Element);

  expect(container.querySelectorAll('.easy_carousel-arrow').length).toBe(1);
  expect(container.querySelector('[aria-label="Previous"]')).not.toBeInTheDocument();

  await new Promise<void>((res) => {
    setTimeout(() => {
      res();
    }, 500);
  });

  expect(container.querySelectorAll('.easy_carousel-arrow').length).toBe(2);
  expect(container.querySelector('[aria-label="Previous"]')).toBeInTheDocument();

  expect(container.querySelectorAll('.easy_carousel-dot').length).toBe(6);

  expect(container.querySelector('.keen-slider')).toHaveStyleRule('height', '200px');

  expect(screen.getByText('carousel title')).toBeInTheDocument();
});

test('thumbnails', () => {
  const Slide = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 32px;
    background-color: #98abf6;
  `;

  const items = [...Array(6).keys()].map((index) => <Slide key={index}>{index + 1}</Slide>);

  const { container } = render(
    <EasydevProvider>
      <Carousel items={items} thumbnails />
    </EasydevProvider>
  );

  expect(container.querySelectorAll('.easy_carousel-thumbnail')[0]).toBeInTheDocument();
});

test('icons', async () => {
  const Slide = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 32px;
    background-color: #98abf6;
  `;

  const items = [...Array(2).keys()].map((index) => <Slide key={index}>{index + 1}</Slide>);

  const { container } = render(
    <EasydevProvider>
      <Carousel
        items={items}
        arrowIcon={<KeyboardDoubleArrowLeftIcon />}
        dotIcons={{
          default: <DoneIcon />,
          active: <CheckCircleIcon />,
        }}
      />
    </EasydevProvider>
  );

  expect(container.querySelectorAll('.easy-icon').length).toBe(3);
});

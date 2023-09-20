import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

import { EasydevProvider } from '@core/Theme/ThemeContext';
import { lightPalette } from '@core/Theme/themePalette';

import { Toast } from '.';
import { duration, slideInUp } from './animation';

const globalMockFn = vi.fn();

test('check how many times onDelete works', async () => {
  const mockFn = vi.fn();
  render(
    <EasydevProvider>
      <Toast onDelete={mockFn} />
    </EasydevProvider>
  );
  fireEvent.click(screen.getByText('close'));

  // onDelete works after 0.5s after click on close button
  await new Promise((_) => setTimeout(_, 500));
  expect(mockFn.mock.calls.length).toBe(1);
});

test('toastId, check auto close/delete', async () => {
  const toastIds: number[] = [0];
  const onDelete = (toastId: number) => {
    const index = toastIds.indexOf(toastId);
    if (index > -1) {
      toastIds.splice(index, 1);
    }
  };
  render(
    <EasydevProvider>
      <Toast autoCloseDelay={300} toastId={toastIds[0]} onDelete={() => onDelete(toastIds[0])} />
    </EasydevProvider>
  );

  await new Promise((_) => setTimeout(_, 900));
  expect(toastIds.length).toBe(0);
});

test('custom title, description, icon, closeBtn, statusBackground (works with colorful=true), position', () => {
  const title = 'Toast title';
  const description = 'Description title';
  const iconName = 'add';
  const closeBtnName = 'close';

  const { container } = render(
    <EasydevProvider>
      <Toast
        icon={<div className="material-symbols-outlined">{iconName}</div>}
        onDelete={globalMockFn}
        title={title}
        description={description}
        closeBtn={<div className="material-symbols-outlined">{closeBtnName}</div>}
        position="top-center"
        statusBackground="#ededed"
        colorful
      />
    </EasydevProvider>
  );

  expect(screen.getByText(title)).toBeInTheDocument();

  expect(screen.getByText(description)).toBeInTheDocument();

  const iconComponent = screen.getByText(iconName);
  expect(iconComponent).toBeInTheDocument();
  expect(iconComponent.className).toBe('material-symbols-outlined');

  const closeBtnComponent = screen.getByText(closeBtnName);
  expect(closeBtnComponent).toBeInTheDocument();
  expect(closeBtnComponent.className).toBe('material-symbols-outlined');

  const wrapper = container.querySelector('div');
  expect(wrapper?.childNodes[0]).toHaveStyleRule('background-color', '#ededed');

  expect(wrapper).toHaveStyleRule('animation', `${slideInUp.name} ${duration} ease-in-out forwards`);
});

test('autoClose false', async () => {
  const { container } = render(
    <EasydevProvider>
      <Toast onDelete={globalMockFn} autoClose={false} />
    </EasydevProvider>
  );

  await new Promise((_) => setTimeout(_, 100));

  const wrapper = container.querySelector('div');
  expect(wrapper).toHaveStyleRule('opacity', '1');
  expect(wrapper).not.toHaveStyleRule('opacity', '0');
});

test('autoClose true', async () => {
  const { container } = render(
    <EasydevProvider>
      <Toast onDelete={globalMockFn} autoCloseDelay={200} autoClose={true} />
    </EasydevProvider>
  );

  await new Promise((_) => setTimeout(_, 400));

  const wrapper = container.querySelector('div');
  expect(wrapper).toHaveStyleRule('opacity', '0');
});

test('colorful', () => {
  const { container } = render(
    <EasydevProvider>
      <Toast onDelete={globalMockFn} colorful />
    </EasydevProvider>
  );

  const wrapper = container.querySelector('div');
  expect(wrapper?.childNodes[0]).toHaveStyleRule('background-color', lightPalette.secondary['300']);
  expect(wrapper?.childNodes[0].childNodes[0]).toHaveStyleRule('color', lightPalette.surface['900']);
  expect(wrapper?.childNodes[0].childNodes[1]).toHaveStyleRule('color', 'var(--colorful)');
  expect(wrapper?.childNodes[0].childNodes[2]).toHaveStyleRule('color', 'var(--colorful)');
});

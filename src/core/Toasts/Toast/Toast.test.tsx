import { AddIcon, CloseIcon } from '@icons';
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

import { EasydevProvider } from '@core/Theme/ThemeContext';
import { lightPalette } from '@core/Theme/themePalette';

import { Toast } from '.';
import { duration, slideInUp } from './animation';

const globalMockFn = vi.fn();

test('onDelete', async () => {
  const mockFn = vi.fn();
  render(
    <EasydevProvider>
      <Toast onDelete={mockFn} />
    </EasydevProvider>
  );
  fireEvent.click(screen.getByTestId('close'));

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
  const icon = <AddIcon className="add-custom-icon" />;
  const closeBtnIcon = <CloseIcon className="close-custom-icon" />;

  const { container } = render(
    <EasydevProvider>
      <Toast
        icon={icon}
        onDelete={globalMockFn}
        title={title}
        description={description}
        closeBtn={closeBtnIcon}
        position="top-center"
        statusBackground="#ededed"
        colorful
      />
    </EasydevProvider>
  );

  expect(screen.getByText(title)).toBeInTheDocument();

  expect(screen.getByText(description)).toBeInTheDocument();

  expect(container.getElementsByClassName('add-custom-icon').length).toBe(1);
  expect(container.getElementsByClassName('close-custom-icon').length).toBe(1);

  const wrapper = container.querySelector('.easy_toast');
  expect(wrapper).toHaveStyleRule('background-color', '#ededed');

  expect(container.querySelector('.easy_toast-animationContainer')).toHaveStyleRule(
    'animation',
    `${slideInUp.name} ${duration} ease-in-out forwards`
  );
});

test('autoClose false', async () => {
  const { container } = render(
    <EasydevProvider>
      <Toast onDelete={globalMockFn} autoClose={false} />
    </EasydevProvider>
  );

  await new Promise((_) => setTimeout(_, 100));

	const wrapper = container.querySelector('.easy_toast-animationContainer');
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

  const wrapper = container.querySelector('.easy_toast-animationContainer');
  expect(wrapper).toHaveStyleRule('opacity', '0');
});

test('colorful', () => {
  const { container } = render(
    <EasydevProvider>
      <Toast onDelete={globalMockFn} colorful />
    </EasydevProvider>
  );

  const wrapper = container.querySelector('.easy_toast-animationContainer');
  expect(wrapper?.childNodes[0]).toHaveStyleRule('background-color', lightPalette.secondary['300']);
  expect(wrapper?.childNodes[0].childNodes[0]).toHaveStyleRule('color', lightPalette.surface['900']);
  expect(wrapper?.childNodes[0].childNodes[1]).toHaveStyleRule('color', 'var(--colorful)');
  expect(wrapper?.childNodes[0].childNodes[2]).toHaveStyleRule('color', 'var(--colorful)');
});

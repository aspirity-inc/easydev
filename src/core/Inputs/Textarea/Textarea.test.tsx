import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi } from 'vitest';

import { EasydevProvider } from '@core/Theme';
import { lightPalette } from '@core/Theme/themePalette';

import { Textarea } from '.';

test('label, value, placeholder', () => {
  const value = 'zxcvbnmasd';
  const placeholder = 'placeholder text';
  const labelText = 'label text';

  const { container } = render(
    <EasydevProvider>
      <Textarea label={labelText} placeholder={placeholder} value={value} />
    </EasydevProvider>
  );

  expect(screen.getByText(value)).toBeInTheDocument();

  expect(container.querySelector(`textarea[placeholder="${placeholder}"]`)).toBeInTheDocument();
  expect(screen.getByText(labelText)).toBeInTheDocument();
});

test('autoresized', () => {
  const { container } = render(
    <EasydevProvider>
      <Textarea label="" />
    </EasydevProvider>
  );

  const textareaElement = container.querySelector('textarea');

  expect(textareaElement).toHaveStyleRule('min-height', '50px');
  expect(textareaElement).toHaveStyleRule('overflow-y', 'hidden');
});

test('onChange, showLimit', async () => {
  const mockText = 'abcd';
  const mockFn = vi.fn();

  const { container } = render(
    <EasydevProvider>
      <Textarea label="" onChange={mockFn} showLimit />
    </EasydevProvider>
  );

  await userEvent.type(container.querySelector('textarea') as Element, mockText);
  expect(container.querySelector('.easy_textarea-counter')).toBeInTheDocument();
  expect(screen.getByText(mockText.length)).toBeInTheDocument();
  expect(mockFn).toBeCalledTimes(mockText.length);
});

test('long value, maxLength', async () => {
  const mockText = 'abcddddddddddddddddddddd';
  const maxLength = 10;

  const { container } = render(
    <EasydevProvider>
      <Textarea label="" maxLength={maxLength} showLimit />
    </EasydevProvider>
  );

  await userEvent.type(container.querySelector('textarea') as Element, mockText);

  expect(container.querySelector('.easy_textarea-counter')).toBeInTheDocument();
  expect(screen.queryByText(mockText.length)).not.toBeInTheDocument();
  expect(screen.getAllByText(new RegExp(`${maxLength}`)).length).toBe(2);
  expect(container.querySelector('textarea')).toHaveValue(mockText.substring(0, maxLength));
});

test('long value with softLimit', async () => {
  const mockText = 'abcddddddddddddddddddddd';
  const maxLength = 10;

  const { container } = render(
    <EasydevProvider>
      <Textarea label="" maxLength={maxLength} showLimit softLimit />
    </EasydevProvider>
  );

  await userEvent.type(container.querySelector('textarea') as Element, mockText);

  const countOfCharsElement = screen.queryByText(mockText.length);
  expect(countOfCharsElement).toBeInTheDocument();
  expect(countOfCharsElement).toHaveStyleRule('color', lightPalette.error['500']);

  expect(screen.getAllByText(new RegExp(`${maxLength}`)).length).toBe(1);
  expect(container.querySelector('textarea')).toHaveValue(mockText);
});

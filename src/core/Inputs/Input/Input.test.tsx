import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from 'vitest';

import { EasydevProvider } from '@core/Theme';
import { lightPalette } from '@core/Theme/themePalette';

import { Input } from '.';
import type { IconsProps } from '../types';

test('label, value, placeholder, error', () => {
  const value = 'abcdef';
  const placeholder = 'placeholder text';
  const labelText = 'label text';
  const errorText = 'error text';

  const { container } = render(
    <EasydevProvider>
      <Input label={labelText} error={errorText} value={value} placeholder={placeholder} />
    </EasydevProvider>
  );

  expect(container.querySelector(`input[value="${value}"]`)).toBeInTheDocument();
  expect(container.querySelector(`input[placeholder="${placeholder}"]`)).toBeInTheDocument();

  expect(screen.getByText(labelText)).toBeInTheDocument();

  // error
  const errorContainerText = screen.getByText(errorText);
  expect(errorContainerText).toBeInTheDocument();
  expect(container.querySelector('input')).toHaveStyleRule('border-color', lightPalette.error['500']);
  expect(errorContainerText).toHaveStyleRule('color', lightPalette.error['500']);
});

test('waring, icons', () => {
  const customIcons = { warningIcon: <div className="material-symbols-rounded">undo</div> } as IconsProps;

  const warningText = 'warning text';

  const { container } = render(
    <EasydevProvider>
      <Input icons={customIcons} label="" warning={warningText} />
    </EasydevProvider>
  );

  const iconContainer = screen.getByText('undo');
  expect(iconContainer).toBeInTheDocument();
  expect(iconContainer.className).toBe('material-symbols-rounded');

  const warningContainerText = screen.getByText(warningText);
  expect(warningContainerText).toBeInTheDocument();
  expect(container.querySelector('input')).toHaveStyleRule('border-color', lightPalette.warning['700']);
  expect(warningContainerText).toHaveStyleRule('color', lightPalette.warning['700']);
});

test('message, isLoading', () => {
  const messageText = 'message text';

  const { container } = render(
    <EasydevProvider>
      <Input label="" message={messageText} isLoading />
    </EasydevProvider>
  );

  const messageContainerText = screen.getByText(messageText);
  expect(messageContainerText).toBeInTheDocument();

  expect(container.querySelector('div')).toHaveStyleRule('pointer-events', 'none');
});

test('disabled', () => {
  const { container } = render(
    <EasydevProvider>
      <Input label="" disabled />
    </EasydevProvider>
  );

  expect(container.querySelector('input')).toHaveStyleRule('cursor', 'default', {
    modifier: ':disabled',
  });
});

test('type', async () => {
  const { container } = render(
    <EasydevProvider>
      <Input label="" type="password" />
    </EasydevProvider>
  );

  expect(container.querySelector('input')).toHaveAttribute('type', 'password');

  const buttonElement = container.querySelector('button') as Element;
  await userEvent.click(buttonElement);

  expect(container.querySelector('input')).toHaveAttribute('type', 'text');
});

test('renderExtraMessage', () => {
  const extraMessageText = 'Extra Message';

  render(
    <EasydevProvider>
      <Input label="" renderExtraMessage={() => <div>{extraMessageText}</div>} />
    </EasydevProvider>
  );

  expect(screen.getByText(extraMessageText)).toBeInTheDocument();
});

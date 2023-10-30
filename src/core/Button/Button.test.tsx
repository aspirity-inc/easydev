import { AddIcon } from '@icons';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme/ThemeContext';
import { lightPalette } from '@core/Theme/themePalette';

import { Button } from '.';

const mockButtonText = 'Button';

test('Should be in document', () => {
  render(
    <EasydevProvider>
      <Button>{mockButtonText}</Button>
    </EasydevProvider>
  );
  expect(screen.getByText(mockButtonText)).toBeInTheDocument();
});

test('Should have icon', () => {
  const { container } = render(
    <EasydevProvider>
      <Button icon={<AddIcon className="custom-icon" />}>{mockButtonText}</Button>
    </EasydevProvider>
  );
  expect(container.getElementsByClassName('custom-icon').length).toBe(1);
});

test('Should have class', () => {
  render(
    <EasydevProvider>
      <Button className="hey">{mockButtonText}</Button>
    </EasydevProvider>
  );
  expect(screen.getByText(mockButtonText)).toHaveClass('hey');
});

test('Should be correct style', () => {
  render(
    <EasydevProvider>
      <Button style={{ fontSize: 55 }}>{mockButtonText}</Button>
    </EasydevProvider>
  );
  expect(screen.getByText(mockButtonText)).toHaveStyle({ fontSize: 55 });
});

test('Should be correct flex direction', () => {
  render(
    <EasydevProvider>
      <Button reversed>{mockButtonText}</Button>
    </EasydevProvider>
  );
  expect(screen.getByText(mockButtonText)).toHaveStyleRule('flex-direction', 'row-reverse');
});

test('Should be correct size', () => {
  render(
    <EasydevProvider>
      <Button size="sm">{mockButtonText}</Button>
    </EasydevProvider>
  );
  expect(screen.getByText(mockButtonText)).toHaveStyleRule('padding', '8px 6px');
  expect(screen.getByText(mockButtonText)).toHaveStyleRule('min-width', '120px');
});

test('Should be correct border radius', () => {
  render(
    <EasydevProvider>
      <Button rounded="lg">{mockButtonText}</Button>
    </EasydevProvider>
  );
  expect(screen.getByText(mockButtonText)).toHaveStyleRule('border-radius', '40px');
});

test('Should have loading icon', () => {
  const { container } = render(
    <EasydevProvider>
      <Button loading>{mockButtonText}</Button>
    </EasydevProvider>
  );
  expect(container.getElementsByClassName('easy-icon').length).toBe(1);
});

test('Should have custom loading icon', () => {
  const { container } = render(
    <EasydevProvider>
      <Button loading loadingIcon={<AddIcon className="custom-icon" />}>
        {mockButtonText}
      </Button>
    </EasydevProvider>
  );
  expect(container.getElementsByClassName('custom-icon').length).toBe(1);
});

test('Should have correct type', () => {
  render(
    <EasydevProvider>
      <Button type="submit">{mockButtonText}</Button>
    </EasydevProvider>
  );
  expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
});

test('Should have correct variant', () => {
  render(
    <EasydevProvider>
      <Button variant="secondary">{mockButtonText}</Button>
    </EasydevProvider>
  );
  expect(screen.getByText(mockButtonText)).toHaveStyleRule('background-color', lightPalette.surface['400']);
});

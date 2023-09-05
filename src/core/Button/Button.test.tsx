import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme/ThemeContext';

import { Button } from '.';
import { AddIcon } from './Button.stories';

const mockButtonText = 'Button';

test('Should be in document', () => {
  render(
    <EasydevProvider>
      <Button>{mockButtonText}</Button>
    </EasydevProvider>
  );
  expect(screen.getByText(mockButtonText)).toBeInTheDocument();
});

test('Should be in document', () => {
  render(
    <EasydevProvider>
      <Button icon={<AddIcon />}>{mockButtonText}</Button>
    </EasydevProvider>
  );
  expect(screen.getByText(mockButtonText)).toBeInTheDocument();
});

test('Should be in document', () => {
  render(
    <EasydevProvider>
      <Button className="hey">{mockButtonText}</Button>
    </EasydevProvider>
  );
  expect(screen.getByText(mockButtonText)).toHaveClass('hey');
});

test('Should be correct font', () => {
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
  render(
    <EasydevProvider>
      <Button loading>{mockButtonText}</Button>
    </EasydevProvider>
  );
  expect(screen.getByText('cached')).toBeInTheDocument();
});

test('Should have custom loading icon', () => {
  render(
    <EasydevProvider>
      <Button loading loadingIcon={<AddIcon />}>
        {mockButtonText}
      </Button>
    </EasydevProvider>
  );
  expect(screen.getByText('add')).toBeInTheDocument();
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
  expect(screen.getByText(mockButtonText)).toHaveStyleRule('background-color', '#C3C3C5');
});

test('Should have correct color', () => {
  render(
    <EasydevProvider>
      <Button color="#aaaaaa">{mockButtonText}</Button>
    </EasydevProvider>
  );
  expect(screen.getByText(mockButtonText)).toHaveStyleRule('color', '#aaaaaa');
});

test('Should have correct bgColor', () => {
  render(
    <EasydevProvider>
      <Button bgColor="#eaeaea">{mockButtonText}</Button>
    </EasydevProvider>
  );
  expect(screen.getByText(mockButtonText)).toHaveStyleRule('background-color', '#eaeaea');
});

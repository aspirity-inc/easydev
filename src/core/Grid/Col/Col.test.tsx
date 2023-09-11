import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { Col } from '..';

const mockGridColText = 'Grid col text';

test('Should be in document', () => {
  render(
    <EasydevProvider>
      <Col>{mockGridColText}</Col>
    </EasydevProvider>
  );
  expect(screen.getByText(mockGridColText)).toBeInTheDocument();
});

test('Should have custom size', () => {
  const width = `${Math.round((120 / 24) * 10e7) / 10e5}%`;
  render(
    <EasydevProvider>
      <Col size={120} columns={24}>
        {mockGridColText}
      </Col>
    </EasydevProvider>
  );
  expect(screen.getByText(mockGridColText)).toHaveStyleRule('max-width', width);
  expect(screen.getByText(mockGridColText)).toHaveStyleRule('flex-basis', width);
});

test('Should have custom align-content', () => {
  render(
    <EasydevProvider>
      <Col alignContent={'flex-end'}>{mockGridColText}</Col>
    </EasydevProvider>
  );
  expect(screen.getByText(mockGridColText)).toHaveStyleRule('align-content', 'flex-end');
});

test('Should have custom align-self', () => {
  render(
    <EasydevProvider>
      <Col alignSelf={'flex-end'}>{mockGridColText}</Col>
    </EasydevProvider>
  );
  expect(screen.getByText(mockGridColText)).toHaveStyleRule('align-self', 'flex-end');
});

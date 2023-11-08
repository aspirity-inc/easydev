import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { Col, Row } from '.';
import { StyledCol } from './Col/styles';

const mockGridRowText = 'Grid row text';

test('Should have class', () => {
  const { container } = render(
    <EasydevProvider>
      <Row className="grid-row">{mockGridRowText}</Row>
    </EasydevProvider>
  );
  expect(container.getElementsByClassName('grid-row').length).toBe(1);
});

test('Should have correct style', () => {
  render(
    <EasydevProvider>
      <Row style={{ fontSize: 55 }}>{mockGridRowText}</Row>
    </EasydevProvider>
  );
  expect(screen.getByText(mockGridRowText)).toHaveStyle({ fontSize: 55 });
});

test('column gap should be custom', () => {
  render(
    <EasydevProvider>
      <Row columnGap={24}>{mockGridRowText}</Row>
    </EasydevProvider>
  );
  expect(screen.getByText(mockGridRowText)).toHaveStyleRule('column-gap', '24px');
});

test('row gap should be custom', () => {
  render(
    <EasydevProvider>
      <Row rowGap={27}>{mockGridRowText}</Row>
    </EasydevProvider>
  );
  expect(screen.getByText(mockGridRowText)).toHaveStyleRule('row-gap', '27px');
});

test('row spacing - padding top should be custom', () => {
  const { container } = render(
    <EasydevProvider>
      <Row rowSpacing={20}>
        <Col>{mockGridRowText}</Col>
      </Row>
    </EasydevProvider>
  );
  expect(container.querySelector('.easy_grid-row')).toHaveStyleRule('padding-top', '20px', {
    modifier: StyledCol.toString(),
  });
});

test('column spacing - padding left should be custom', () => {
  const { container } = render(
    <EasydevProvider>
      <Row columnSpacing={30}>
        <Col>{mockGridRowText}</Col>
      </Row>
    </EasydevProvider>
  );
  expect(container.querySelector('.easy_grid-row')).toHaveStyleRule('padding-left', '30px', {
    modifier: StyledCol.toString(),
  });
});

test('justify-content should be custom', () => {
  render(
    <EasydevProvider>
      <Row justify="left">{mockGridRowText}</Row>
    </EasydevProvider>
  );
  expect(screen.getByText(mockGridRowText)).toHaveStyleRule('justify-content', 'left');
});

test('align-items should be custom', () => {
  render(
    <EasydevProvider>
      <Row align="flex-end">{mockGridRowText}</Row>
    </EasydevProvider>
  );
  expect(screen.getByText(mockGridRowText)).toHaveStyleRule('align-items', 'flex-end');
});

test('flex-direction should be custom', () => {
  render(
    <EasydevProvider>
      <Row direction="column-reverse">{mockGridRowText}</Row>
    </EasydevProvider>
  );
  expect(screen.getByText(mockGridRowText)).toHaveStyleRule('flex-direction', 'column-reverse');
});

test('flex-wrap should be custom', () => {
  render(
    <EasydevProvider>
      <Row wrap="wrap-reverse">{mockGridRowText}</Row>
    </EasydevProvider>
  );
  expect(screen.getByText(mockGridRowText)).toHaveStyleRule('flex-wrap', 'wrap-reverse');
});

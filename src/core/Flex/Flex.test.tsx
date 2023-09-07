import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';

import { Flex } from '.';

const mockFlexText = 'Flex text';

describe('Flex default', () => {
  beforeEach(() => {
    render(<Flex>{mockFlexText}</Flex>);
  });

  test('display should be flex', () => {
    expect(screen.getByText(mockFlexText)).toHaveStyleRule('display', 'flex');
  });

  test('flex-direction should be row', () => {
    expect(screen.getByText(mockFlexText)).toHaveStyleRule('flex-direction', 'row');
  });

  test('justify-content should be flex-start', () => {
    expect(screen.getByText(mockFlexText)).toHaveStyleRule('justify-content', 'flex-start');
  });

  test('align-items should be center', () => {
    expect(screen.getByText(mockFlexText)).toHaveStyleRule('align-items', 'center');
  });

  test('flex-wrap should be wrap', () => {
    expect(screen.getByText(mockFlexText)).toHaveStyleRule('flex-wrap', 'wrap');
  });
});

test('row-gap should be custom', () => {
  render(<Flex rowGap={10}>{mockFlexText}</Flex>);
  expect(screen.getByText(mockFlexText)).toHaveStyleRule('row-gap', '10px');
});

test('column-gap should be custom', () => {
  render(<Flex columnGap={10}>{mockFlexText}</Flex>);
  expect(screen.getByText(mockFlexText)).toHaveStyleRule('column-gap', '10px');
});

test('gap should be custom', () => {
  render(<Flex gap={10}>{mockFlexText}</Flex>);
  expect(screen.getByText(mockFlexText)).toHaveStyleRule('gap', '10px');
});

test('Should be correct style', () => {
  render(<Flex style={{ fontSize: 55 }}>{mockFlexText}</Flex>);
  expect(screen.getByText(mockFlexText)).toHaveStyle({ fontSize: 55 });
});

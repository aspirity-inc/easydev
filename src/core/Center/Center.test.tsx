import { render, screen } from '@testing-library/react';
import { describe, beforeEach, expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';
import { Text } from '@core/Typography';

import { Center } from '.';

const mockCenterText = 'Center text';

describe('Center default', () => {
  beforeEach(() => {
    render(
      <EasydevProvider>
        <Center>
          <Text>{mockCenterText}</Text>
        </Center>
      </EasydevProvider>
    );
  });

  test('Should be in document', () => {
    expect(screen.getByText(mockCenterText).parentNode).toBeInTheDocument();
  });

  test('display should be flex', () => {
    expect(screen.getByText(mockCenterText).parentNode).toHaveStyleRule('display', 'flex');
  });

  test('align-items should be equal to center', () => {
    expect(screen.getByText(mockCenterText).parentNode).toHaveStyleRule('align-items', 'center');
  });

  test('justify-content should be equal to center', () => {
    expect(screen.getByText(mockCenterText).parentNode).toHaveStyleRule('justify-content', 'center');
  });

  test('gap should be equal to 0px', () => {
    expect(screen.getByText(mockCenterText).parentNode).toHaveStyleRule('gap', '0px');
  });
});

test('display should be inline-flex', () => {
  render(
    <EasydevProvider>
      <Center inline>
        <Text>{mockCenterText}</Text>
      </Center>
    </EasydevProvider>
  );
  expect(screen.getByText(mockCenterText).parentNode).toHaveStyleRule('display', 'inline-flex');
});

test('gap should be custom', () => {
  render(
    <EasydevProvider>
      <Center gap={20}>
        <Text>{mockCenterText}</Text>
      </Center>
    </EasydevProvider>
  );
  expect(screen.getByText(mockCenterText).parentNode).toHaveStyleRule('gap', '20px');
});

test('Should be correct style', () => {
  render(
    <EasydevProvider>
      <Center style={{ fontSize: 50 }}>
        <Text>{mockCenterText}</Text>
      </Center>
    </EasydevProvider>
  );
  expect(screen.getByText(mockCenterText).parentNode).toHaveStyle({ fontSize: 50 });
});

import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme/ThemeContext';

import { Space } from '.';

const mockSpaceText = 'Space Text';

describe('Space default', () => {
  beforeEach(() => {
    render(
      <EasydevProvider>
        <Space>{mockSpaceText}</Space>
      </EasydevProvider>
    );
  });

  test('Should be in document', () => {
    expect(screen.getByText(mockSpaceText)).toBeInTheDocument();
  });

  test('flex-direction should be column', () => {
    expect(screen.getByText(mockSpaceText)).toHaveStyleRule('flex-direction', 'column');
  });

  test('gap should be 16px', () => {
    expect(screen.getByText(mockSpaceText)).toHaveStyleRule('gap', '16px');
  });

  test('align-items should be center', () => {
    expect(screen.getByText(mockSpaceText)).toHaveStyleRule('align-items', 'center');
  });

  test('justify-content should be flex-start', () => {
    expect(screen.getByText(mockSpaceText)).toHaveStyleRule('justify-content', 'flex-start');
  });
});

test('flex-direction should be custom', () => {
  render(
    <EasydevProvider>
      <Space direction="row">{mockSpaceText}</Space>
    </EasydevProvider>
  );
  expect(screen.getByText(mockSpaceText)).toHaveStyleRule('flex-direction', 'row');
});

test('gap should be custom', () => {
  render(
    <EasydevProvider>
      <Space size={50}>{mockSpaceText}</Space>
    </EasydevProvider>
  );
  expect(screen.getByText(mockSpaceText)).toHaveStyleRule('gap', '50px');
});

test('align-items should be custom', () => {
  render(
    <EasydevProvider>
      <Space alignItems="flex-end">{mockSpaceText}</Space>
    </EasydevProvider>
  );
  expect(screen.getByText(mockSpaceText)).toHaveStyleRule('align-items', 'flex-end');
});

test('justify-content should be custom', () => {
  render(
    <EasydevProvider>
      <Space justifyContent="left">{mockSpaceText}</Space>
    </EasydevProvider>
  );
  expect(screen.getByText(mockSpaceText)).toHaveStyleRule('justify-content', 'left');
});

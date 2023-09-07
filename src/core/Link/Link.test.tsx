import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';
import { lightPalette } from '@core/Theme/themePalette';

import { Link } from '.';

const mockLinkText = 'Link text';

describe('Link default', () => {
  beforeEach(() => {
    render(
      <EasydevProvider>
        <Link>{mockLinkText}</Link>
      </EasydevProvider>
    );
  });

  test('Should be in document', () => {
    expect(screen.getByText(mockLinkText)).toBeInTheDocument();
  });

  test('Should have tag a', () => {
    expect(screen.getByText(mockLinkText).tagName).equal('A');
  });

  test('Should have correct color', () => {
    expect(screen.getByText(mockLinkText)).toHaveStyleRule('color', lightPalette.link['300']);
  });

  test('cursor should be pointer', () => {
    expect(screen.getByText(mockLinkText)).toHaveStyleRule('cursor', 'pointer');
  });

  test('text-decoration should be underline transparent', () => {
    expect(screen.getByText(mockLinkText)).toHaveStyleRule('text-decoration', 'underline transparent');
  });
});

describe('Link disabled', () => {
  beforeEach(() => {
    render(
      <EasydevProvider>
        <Link disabled>{mockLinkText}</Link>
      </EasydevProvider>
    );
  });

  test('cursor should be default', () => {
    expect(screen.getByText(mockLinkText)).toHaveStyleRule('cursor', 'default');
  });

  test('Should have correct color', () => {
    expect(screen.getByText(mockLinkText)).toHaveStyleRule('color', lightPalette.secondary['300']);
  });

  test('pointer-events should be none', () => {
    expect(screen.getByText(mockLinkText)).toHaveStyleRule('pointer-events', 'none');
  });
});

test('text-decoration should be underline', () => {
  render(
    <EasydevProvider>
      <Link defaultUnderline>{mockLinkText}</Link>
    </EasydevProvider>
  );
  expect(screen.getByText(mockLinkText)).toHaveStyleRule('text-decoration', 'underline');
});

test('Should be correct attributes', () => {
  render(
    <EasydevProvider>
      <Link href="https://aspirity.com/" target="_blank">
        {mockLinkText}
      </Link>
    </EasydevProvider>
  );
  expect(screen.getByText(mockLinkText)).toHaveAttribute('href', 'https://aspirity.com/');
  expect(screen.getByText(mockLinkText)).toHaveAttribute('target', '_blank');
});

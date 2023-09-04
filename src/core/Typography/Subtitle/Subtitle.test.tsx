import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme/ThemeContext';

import { Subtitle } from '.';

const mockSubtitle = 'Subtitle';

describe('Subtitle default', () => {
  test('Should be in document', () => {
    render(
      <EasydevProvider>
        <Subtitle>{mockSubtitle}</Subtitle>
      </EasydevProvider>
    );
    expect(screen.getByText(mockSubtitle)).toBeInTheDocument();
  });

  test('Should have class subtitle', () => {
    render(
      <EasydevProvider>
        <Subtitle className="subtitle">{mockSubtitle}</Subtitle>
      </EasydevProvider>
    );
    expect(screen.getByText(mockSubtitle)).toHaveClass('subtitle');
  });

  test('Should be h1', () => {
    render(
      <EasydevProvider>
        <Subtitle tag="h1">{mockSubtitle}</Subtitle>
      </EasydevProvider>
    );
    expect(screen.getByText(mockSubtitle)?.tagName).equal('H1');
  });
});

test('Should be correct level', () => {
  render(
    <EasydevProvider>
      <Subtitle level={3}>{mockSubtitle}</Subtitle>
    </EasydevProvider>
  );
  expect(screen.getByText(mockSubtitle)).toBeInTheDocument();
});

describe('Subtitle styles', () => {
  test('Should be correct styles', () => {
    render(
      <EasydevProvider>
        <Subtitle style={{ fontSize: 40 }}>{mockSubtitle}</Subtitle>
      </EasydevProvider>
    );
    expect(screen.getByText(mockSubtitle)).toHaveStyle({ fontSize: 40 });
  });

  test('Should be color #cdcdcd', () => {
    render(
      <EasydevProvider>
        <Subtitle color="#cdcdcd">{mockSubtitle}</Subtitle>
      </EasydevProvider>
    );
    expect(screen.getByText(mockSubtitle)).toHaveStyle('color: "#cdcdcd" ');
  });

  test('Should be background-color #efefef', () => {
    render(
      <EasydevProvider>
        <Subtitle bgColor="#efefef">{mockSubtitle}</Subtitle>
      </EasydevProvider>
    );
    expect(screen.getByText(mockSubtitle)).toHaveStyle('backgroundColor: "#efefef"');
  });
});

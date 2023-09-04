import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { ThemeProvider } from '@core/Theme/ThemeContext';

import { Subtitle } from '.';

const mockSubtitle = 'Subtitle';

describe('Subtitle default', () => {
  test('Should be in document', () => {
    render(
      <ThemeProvider>
        <Subtitle>{mockSubtitle}</Subtitle>
      </ThemeProvider>
    );
    expect(screen.getByText(mockSubtitle)).toBeInTheDocument();
  });

  test('Should have class subtitle', () => {
    render(
      <ThemeProvider>
        <Subtitle className="subtitle">{mockSubtitle}</Subtitle>
      </ThemeProvider>
    );
    expect(screen.getByText(mockSubtitle)).toHaveClass('subtitle');
  });

  test('Should be h1', () => {
    render(
      <ThemeProvider>
        <Subtitle tag="h1">{mockSubtitle}</Subtitle>
      </ThemeProvider>
    );
    expect(screen.getByText(mockSubtitle)?.tagName).equal('H1');
  });
});

test('Should be correct level', () => {
  render(
    <ThemeProvider>
      <Subtitle level={3}>{mockSubtitle}</Subtitle>
    </ThemeProvider>
  );
  expect(screen.getByText(mockSubtitle)).toBeInTheDocument();
});

describe('Subtitle styles', () => {
  test('Should be correct styles', () => {
    render(
      <ThemeProvider>
        <Subtitle style={{ fontSize: 40 }}>{mockSubtitle}</Subtitle>
      </ThemeProvider>
    );
    expect(screen.getByText(mockSubtitle)).toHaveStyle({ fontSize: 40 });
  });

  test('Should be color #cdcdcd', () => {
    render(
      <ThemeProvider>
        <Subtitle color="#cdcdcd">{mockSubtitle}</Subtitle>
      </ThemeProvider>
    );
    expect(screen.getByText(mockSubtitle)).toHaveStyle('color: "#cdcdcd" ');
  });

  test('Should be background-color #efefef', () => {
    render(
      <ThemeProvider>
        <Subtitle bgColor="#efefef">{mockSubtitle}</Subtitle>
      </ThemeProvider>
    );
    expect(screen.getByText(mockSubtitle)).toHaveStyle('backgroundColor: "#efefef"');
  });
});

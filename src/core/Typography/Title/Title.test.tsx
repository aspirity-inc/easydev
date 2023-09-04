import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { ThemeProvider } from '@core/Theme/ThemeContext';

import { Title } from '.';

const mockTitle = 'Title';

describe('Title default', () => {
  test('Should be in document', () => {
    render(
      <ThemeProvider>
        <Title>{mockTitle}</Title>
      </ThemeProvider>
    );
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });

  test('Should have class title', () => {
    render(
      <ThemeProvider>
        <Title className="title">{mockTitle}</Title>
      </ThemeProvider>
    );
    expect(screen.getByText(mockTitle)).toHaveClass('title');
  });

  test('Should be h2', () => {
    render(
      <ThemeProvider>
        <Title variant="h2">{mockTitle}</Title>
      </ThemeProvider>
    );
    expect(screen.getByText(mockTitle)?.tagName).equal('H2');
  });
});

describe('Title styles', () => {
  test('Should be correct styles', () => {
    render(
      <ThemeProvider>
        <Title style={{ fontSize: 40 }}>{mockTitle}</Title>
      </ThemeProvider>
    );
    expect(screen.getByText(mockTitle)).toHaveStyle({ fontSize: 40 });
  });

  test('Should be color #cdcdcd', () => {
    render(
      <ThemeProvider>
        <Title color="#cdcdcd">{mockTitle}</Title>
      </ThemeProvider>
    );
    expect(screen.getByText(mockTitle)).toHaveStyle('color: "#cdcdcd" ');
  });

  test('Should be background-color #efefef', () => {
    render(
      <ThemeProvider>
        <Title bgColor="#efefef">{mockTitle}</Title>
      </ThemeProvider>
    );
    expect(screen.getByText(mockTitle)).toHaveStyle('backgroundColor: "#efefef"');
  });
});

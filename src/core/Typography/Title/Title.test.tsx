import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme/ThemeContext';

import { Title } from '.';

const mockTitle = 'Title';

describe('Title default', () => {
  test('Should be in document', () => {
    render(
      <EasydevProvider>
        <Title>{mockTitle}</Title>
      </EasydevProvider>
    );
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });

  test('Should have class title', () => {
    render(
      <EasydevProvider>
        <Title className="title">{mockTitle}</Title>
      </EasydevProvider>
    );
    expect(screen.getByText(mockTitle)).toHaveClass('title');
  });

  test('Should be h2', () => {
    render(
      <EasydevProvider>
        <Title variant="h2">{mockTitle}</Title>
      </EasydevProvider>
    );
    expect(screen.getByText(mockTitle)?.tagName).equal('H2');
  });
});

describe('Title styles', () => {
  test('Should be correct styles', () => {
    render(
      <EasydevProvider>
        <Title style={{ fontSize: 40 }}>{mockTitle}</Title>
      </EasydevProvider>
    );
    expect(screen.getByText(mockTitle)).toHaveStyle({ fontSize: 40 });
  });
});

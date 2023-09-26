import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';

import { Text } from '.';

const mockText = 'Text';

describe('Text default', () => {
  beforeEach(() => {
    render(<Text className="text">{mockText}</Text>);
  });

  test('Should show text', () => {
    expect(screen.getByText(mockText)).toBeInTheDocument();
  });

  test('Should be paragraph', () => {
    expect(screen.getByText(mockText)?.tagName).equal('P');
  });

  test('Should have class text', () => {
    expect(screen.getByText(mockText)).toHaveClass('text');
  });
});

test('Should be span', () => {
  render(<Text as="span">{mockText}</Text>);
  expect(screen.getByText(mockText)?.tagName).equal('SPAN');
});

describe('Text styles', () => {
  test('Should have styles', () => {
    render(
      <Text style={{ backgroundColor: 'rgb(5, 192, 203)', color: 'rgb(255, 192, 203)', fontSize: '20px' }}>
        {mockText}
      </Text>
    );
    expect(screen.getByText(mockText)).toHaveStyle({
      backgroundColor: 'rgb(5, 192, 203)',
      color: 'rgb(255, 192, 203)',
      fontSize: '20px',
    });
  });
});

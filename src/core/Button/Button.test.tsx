import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme/ThemeContext';

import { Button } from '.';

const mockButtonText = 'Button';
const AddIcon = () => <div className="material-symbols-rounded">add</div>;

describe('Button default', () => {
  test('Should be in document', () => {
    render(
      <EasydevProvider>
        <Button>{mockButtonText}</Button>
      </EasydevProvider>
    );
    expect(screen.getByText(mockButtonText)).toBeInTheDocument();
  });

  test('Should be in document', () => {
    render(
      <EasydevProvider>
        <Button icon={<AddIcon />}>{mockButtonText}</Button>
      </EasydevProvider>
    );
    expect(screen.getByText(mockButtonText)).toBeInTheDocument();
  });

  test('Should be in document', () => {
    render(
      <EasydevProvider>
        <Button className="hey">{mockButtonText}</Button>
      </EasydevProvider>
    );
    expect(screen.getByText(mockButtonText)).toHaveClass('hey');
  });

  test('Should be in document', () => {
    render(
      <EasydevProvider>
        <Button rounded="lg">{mockButtonText}</Button>
      </EasydevProvider>
    );

    expect(screen.getByText(mockButtonText)).toHaveStyleRule('border-radius', '40px');
  });
});

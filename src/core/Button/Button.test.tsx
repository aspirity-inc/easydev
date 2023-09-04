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

  test('Should be correct font', () => {
    render(
      <EasydevProvider>
        <Button style={{ fontSize: 55 }}>{mockButtonText}</Button>
      </EasydevProvider>
    );
    expect(screen.getByText(mockButtonText)).toHaveStyle({ fontSize: 55 });
  });

  test('Should be correct flex direction', () => {
    render(
      <EasydevProvider>
        <Button reversed>{mockButtonText}</Button>
      </EasydevProvider>
    );
    expect(screen.getByText(mockButtonText)).toHaveStyleRule('flex-direction', 'row-reverse');
  });

  test('Should be correct size', () => {
    render(
      <EasydevProvider>
        <Button size="sm">{mockButtonText}</Button>
      </EasydevProvider>
    );
    expect(screen.getByText(mockButtonText)).toHaveStyleRule('padding', '8px 6px');
    expect(screen.getByText(mockButtonText)).toHaveStyleRule('min-width', '120px');
  });

  test('Should be correct border radius', () => {
    render(
      <EasydevProvider>
        <Button rounded="lg">{mockButtonText}</Button>
      </EasydevProvider>
    );
    expect(screen.getByText(mockButtonText)).toHaveStyleRule('border-radius', '40px');
  });

  test('Should have loading icon', () => {
    const { container } = render(
      <EasydevProvider>
        <Button loading>{mockButtonText}</Button>
      </EasydevProvider>
    );
    expect(container.getElementsByClassName('material-symbols-rounded').length).toBe(1);
  });

  test('Should have custom loading icon', () => {
    const { container } = render(
      <EasydevProvider>
        <Button loading loadingIcon={<div className="material-symbols-rounded">add</div>}>
          {mockButtonText}
        </Button>
      </EasydevProvider>
    );
    expect(container.getElementsByClassName('material-symbols-rounded').length).toBe(1);
  });

  // test('Should have correct type', () => {
  //   const { container } = render(
  //     <EasydevProvider>
  //       <Button type="submit">{mockButtonText}</Button>
  //     </EasydevProvider>
  //   );
  //   screen.debug();
  //   expect(container).toBe('submit');
  // });
});

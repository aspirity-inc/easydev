import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { Chip } from '.';

const mockChipText = 'Chip text';

test('Should be in the document', () => {
  render(
    <EasydevProvider>
      <Chip label={mockChipText} />
    </EasydevProvider>
  );
  expect(screen.getByText(mockChipText)).toBeInTheDocument();
});

test('Should be in the document', () => {
  render(
    <EasydevProvider>
      <Chip label={mockChipText} variant="outlined" />
    </EasydevProvider>
  );
  expect(screen.getByText(mockChipText)).toBeInTheDocument();
});

test('Testing click on the chip, should change isChecked state', () => {
  let isChecked = false;
  const changeIsChecked = () => {
    isChecked = !isChecked;
  };

  render(
    <EasydevProvider>
      <Chip label={mockChipText} variant="outlined" onChange={changeIsChecked} />
    </EasydevProvider>
  );

  fireEvent.click(screen.getByText(mockChipText));
  expect(isChecked).toBe(true);
});

test('Testing click on the chip, should not change isChecked state', () => {
  let isChecked = false;
  const changeIsChecked = () => {
    isChecked = !isChecked;
  };

  render(
    <EasydevProvider>
      <Chip label={mockChipText} onChange={changeIsChecked} disabled />
    </EasydevProvider>
  );

  fireEvent.click(screen.getByText(mockChipText));
  expect(isChecked).toBe(false);
});

test('Testing defaultChecked value of the chip', () => {
  let isChecked = true;
  const changeIsChecked = () => {
    isChecked = !isChecked;
  };

  render(
    <EasydevProvider>
      <Chip label={mockChipText} onChange={changeIsChecked} defaultChecked={isChecked} />
    </EasydevProvider>
  );

  fireEvent.click(screen.getByText(mockChipText));
  expect(isChecked).toBe(false);
});

test('Should be correct background color', () => {
  render(
    <EasydevProvider>
      <Chip label={mockChipText} bgColor="#ededed" />
    </EasydevProvider>
  );

  expect(screen.getByText(mockChipText)).toHaveStyleRule('background-color', '#ededed');
});

test('Should be correct color', () => {
  render(
    <EasydevProvider>
      <Chip label={mockChipText} color="#eaeaea" />
    </EasydevProvider>
  );

  expect(screen.getByText(mockChipText)).toHaveStyleRule('color', '#eaeaea');
});

test('Chip content should be in the document', () => {
  render(
    <EasydevProvider>
      <Chip label={mockChipText} chipContent={<div>Chip content</div>} />
    </EasydevProvider>
  );

  expect(screen.getByText('Chip content')).toBeInTheDocument();
});

test('Should have correct style', () => {
  render(
    <EasydevProvider>
      <Chip label={mockChipText} style={{ fontSize: 60 }} />
    </EasydevProvider>
  );

  expect(screen.getByText(mockChipText)).toHaveStyle({ fontSize: 60 });
});

test('Should have correct class name', () => {
  const { container } = render(
    <EasydevProvider>
      <Chip label={mockChipText} className="chip" />
    </EasydevProvider>
  );
  expect(container.getElementsByClassName('chip').length).toBe(1);
});

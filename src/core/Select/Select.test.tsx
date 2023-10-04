import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { OptionType, Select } from '.';

const options: OptionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'chocolate1', label: 'Chocolate1' },
  { value: 'strawberry1', label: 'Strawberry1' },
  { value: 'vanilla1', label: 'Vanilla1' },
  { value: 'chocolate2', label: 'Chocolate2' },
  { value: 'strawberry2', label: 'Strawberry2', isDisabled: true },
  { value: 'vanilla2', label: 'Vanilla2', isDisabled: true },
];

test('', async () => {
  const { container } = render(
    <EasydevProvider>
      <Select options={options} placeholder="SELECT" />
    </EasydevProvider>
  );

  // expect(document.body).toMatchSnapshot();

  // const selectElement = screen.getByText('SELECT').parentNode as Element;

  // await userEvent.click(selectElement);

  const openSelectListElement = container.querySelector('.react-select__indicator') as Element;
  await userEvent.click(openSelectListElement);
  // expect(container.querySelector('.react-select__indicator')).toBeInTheDocument();
  // expect(document.body).toMatchSnapshot();

  const selectMenuElement = container.querySelector('.react-select__menu') as Element;
  expect(selectMenuElement).toBeInTheDocument();

  options.forEach((option) => {
    expect(screen.getByText(option.label)).toBeInTheDocument();
  });

  // expect(document.body).toMatchSnapshot();
  // const modalClose = screen.getByText(mockModalText).parentNode;
  // expect(modalClose).toHaveStyleRule('opacity', '0');
});

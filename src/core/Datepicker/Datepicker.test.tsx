import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { Datepicker } from '.';

test('onChange value, open datepicker', async () => {
  let date: Date | [Date | null, Date | null] | null = null;

  const { container } = render(
    <EasydevProvider>
      <Datepicker label="" onChange={(newDate) => (date = newDate)} value="24.12.1993" />
    </EasydevProvider>
  );

  expect(container.querySelector('input')).toHaveValue('24.12.1993');

  expect(container.querySelector('.react-datepicker__header')).not.toBeInTheDocument();
  expect(container.querySelector('.react-datepicker__month')).not.toBeInTheDocument();

  await userEvent.click(container.querySelector('.easy_datepicker-label') as Element);

  expect(container.querySelector('.react-datepicker__header')).toBeInTheDocument();
  expect(container.querySelector('.react-datepicker__month')).toBeInTheDocument();

  await userEvent.click(container.querySelector('.react-datepicker__day--001') as Element);
  expect(date).not.toBeNull();
});

test('disabled label placeholderText', () => {
  const label = 'label text';
  const placeholderText = 'placeholder text';

  const { container } = render(
    <EasydevProvider>
      <Datepicker disabled label={label} onChange={(_) => _} placeholderText={placeholderText} />
    </EasydevProvider>
  );

  expect(screen.getByText(label)).toBeInTheDocument();

  const inputElement = container.querySelector('input');
  expect(inputElement).toHaveAttribute('disabled');
  expect(inputElement).toHaveAttribute('placeholder', placeholderText);
});

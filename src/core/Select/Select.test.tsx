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

test('default select', async () => {
  const { container } = render(
    <EasydevProvider>
      <Select options={options} placeholder="SELECT" rounded />
    </EasydevProvider>
  );

  expect(screen.getByText('SELECT')).toBeInTheDocument();
  expect(screen.queryByText(options[0].label)).not.toBeInTheDocument();

  const openSelectListElement = container.querySelector('.react-select__indicator') as Element;
  await userEvent.click(openSelectListElement);

  const selectMenuElement = container.querySelector('.react-select__menu') as Element;
  expect(selectMenuElement).toBeInTheDocument();

  options.forEach((option) => {
    expect(screen.getByText(option.label)).toBeInTheDocument();
  });

  await userEvent.click(screen.getByText(options[0].label));
  expect(screen.queryByText('SELECT')).not.toBeInTheDocument();
  expect(screen.getByText(options[0].label)).toBeInTheDocument();

  expect(container.querySelector('div')).toHaveStyleRule('border-radius', '40px', {
    modifier: '.react-select__control',
  });
});

test('noOptionsMessage', async () => {
  const noOptionsMessage = 'options list is empty';

  const { container } = render(
    <EasydevProvider>
      <Select options={[]} placeholder="SELECT" rounded noOptionsMessage={() => noOptionsMessage} />
    </EasydevProvider>
  );

  const openSelectListElement = container.querySelector('.react-select__indicator') as Element;
  await userEvent.click(openSelectListElement);

  expect(screen.getByText(noOptionsMessage)).toBeInTheDocument();
});

test('value', async () => {
  render(
    <EasydevProvider>
      <Select options={options} value={options[0]} />
    </EasydevProvider>
  );

  expect(screen.getByText(options[0].label)).toBeInTheDocument();
});

test('icons', async () => {
  const ControlIcon = () => <div className="material-symbols-rounded">nutrition</div>;
  const ArrowDown = () => <div className="material-symbols-rounded">keyboard_arrow_down</div>;
  const SelectedIcon = () => <div className="material-symbols-rounded">priority</div>;

  const { container } = render(
    <EasydevProvider>
      <Select
        options={options}
        dropdownIcon={<ArrowDown />}
        selectedIcon={<SelectedIcon />}
        controlIcon={<ControlIcon />}
      />
    </EasydevProvider>
  );

  expect(screen.getByText('nutrition')).toBeInTheDocument();
  expect(screen.getByText('keyboard_arrow_down')).toBeInTheDocument();

  const openSelectListElement = container.querySelector('.react-select__indicator') as Element;
  await userEvent.click(openSelectListElement);

  expect(screen.getAllByText('priority')[0]).toBeInTheDocument();
});

test('isMulti', async () => {
  const { container } = render(
    <EasydevProvider>
      <Select options={options} isMulti={true} hideSelectedOptions={false} />
    </EasydevProvider>
  );

  const openSelectListElement = container.querySelector('.react-select__indicator') as Element;
  await userEvent.click(openSelectListElement);

  await userEvent.click(container.querySelectorAll('.react-select__option')[0]);
  await userEvent.click(openSelectListElement);

  await userEvent.click(container.querySelectorAll('.react-select__option')[1]);
  await userEvent.click(openSelectListElement);

  expect(container.querySelectorAll('.react-select__option--is-selected').length).toBe(2);
});

test('clearButtonText', async () => {
  const clearButtonText = 'delete';

  render(
    <EasydevProvider>
      <Select options={options} isMulti value={[options[0], options[1]]} clearButtonText={clearButtonText} />
    </EasydevProvider>
  );

  expect(screen.getByText(clearButtonText)).toBeInTheDocument();
});

test('search', async () => {
  const noOptionsMessage = 'Not found';

  const { container } = render(
    <EasydevProvider>
      <Select options={options} isMulti isSearchable noOptionsMessage={() => noOptionsMessage} />
    </EasydevProvider>
  );

  await userEvent.type(container.querySelector('input') as Element, 'Cho');
  expect(container.querySelector('.react-select__menu-list')?.childNodes.length).toBe(3);

  await userEvent.type(container.querySelector('input') as Element, 'Cat');
  expect(screen.getByText(noOptionsMessage)).toBeInTheDocument();
});

test('selectType', async () => {
  render(
    <EasydevProvider>
      <Select options={options} selectType="async" />
    </EasydevProvider>
  );

  expect(screen.getByText('search').className).toBe('material-symbols-rounded');
});

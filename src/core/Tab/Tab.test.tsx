import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { Tab } from '.';

const mockTabText = 'Tab text';

test('disabled', () => {
  render(
    <EasydevProvider>
      <Tab
        title={mockTabText}
        onClick={() => {
          alert('');
        }}
        active={false}
        disabled={true}
      />
    </EasydevProvider>
  );

  expect(screen.getByText(mockTabText).parentElement).toHaveStyleRule('cursor', 'default');
});

test('active', () => {
  const { container } = render(
    <EasydevProvider>
      <Tab
        title={mockTabText}
        onClick={() => {
          alert('');
        }}
        active={true}
      />
    </EasydevProvider>
  );
  expect(container.getElementsByClassName('active').length).toBe(1);
});

test('change state', () => {
  let isActive = false;
  const changeIsActive = () => {
    isActive = !isActive;
  };

  render(
    <EasydevProvider>
      <Tab title={mockTabText} onClick={changeIsActive} active={isActive} />
    </EasydevProvider>
  );
  fireEvent.click(screen.getByText(mockTabText));
  expect(isActive).toBe(true);
});

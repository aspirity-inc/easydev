import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { TargetButton } from '.';

const targetButtonText = 'Target button value';

test('withIcon open', () => {
  render(
    <EasydevProvider>
      <TargetButton withIcon open>
        {targetButtonText}
      </TargetButton>
    </EasydevProvider>
  );

  expect(screen.getByText('keyboard_arrow_up')).toBeInTheDocument();
});

test('icon', () => {
  const AddButton = () => <div className="material-symbols-outlined">add</div>;

  render(
    <EasydevProvider>
      <TargetButton icon={<AddButton />}>{targetButtonText}</TargetButton>
    </EasydevProvider>
  );

  expect(screen.getByText('add')).toBeInTheDocument();
});

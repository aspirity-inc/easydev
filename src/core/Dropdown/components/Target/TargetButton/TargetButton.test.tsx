import { AddIcon } from '@icons';
import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { TargetButton } from '.';

const targetButtonText = 'Target button value';

test('withIcon open', () => {
  const { container } = render(
    <EasydevProvider>
      <TargetButton withIcon open>
        {targetButtonText}
      </TargetButton>
    </EasydevProvider>
  );

  expect(container.getElementsByClassName('easy-icon').length).toBe(1);
});

test('icon', () => {
  const { container } = render(
    <EasydevProvider>
      <TargetButton icon={<AddIcon className="custom-icon" />}>{targetButtonText}</TargetButton>
    </EasydevProvider>
  );

  expect(container.getElementsByClassName('custom-icon').length).toBe(1);
});

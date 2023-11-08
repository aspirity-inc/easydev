import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { Stepper } from '.';

test('correct count of all and active steps', () => {
  const { container } = render(
    <EasydevProvider>
      <Stepper count={8} currentStep={5} />
    </EasydevProvider>
  );

  const divContainer = container.querySelector('.easy_stepper');
  expect(divContainer?.childNodes.length).toBe(8);

  const activeSteps = container.querySelectorAll('.active');
  expect(activeSteps.length).toBe(5);
});

test('numeric, correct count of all and active steps', () => {
  const currentStep = 5;
  const { container } = render(
    <EasydevProvider>
      <Stepper numeric count={8} currentStep={currentStep} />
    </EasydevProvider>
  );

  const activeSteps = container.querySelectorAll('.done');
  expect(activeSteps.length).toBe(currentStep - 1);
});

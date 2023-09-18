import { render } from '@testing-library/react';
import { test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { Card } from '.';

const mockBadgeText = 'Badge text';

test('background-color and color should be error lightPalette.error', () => {
  render(
    <EasydevProvider>
      <Card>{mockBadgeText}</Card>
    </EasydevProvider>
  );
});

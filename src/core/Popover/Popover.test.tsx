import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { Button } from '@core/Button';
import { EasydevProvider } from '@core/Theme';

import { Popover } from '.';

const mockPopoverText = 'Open popover';

test('open popover', () => {
  render(
    <EasydevProvider>
      <Popover
        body="No depending be convinced in unfeeling he. Excellence she unaffected and too sentiments her. "
        placement="top"
        title="Header Popover"
      >
        <Button>{mockPopoverText}</Button>
      </Popover>
    </EasydevProvider>
  );

  fireEvent.click(screen.getByText(mockPopoverText));

  const element = screen.getByText(mockPopoverText).parentElement?.parentElement?.childNodes[1];
  expect(element).toHaveAttribute('data-show');
});

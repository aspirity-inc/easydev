import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { Button } from '@core/Button';
import { EasydevProvider } from '@core/Theme';

import { Popover } from '.';
import { StyledArrow } from './styles';

const mockPopoverText = 'Open popover';

test('open popover with placement top', () => {
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
  expect(element).toHaveStyleRule('opacity', '1', { modifier: '[data-show]' });
  expect(element).toHaveStyleRule('bottom', '-4px', {
    modifier: `[data-popper-placement^='top']>${StyledArrow.toString()}`,
  });
});

test('open popover by hover, inline style', () => {
  const { container } = render(
    <EasydevProvider>
      <Popover
        body="No depending be convinced in unfeeling he. Excellence she unaffected and too sentiments her. "
        placement="top"
        title="Header Popover"
        openOnHover={true}
        inline={true}
      >
        <Button>{mockPopoverText}</Button>
      </Popover>
    </EasydevProvider>
  );

  const elementContainer = container.querySelector('.easy_popover-triggerContainer');
  expect(elementContainer?.tagName).toBe('SPAN');

  const elementPopover = screen.getByText(mockPopoverText).parentElement?.parentElement?.childNodes[1];

  fireEvent.mouseEnter(screen.getByText(mockPopoverText));
  expect(elementPopover).toHaveAttribute('data-show');

  fireEvent.mouseLeave(screen.getByText(mockPopoverText));
  expect(elementPopover).not.toHaveAttribute('data-show');
});

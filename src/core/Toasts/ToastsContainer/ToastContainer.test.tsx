import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { Button } from '@core/Button';
import { Space } from '@core/Space';
import { EasydevProvider } from '@core/Theme/ThemeContext';

import { ToastContainer, toast } from '.';

test('limit', () => {
  const topLeftToastText = 'top-left toast';
	
  render(
    <EasydevProvider>
      <ToastContainer limit={3} />
      <Space direction="row">
        <Button onClick={() => toast({ position: 'top-left' })}>{topLeftToastText}</Button>
      </Space>
    </EasydevProvider>
  );

  const topLeftToast = screen.getByText(topLeftToastText);
  fireEvent.click(topLeftToast);
  fireEvent.click(topLeftToast);
  fireEvent.click(topLeftToast);
  fireEvent.click(topLeftToast);
  fireEvent.click(topLeftToast);

  expect(document.body.childNodes[1].childNodes.length).toBe(3);
});

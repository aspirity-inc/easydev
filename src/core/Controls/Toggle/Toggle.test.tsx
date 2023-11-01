import { useState, useEffect } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';

import { EasydevProvider, THEMES } from '@core/Theme';
import { lightPalette } from '@core/Theme/themePalette';

import { Toggle } from '.';
import { StyledToggleInner } from './styles';
import { getControlColor } from '../styles';

test('toggle', async () => {
  const mockFn = vi.fn();
  const label = 'toggle';
  const { container } = render(
    <EasydevProvider>
      <Toggle defaultChecked onChange={mockFn} color="error" label={label} />
    </EasydevProvider>
  );

  const inputElement = container.querySelector('input') as Element;
  expect(inputElement).toHaveAttribute('checked');

  await userEvent.click(inputElement);
  expect(mockFn).toBeCalledTimes(1);

  expect(container.getElementsByClassName('easy_toggle-wrap')[0]).toHaveStyleRule(
    'color',
    getControlColor(THEMES.light, 'error')
  );

  expect(screen.getByText(label)).toBeInTheDocument();
});

test('disabled', () => {
  const { container } = render(
    <EasydevProvider>
      <Toggle disabled />
    </EasydevProvider>
  );

  const spanContainer = container.querySelector('span');
  expect(spanContainer).toHaveStyleRule('cursor', 'default');
  expect(spanContainer).toHaveStyleRule('pointer-events', 'none');
  expect(spanContainer).toHaveStyleRule('border-color', lightPalette.surface['400']);
  expect(spanContainer).toHaveStyleRule('color', lightPalette.surface['400']);

  expect(container.getElementsByClassName('easy_toggle-wrap')[0]).toHaveStyleRule(
    'background-color',
    lightPalette.surface['400']
  );
});

test('toggleBackground, toggleInnerBackground', async () => {
  const dayToggleBackground = "url('/assets/toggle/day.svg')";
  const nightToggleBackground = "url('/assets/toggle/night.svg')";

  const dayToggleInnerBackground = '#ffc700';
  const nightToggleInnerBackground = "url('/assets/toggle/night-span.svg')";

  const Component = () => {
    const [checked, setChecked] = useState(false);

    const [toggleBackground, setToggleBackground] = useState(checked ? dayToggleBackground : nightToggleBackground);
    const [toggleInnerBackground, setToggleInnerBackground] = useState(
      checked ? dayToggleInnerBackground : nightToggleInnerBackground
    );

    const onChange = () => setChecked((prevState) => !prevState);

    useEffect(() => {
      if (checked) {
        setToggleBackground(dayToggleBackground);
        setToggleInnerBackground(dayToggleInnerBackground);
      } else {
        setToggleBackground(nightToggleBackground);
        setToggleInnerBackground(nightToggleInnerBackground);
      }
    }, [checked]);

    return (
      <Toggle
        checked={checked}
        onChange={onChange}
        toggleBackground={toggleBackground}
        toggleInnerBackground={toggleInnerBackground}
        toggleWrapProps={{ style: { width: 48 } }}
        toggleInnerProps={{ style: { translate: checked ? '150% -50%' : '' } }}
      />
    );
  };
  const { container } = render(
    <EasydevProvider>
      <Component />
    </EasydevProvider>
  );

  const toggleWrapContainer = container.querySelector('.easy_toggle-wrap');
  expect(toggleWrapContainer).toHaveStyle('width: 48px');
  expect(toggleWrapContainer).toHaveStyleRule('background', nightToggleBackground);

  expect(toggleWrapContainer).toHaveStyleRule('background', nightToggleInnerBackground, {
    modifier: StyledToggleInner.toString(),
  });

  await userEvent.click(container.querySelector('input') as Element);
  expect(toggleWrapContainer).toHaveStyleRule('background', dayToggleBackground);
	expect(toggleWrapContainer).toHaveStyleRule('background', dayToggleInnerBackground, {
    modifier: StyledToggleInner.toString(),
  });
});

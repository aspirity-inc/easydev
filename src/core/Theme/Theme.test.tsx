import type { FC } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { shade, tint } from 'polished';
import { styled } from 'styled-components';
import { expect, test } from 'vitest';

import { EasydevProvider, THEMES, ThemeProviderType, useEasyThemeContext } from '@core/Theme';

import { paletteGenerator } from './helpers/paletteGenerator';

const StyledDiv = styled.div`
  transform: scale(1.3);
`;

const GlobalComponent: FC<Omit<ThemeProviderType, 'children'>> = (props) => (
  <EasydevProvider {...props}>
    <StyledDiv>test</StyledDiv>
  </EasydevProvider>
);

test('useEasyThemeContext', () => {
  const Component = () => {
    const dataFromHook = useEasyThemeContext();
    return <input data-testid="test" value={JSON.stringify(dataFromHook)} />;
  };

  render(
    <EasydevProvider theme={THEMES['dark']}>
      <Component />
    </EasydevProvider>
  );

  const dataFromHook = JSON.parse((screen.getByTestId('test') as HTMLInputElement).value);
  expect(dataFromHook.type).toBe('dark');
  expect(dataFromHook.theme).toEqual(THEMES.dark);
});

test('enableVendorPrefixes true', () => {
  const { container } = render(<GlobalComponent enableVendorPrefixes={true} />);
  expect(container.querySelector('div')).toHaveStyleRule('-webkit-transform', 'scale(1.3)');
});

test('enableVendorPrefixes false', () => {
  const { container } = render(<GlobalComponent enableVendorPrefixes={false} />);
  expect(container.querySelector('div')).not.toHaveStyleRule('-webkit-transform', 'scale(1.3)');
});

test('paletteGenerator', () => {
  const color = '#aaa';
  const paletteGeneratorColors = paletteGenerator(color);

  expect(paletteGeneratorColors['main']).toBe(color);
  expect(paletteGeneratorColors['100']).toBe(tint(0.4, color));
  expect(paletteGeneratorColors['500']).toBe(color);
  expect(paletteGeneratorColors['800']).toBe(shade(0.3, color));
});

test('toggle theme', async () => {
  const Component = () => {
    const { theme, toggleTheme } = useEasyThemeContext();
		
    return (
      <div data-testid={`theme-${theme?.type}`}>
        <button data-testid="dark-button" onClick={() => toggleTheme()}>
          dark theme
        </button>
        <button data-testid="light-button" onClick={() => toggleTheme()}>
          light theme
        </button>
      </div>
    );
  };

  render(
    <EasydevProvider>
      <Component />
    </EasydevProvider>
  );

  expect(screen.getByTestId('theme-light')).toBeInTheDocument();

  await userEvent.click(screen.getByTestId('dark-button') as Element);

  expect(screen.getByTestId('theme-dark')).toBeInTheDocument();
  expect(screen.queryByTestId('theme-light')).not.toBeInTheDocument();

  await userEvent.click(screen.getByTestId('light-button') as Element);

  expect(screen.getByTestId('theme-light')).toBeInTheDocument();
  expect(screen.queryByTestId('theme-dark')).not.toBeInTheDocument();
});

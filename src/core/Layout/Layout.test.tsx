import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme/ThemeContext';

import { Footer, Header, Layout, Main } from '.';

test('layout header main footer with custom properties', () => {
  render(
    <EasydevProvider>
      <Layout style={{ fontSize: 50 }}>
        <Header fixed style={{ fontSize: 30 }}>
          header
        </Header>
        <Main style={{ fontSize: 40 }}>main</Main>
        <Footer style={{ fontSize: 60 }}>footer</Footer>
      </Layout>
    </EasydevProvider>
  );

  const header = screen.getByText('header');
  const main = screen.getByText('main');
  const layout = header.parentNode;

  expect(layout).toHaveStyle({ fontSize: 50 });

  expect(header).toHaveStyleRule('position', 'sticky');
  expect(header).toHaveStyle({ fontSize: 30 });

  expect(main).toHaveStyle({ fontSize: 40 });
  expect(main).toHaveStyle({ fontSize: 60 });
});

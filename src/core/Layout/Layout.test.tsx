import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme/ThemeContext';

import { Footer, Header, Layout, Main } from '.';

test('layout header main footer with custom properties', () => {
  render(
    <EasydevProvider>
      <Layout height={50} style={{ fontSize: 50 }}>
        <Header fix height={70} style={{ fontSize: 30 }}>
          header
        </Header>
        <Main style={{ fontSize: 40 }}>main</Main>
        <Footer height={60} backgroundColor="#ededed" style={{ fontSize: 60 }}>
          footer
        </Footer>
      </Layout>
    </EasydevProvider>
  );

  const header = screen.getByText('header');
  const main = screen.getByText('main');
  const footer = screen.getByText('footer');
  const layout = header.parentNode;

  expect(layout).toHaveStyleRule('height', '50px');
  expect(layout).toHaveStyle({ fontSize: 50 });

  expect(header).toHaveStyleRule('height', '70px');
  expect(header).toHaveStyleRule('position', 'sticky');
  expect(header).toHaveStyle({ fontSize: 30 });

  expect(main).toHaveStyle({ fontSize: 40 });

  expect(footer).toHaveStyleRule('height', '60px');
  expect(footer).toHaveStyleRule('background-color', '#ededed');
  expect(main).toHaveStyle({ fontSize: 60 });
});

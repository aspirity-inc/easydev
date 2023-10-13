import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';

import { Center } from '@core/Center';
import { EasydevProvider } from '@core/Theme/ThemeContext';
import { lightPalette } from '@core/Theme/themePalette';

import { Footer, Header, Layout, Main, Sidebar, type MenuItemType } from '.';

const mainStyle = {
  display: 'flex',
  backgroundColor: lightPalette.primary[50],
  border: `1px solid ${lightPalette.secondary[500]}`,
};

const menuItems: MenuItemType[] = [
  {
    id: 0,
    icon: <div className="material-symbols-outlined">fact_check</div>,
    label: 'Documents',
  },
  {
    id: 1,
    icon: <div className="material-symbols-outlined">shopping_cart</div>,
    label: 'E-commerce',
  },
  {
    id: 2,
    icon: <div className="material-symbols-outlined">diamond</div>,
    label: 'Favourites',
  },
  {
    id: 4,
    icon: <div className="material-symbols-outlined">rocket_launch</div>,
    label: 'UI Elements',
    children: [
      {
        id: 5,
        label: 'Alerts',
      },
      {
        id: 6,
        label: 'Buttons',
      },
      {
        id: 7,
        label: 'Carousel',
      },
    ],
  },
  {
    id: 8,
    icon: <div className="material-symbols-outlined">store</div>,
    label: 'Marketing',
  },
  {
    id: 9,
    label: 'Sales',
  },
];

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

test('sidebar isStatic as collapsed menu', () => {
  const { container } = render(
    <EasydevProvider>
      <Layout>
        <Header>
          <Center>Header</Center>
        </Header>
        <Main style={mainStyle}>
          <Sidebar menu={menuItems} isStatic as="aside" collapsed minWidth={100} />
          <Center>Main</Center>
        </Main>
        <Footer>
          <Center>Footer</Center>
        </Footer>
      </Layout>
    </EasydevProvider>
  );

  expect(screen.queryByText('keyboard_arrow_left')).not.toBeInTheDocument();
  expect(container.querySelector('aside')).toBeInTheDocument();

  expect(screen.queryByText(menuItems[0].label as string)).not.toBeInTheDocument();
  expect(container.querySelector('.easy_sidebar')).toHaveStyleRule('width', '100px');
});

test('maxWidth onCollapsed', async () => {
  const mockFn = vi.fn();

  const { container } = render(
    <EasydevProvider>
      <Layout>
        <Header>
          <Center>Header</Center>
        </Header>
        <Main style={mainStyle}>
          <Sidebar menu={menuItems} maxWidth={500} minWidth={70} onCollapsed={mockFn} />
          <Center>Main</Center>
        </Main>
        <Footer>
          <Center>Footer</Center>
        </Footer>
      </Layout>
    </EasydevProvider>
  );

  expect(container.querySelector('.easy_sidebar')).toHaveStyleRule('width', '500px');

  await userEvent.click(container.querySelector('.easy_sidebar-toggle_button') as Element);
  expect(container.querySelector('.easy_sidebar')).toHaveStyleRule('width', '70px');

  expect(mockFn).toBeCalledTimes(1);
});

test('hideButton', () => {
  const { container } = render(
    <EasydevProvider>
      <Layout>
        <Header>
          <Center>Header</Center>
        </Header>
        <Main style={mainStyle}>
          <Sidebar menu={menuItems} hideButton collapsed={false} />
          <Center>Main</Center>
        </Main>
        <Footer>
          <Center>Footer</Center>
        </Footer>
      </Layout>
    </EasydevProvider>
  );

  expect(container.querySelector('.easy_sidebar-toggle_button')).not.toBeInTheDocument();
});

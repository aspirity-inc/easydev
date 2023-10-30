---
title: Layout
---

The Layout is ready-made component that provides header, main, footer components for uniformity, in other words, in order for all pages to be similar.

The Layout can have the next props: className, style, height. [See there](/storybook/?path=/docs/core-layout--docs) to get more information.

## Layout variants

### [Default Layout](/storybook/?path=/story/core-layout--default-layout)

```tsx
<Layout>
  <Header
    backgroundColor="#4CE1B6"
    height={50}
    style={{
      padding: '20px 0',
    }}
  >
    <Center>Header</Center>
  </Header>
  <Main>
    <Center>Main</Center>
  </Main>
  <Footer
    backgroundColor="#178767"
    height={70}
    style={{
      padding: '20px 0',
    }}
  >
    <Center>Footer</Center>
  </Footer>
</Layout>
```

### [Layout With Fixed Header](/storybook/?path=/story/core-layout--layout-with-fixed-header)

```tsx

<Layout>
	<Header
		backgroundColor="#4CE1B6"
		fix
		height={50}
		style={{
			padding: '20px 0',
		}}
	>
		<Center>Header</Center>
	</Header>
	<Main
		style={{
			minHeight: 300,
		}}
	>
		<Center>Main</Center>
	</Main>
	<Footer
		backgroundColor="#178767"
		height={70}
		style={{
			padding: '20px 0',
		}}
	>
		<Center>Footer</Center>
	</Footer>
```

### [Layout With Sidebar](/storybook/?path=/story/core-layout--layout-with-sidebar)

```tsx
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

const headerStyle = { padding: '20px 25px', backgroundColor: lightPalette.primary[500] };
const footerStyle = { padding: '20px 50px', backgroundColor: lightPalette.primary[700] };
const mainStyle = {
  display: 'flex',
  backgroundColor: lightPalette.primary[50],
  border: `1px solid ${lightPalette.secondary[500]}`,
};

const LayoutWithSidebar = () => {
  return (
    <Layout>
      <Header style={headerStyle}>
        <Center>Header</Center>
      </Header>
      <Main style={mainStyle}>
        <Sidebar menu={menuItems} />
        <Center>Main</Center>
      </Main>
      <Footer style={footerStyle}>
        <Center>Footer</Center>
      </Footer>
    </Layout>
  );
};
```

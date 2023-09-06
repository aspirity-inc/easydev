---
title: Layout
---

Layout is ready-made component that provides header, main, footer components for uniformity, in other words, in order for all pages to be similar.

The Layout has the next props: className, style, height. [See there](/?path=/docs/core-layout--docs) to get more information.

[Default Layout](/?path=/story/core-layout--default-layout)

Code:

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

[Layout With Fixed Header](/?path=/story/core-layout--layout-with-fixed-header)

Code:

```tsx
<Box
  style={{
    height: '200px',
  }}
>
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
  </Layout>
</Box>
```

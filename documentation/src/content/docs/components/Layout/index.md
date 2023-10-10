---
title: Layout
---

Layout is ready-made component that provides header, main, footer components for uniformity, in other words, in order for all pages to be similar.

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

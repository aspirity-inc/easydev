---
title: Header
---

The Header is a part of Layout component.

The Header can have the next props: fix, height, backgroundColor. Here you can add navigation, avatar, etc...

## Header variants

### Default Header

```tsx
<Header height={50} backgroundColor={lightPalette.primary[500]} style={{ padding: '20px 0' }}>
  <Center>Header</Center>
</Header>
```

### Fixed Header

```tsx
<Header height={50} fix backgroundColor={lightPalette.primary[500]} style={{ padding: '20px 0' }}>
  <Center>Header</Center>
</Header>
```

## CSS

The following class names are useful for styling with CSS.

| Class           | Description                         |
| --------------- | ----------------------------------- |
| **easy_header** | Styles applied to the root element. |

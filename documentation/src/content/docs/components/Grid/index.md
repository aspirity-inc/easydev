---
title: Grid
---

Grid system uses a rows and columns for layout and align content. It’s built with flexbox for high flexibility.

The Grid can have the next props: direction, columns, columnSpacing, rowSpacing, wrap, justify, align, rowGap, columnGap. [See there](/storybook/?path=/docs/core-grid--docs) to get more information.

## [Default Grid](/storybook/?path=/story/core-grid--default-grid)

```tsx
<Row align="flex-end" columns={24} direction="row" justify="space-between" wrap="wrap">
  <Col>
    <ItemExample>example 1</ItemExample>
  </Col>
  <Col>
    <ItemExample>example 2</ItemExample>
  </Col>
  <Col>
    <ItemExample>example 3</ItemExample>
  </Col>
  <Col>
    <ItemExample>example 4</ItemExample>
  </Col>
  <Col>
    <ItemExample>example 5</ItemExample>
  </Col>
  <Col>
    <ItemExample>example 6</ItemExample>
  </Col>
</Row>
```

## [Columns](/storybook/?path=/story/core-grid--columns)

```tsx
<Row columns={12} justify="space-between" rowGap={20} wrap="wrap">
  <Col size={5}>
    <ItemExample>example 1</ItemExample>
  </Col>
  <Col size={6}>
    <ItemExample>example 2</ItemExample>
  </Col>
  <Col size={3}>
    <ItemExample>example 3</ItemExample>
  </Col>
</Row>
```

The Col can have the next props: size, columns, alignContent, alignSelf, grow, shrink. [See there](/storybook/?path=/docs/core-grid-col--docs) to get more information.

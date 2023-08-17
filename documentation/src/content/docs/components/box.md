---
title: Box
---

The Box component serves as a wrapper component for most of the CSS utility needs.

Box is based on React and Styled Components.

Example:

```ts
export const StyledTitle = styled(Box)<TitleProps>`
  margin: 0;
  padding: 0;

  ${({ variant }) => getTitleVariant(variant)};

  ${({ color, bgColor }) => css`
    color: ${color};
    background-color: ${bgColor};
  `};
`;
```

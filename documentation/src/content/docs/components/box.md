---
title: Box
---

The Box component acts as a container component for the majority of CSS utility requirements.

The Box has the next props: tag, children, className, style.

Code:

```tsx
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

Code:

```tsx
<Box tag="p" className="easydev" style={{ color: 'white' }}>
  ...
</Box>
```

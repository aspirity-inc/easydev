---
title: Colors and themes
---

EasyDev uses styled-components to create styles so that you can easily manage your project's colors and other style things.

This template contains dark and light themes. All style variables are contained in "@core/Theme/index.tsx" file.

## Colors

There are components with preset colors that can change depending on the chosen theme.

```ts "@core/Chip/styles.ts"
export const StyledDeleteButton = styled('button')`
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['80'])};
  cursor: pointer;

  & > div {
    display: block;
  }
`;
```

Example:

```ts example
<StyledDeleteButton type="button" {...props}>
  <div className="material-symbols-outlined">close</div>
</StyledDeleteButton>
```

In some components that accept color in the props, we can specify the color.

```ts "@core/Controls/Checkbox/index.tsx"
export const Checkbox = ({ disabled, defaultChecked, color, ...props }: ControlBasePropsType) => {
  return (
    <CheckboxWrap disabled={disabled} color={color}>
      <StyledCheckbox type="checkbox" disabled={disabled} defaultChecked={defaultChecked} {...props} />
      <StyledCheckboxInner className="material-symbols-rounded check-mark">done</StyledCheckboxInner>
    </CheckboxWrap>
  );
};
```

Example:

```ts example
<Checkbox checked={checked} color="red" readOnly {...args} />
```

## Themes

lightTheme is the main theme and the rest are inherited from it. The theme specifies fields with appropriate values.

```ts
# light theme "@core/Theme/index.tsx"
export const lightTheme = {
  type: 'light',
  colors: {
    primary: {
      ...paletteGenerator('#4CE1B6'),
    },
    secondary: {
      ...paletteGenerator('#4F96E8'),
    },
		...
	}
	...
};
```

darkTheme inherits fields from lightTheme and overwrites some of them.

```ts
# dark theme "@core/Theme/index.tsx"
export const darkTheme = {
  ...lightTheme,
  type: 'dark',
  colors: {
    primary: {
      ...paletteGenerator('#6FE7C4'),
    },
    secondary: {
      ...paletteGenerator('#00C2E2'),
    },
		...
  },
	...
};
```

You can add a new theme in the file "@core/Theme/index.tsx" by analogy with darkTheme.

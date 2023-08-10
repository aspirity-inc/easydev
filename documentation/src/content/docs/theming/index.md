---
title: Colors and themes
---

EasyDev uses styled-components to create styles so that you can easily manage your project's colors and other style things.

This template contains dark and light themes, but you can add your own theme.

## Colors

There are components with preset colors that can change depending on the chosen theme.

```ts
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

```ts
<StyledDeleteButton type="button" {...props}>
  <div className="material-symbols-outlined">close</div>
</StyledDeleteButton>
```

In some components that accept color in the props, we can specify the color.

```ts
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

```ts
<Checkbox checked={checked} color="red" readOnly {...args} />
```

## Themes

There are two standard light and dark themes with their own fields and properties, you can change them or add a new theme.

Example:

```ts
const lightTheme = { type: 'light', ... }
const darkTheme = { type: 'dark', ... }

const [theme, useTheme] = useState(lightTheme)
<ThemeProvider theme={theme}>
	<App>
		...
	</App>
</ThemeProvider>
```

For more information about changing the theme, see the [styled components documentation](https://styled-components.com/docs/advanced)

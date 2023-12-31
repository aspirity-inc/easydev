---
title: Theme
---

Customize Easydev with your theme. You can change the colors, the typography and much more.

If you wish to customize the theme, you need to use the EasydevProvider component in order to inject a theme into your application. However, this is optional, Easydev components come with a default theme.

Example:

```ts
export const withTheme = (Story, context) => {
  const { backgrounds } = context.globals;
  const theme = backgrounds?.value !== darkTheme.colors.background ? THEMES['light'] : THEMES['dark'];

  return (
    <EasydevProvider> theme={theme}>
      <GlobalStyles />
      <Story />
    </EasydevProvider>
  );
};
```

You can use useEasyThemeContext hook to get more info about theme.

Example:

```ts

const UseEasyThemeContextExample = () => {
  return (
		<EasydevProvider>
			<Component>
		</EasydevProvider>
	);
}

const Component = () => {
	const {theme} = useEasyThemeContext();
	return <>{theme.type}</>;
}
```

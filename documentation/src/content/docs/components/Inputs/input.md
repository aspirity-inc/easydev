---
title: Input
---

The Input uses to type text.

The Input wrapper component is a complete form control including a label, input, and help text.

The Input can have the next props: label, error, warning, message, isLoading, icons, renderExtraMessage. [See there](/storybook/?path=/docs/core-inputs-input--docs) to get more information.

## Input variants

### [Default Input](/storybook/?path=/story/core-inputs-input--default-input)

```tsx
<Input />
```

### [Error Input](/storybook/?path=/story/core-inputs-input--error-input)

```tsx
<Input error="There is no such user" />
```

### [Loading Input](/storybook/?path=/story/core-inputs-input--loading-input)

```tsx
<Input isLoading />
```

### [Disabled Input](/storybook/?path=/story/core-inputs-input--disabled-input)

```tsx
<Input disabled />
```

### [Default Password](/storybook/?path=/story/core-inputs-input--default-password)

```tsx
<Input type="password" />
```

### [Error Password With Message](/storybook/?path=/story/core-inputs-input--error-password-with-message)

```tsx
<Input error="Invalid password" type="password" />
```

### [Loading Password](/storybook/?path=/story/core-inputs-input--loading-password)

```tsx
<Input isLoading type="password" />
```

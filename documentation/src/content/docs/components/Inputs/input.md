---
title: Input
---

Input is used to input text.

The Input wrapper component is a complete form control including a label, input, and help text.

The Input has the next props: label, placeholder, error, warning, message, isLoading, icons, renderExtraMessage, type, className, style. [See there](/?path=/docs/core-inputs-input--docs) to get more information.

[Default Input](/?path=/story/core-inputs-input--default-input)

Code:

```tsx
<Input label="Name" onChange={() => {}} placeholder="Enter youe name" renderExtraMessage={() => {}} value="" />
```

[Error Input](/?path=/story/core-inputs-input--error-input)

Code:

```tsx
<Input error="There is no such user" label="Name" onChange={() => {}} renderExtraMessage={() => {}} value="Ivan" />
```

[Loading Input](/?path=/story/core-inputs-input--loading-input)

Code:

```tsx
<Input isLoading label="Name" onChange={() => {}} renderExtraMessage={() => {}} value="Ivan" />
```

[Disabled Input](/?path=/story/core-inputs-input--disabled-input)

Code:

```tsx
<Input disabled label="Name" onChange={() => {}} renderExtraMessage={() => {}} value="Ivan" />
```

[Default Password](/?path=/story/core-inputs-input--default-password)

Code:

```tsx
<Input
  label="Password"
  message="6 or more characters"
  onChange={() => {}}
  renderExtraMessage={() => {}}
  type="password"
  value=""
/>
```

[Error Password With Message](/?path=/story/core-inputs-input--default-password)

Code:

```tsx
<Input
  error="Invalid password"
  label="Password"
  onChange={() => {}}
  renderExtraMessage={() => {}}
  type="password"
  value="Ivan"
/>
```

[Loading Password](/?path=/story/core-inputs-input--loading-password)

Code:

```tsx
<Input isLoading label="Password" onChange={() => {}} renderExtraMessage={() => {}} type="password" value="Ivan" />
```

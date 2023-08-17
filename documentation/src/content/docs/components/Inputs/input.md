---
title: Input
---
Input is used to input text.

The Input wrapper component is a complete form control including a label, input, and help text.

The Input has the next props: label, placeholder, error, warning, message, isLoading, icons, renderExtraMessage, type, className, style. [See there](/?path=/docs/core-inputs-input--docs) to get more information.

[Default Input](/?path=/story/core-inputs-input--default-input)

Code:

```tsx
<Input
  label="Name"
  onChange={function Zo() {}}
  placeholder="Enter youe name"
  renderExtraMessage={function Zo() {}}
  value=""
/>
```

[Error Input](/?path=/story/core-inputs-input--error-input)

Code:

```tsx
<Input
  error="There is no such user"
  label="Name"
  onChange={function Zo() {}}
  renderExtraMessage={function Zo() {}}
  value="Ivan"
/>
```

[Loading Input](/?path=/story/core-inputs-input--loading-input)

Code:

```tsx
<Input isLoading label="Name" onChange={function Zo() {}} renderExtraMessage={function Zo() {}} value="Ivan" />
```

[Disabled Input](/?path=/story/core-inputs-input--disabled-input)

Code:

```tsx
<Input disabled label="Name" onChange={function Zo() {}} renderExtraMessage={function Zo() {}} value="Ivan" />
```

[Default Password](/?path=/story/core-inputs-input--default-password)

Code:

```tsx
<Input
  label="Password"
  message="6 or more characters"
  onChange={function Zo() {}}
  renderExtraMessage={function Zo() {}}
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
  onChange={function Zo() {}}
  renderExtraMessage={function Zo() {}}
  type="password"
  value="Ivan"
/>
```

[Loading Password](/?path=/story/core-inputs-input--loading-password)

Code:

```tsx
<Input
  isLoading
  label="Password"
  onChange={function Zo() {}}
  renderExtraMessage={function Zo() {}}
  type="password"
  value="Ivan"
/>
```

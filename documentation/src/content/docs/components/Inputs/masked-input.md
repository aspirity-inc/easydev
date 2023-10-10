---
title: Masked Input
---

Masked Input allows the user to enter text in the desired format. You can use it to mask phone number, tickets, etc.

The Masked Input can have the next props: label, error, warning, message, isLoading, icons, renderExtraMessage. [See there](/storybook/?path=/docs/core-inputs-maskedinput--docs) to get more information.

## [Masked Default Input](/storybook/?path=/story/core-controls-controlwithlabel--default-control-with-label)

```tsx
<MaskedInput label="Phone number" mask="+7 (999) 999-99-99" />
```

## [Masked Default Input Reg Exp](/storybook/?path=/story/core-inputs-maskedinput--masked-default-input-reg-exp)

```tsx
<MaskedInput
  label="Postal code mask"
  mask={[/[A-Z]/, /[0-9]/, /[A-Z]/, ' ', /[0-9]/, /[A-Z]/, /[0-9]/]}
  message="Example: A4E 2P9"
/>
```

## [Error Input](/storybook/?path=/story/core-inputs-maskedinput--error-input)

```tsx
<MaskedInput error="There is no such number" label="Phone number" mask="+7 (999) 999-99-99" value="0123456789" />
```

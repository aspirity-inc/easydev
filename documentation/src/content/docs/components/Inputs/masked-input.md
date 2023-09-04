---
title: Masked Input
---

Masked Input allows the user to enter text in the desired format. You can use it to mask phone number, tickets, etc. inputs.

The Masked Input has the next props: mask, label, error, warning, message, isLoading, icons, renderExtraMessage, maskPlaceholder, alwaysShowMask. [See there](/?path=/docs/core-inputs-maskedinput--docs) to get more information.

[Masked Default Input](/?path=/story/core-controls-controlwithlabel--default-control-with-label)

Code:

```tsx
<MaskedInput label="Phone number" mask="+7 (999) 999-99-99" onChange={function Zo() {}} value="" />
```

[Masked Default Input Reg Exp](/?path=/story/core-inputs-maskedinput--masked-default-input-reg-exp)

Code:

```tsx
<MaskedInput
  label="Postal code mask"
  mask={[/[A-Z]/, /[0-9]/, /[A-Z]/, ' ', /[0-9]/, /[A-Z]/, /[0-9]/]}
  message="Example: A4E 2P9"
  onChange={() => {}}
  value=""
/>
```

[Error Input](/?path=/story/core-inputs-maskedinput--error-input)

Code:

```tsx
<MaskedInput
  error="There is no such number"
  label="Phone number"
  mask="+7 (999) 999-99-99"
  onChange={function Zo() {}}
  value="0123456789"
/>
```

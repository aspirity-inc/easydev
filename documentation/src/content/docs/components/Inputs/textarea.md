---
title: Textarea
---

The Textarea is a form element for creating an area in which several lines of text can be entered. Unlike the Input, line breaks are allowed in the text field, they are saved when sending data to the server. Example:

The Textarea has the next props: placeholder, label, showLimit, autoresized, softLimit, maxLength, className, style. [See there](/?path=/docs/core-inputs-textarea--docs) to get more information.

[Default Textarea](/?path=/story/core-inputs-textarea--default-textarea)

Code:

```tsx
<Textarea label="Comment" onChange={function Zo() {}} placeholder="Enter a comment" value="" />
```

[Disabled Textarea](/?path=/story/core-inputs-textarea--disabled-textarea)

Code:

```tsx
<Textarea disabled label="Name" onChange={function Zo() {}} placeholder="Enter your name" value="Ivan" />
```

[Disabled Empty Textarea](/?path=/story/core-inputs-textarea--disabled-empty-textarea)

Code:

```tsx
<Textarea disabled label="Имя" onChange={function Zo() {}} placeholder="Enter your name" value="" />
```

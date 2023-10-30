---
title: Textarea
---

The Textarea is a form element for creating an area in which several lines of text can be entered. Unlike the Input, line breaks are allowed in the text field, they are saved when sending data to the server.

The Textarea can have the next props: placeholder, label, showLimit, autoresized, softLimit. [See there](/storybook/?path=/docs/core-inputs-textarea--docs) to get more information.

## Textarea variants

### [Default Textarea](/storybook/?path=/story/core-inputs-textarea--default-textarea)

```tsx
<Textarea />
```

### [Disabled Textarea](/storybook/?path=/story/core-inputs-textarea--disabled-textarea)

```tsx
<Textarea disabled />
```

### [Disabled Empty Textarea](/storybook/?path=/story/core-inputs-textarea--disabled-empty-textarea)

```tsx
<Textarea disabled value="" />
```

## CSS

The following class names are useful for styling with CSS.

| Class                     | Description                                              |
| ------------------------- | -------------------------------------------------------- |
| **easy_textarea-wrap**    | Styles applied to the root element.                      |
| **easy_textarea-label**   | Styles applied to the container with textarea and label. |
| **easy_textarea-item**    | Styles applied to the textarea.                          |
| **easy_textarea-counter** | Styles applied to the counter.                           |

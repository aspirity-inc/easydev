---
title: Text
---

Use Text to present your design and content as clearly and efficiently as possible.

The Text has the next props: children, className, style, color, bgColor, tag, variant, ellipsis. [See there](/storybook/?path=/docs/core-typography-text--docs) to get more information.

[Default Text](/storybook/?path=/story/core-typography-text--default-text)

Code:

```tsx
<Text>EasyDev the greatest</Text>
```

[Text With Style](/storybook/?path=/story/core-typography-text--text-with-style)

Code:

```tsx
<Text
  style={{
    fontStyle: 'italic',
  }}
>
  EasyDev the greatest
</Text>
```

[Ellipsis Text](/storybook/?path=/story/core-typography-text--ellipsis-text)

Code:

```tsx
<Text
  ellipsis={{
    rows: 2,
  }}
>
  Hello, everyone! This is the LONGEST TEXT EVER! I was inspired by the various other "longest texts ever" on the
  internet, and I wanted to make my own. So here it is! This is going to be a WORLD RECORD! This is actually my third
  attempt at doing this. The first time, I didn't save it. The second time, the Neocities editor crashed. Now I'm
  writing this in Notepad, then copying it into the Neocities editor instead of typing it directly in the Neocities
  editor to avoid crashing. It sucks that my past two attempts are gone now. Those actually got pretty long. Not the
  longest, but still pretty long. I hope this one won't get lost somehow. Anyways, let's talk about WAFFLES! I like
  waffles. Waffles are cool. Waffles is a funny word.
</Text>
```

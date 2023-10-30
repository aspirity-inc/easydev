---
title: Range Slider
---

The Range Slider is designed to select a value from a certain interval.

The Range Slider can have the next props: tooltip, tooltipShown. [See there](/storybook/?path=/docs/core-progress-rangeslider--docs) to get more information.

## Range Slider variants

### [Range Slider](/storybook/?path=/story/core-progress-rangeslider--default-progress)

```tsx
const RangeSlider = () => {
  const [value, setValue] = useState('25');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return <RangeSlider value={value} onChange={onChange} min="0" max="100" />;
};
```

## CSS

The following class names are useful for styling with CSS.

| Class               | Description                          |
| ------------------- | ------------------------------------ |
| **easy_range-wrap** | Styles applied to the root element.  |
| **easy_tooltip**    | Styles applied to the tooltip.       |
| **easy_range**      | Styles applied to the range element. |

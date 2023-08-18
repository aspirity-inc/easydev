---
title: Range Slider
---

Range Slider is designed to select a value from a certain interval.

The Range Slider has the next props: min, max, value, tooltip, tooltipShown. [See there](/?path=/docs/core-progress-rangeslider--docs) to get more information.

[Range Slider](/?path=/story/core-progress-rangeslider--default-progress&args=tooltipShown:always;tooltip:!true)

Code:

```tsx
<RangeSlider 
  max="100" 
  min="0" 
  onChange={() => {
    alert('changed');
  }} 
  tooltip 
  tooltipShown="always" 
  value="25" 
/>
```

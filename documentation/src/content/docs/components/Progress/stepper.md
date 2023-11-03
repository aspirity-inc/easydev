---
title: Stepper
---

The Stepper displays progress through a sequence of logical and numbered steps.

The Stepper can have the next props: count, currentStep, numeric. [See there](/storybook/?path=/docs/core-progress-stepper--docs) to get more information.

## Stepper variants

### [Default Stepper](/storybook/?path=/story/core-progress-stepper--default)

```tsx
<Stepper count={10} currentStep={3} />
```

### [Numeric Stepper](/storybook/?path=/story/core-progress-stepper--numeric)

```tsx
<Stepper count={10} currentStep={3} numeric />
```

## CSS

The following class names are useful for styling with CSS.

| Class                   | Description                                            |
| ----------------------- | ------------------------------------------------------ |
| **easy_stepper**        | Styles applied to the root element of default stepper. |
| **easy_step**           | Styles applied to the step element of default stepper. |
| **easy_numericStepper** | Styles applied to the root element of numeric stepper. |
| **easy_numericStep**    | Styles applied to the step element of numeric stepper. |

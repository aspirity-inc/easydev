---
title: Progress Bar
---

Progress Bar presents a filled line depending on the specified value from 0 to 100%. It is also possible to disable the percentage display.

The Progress Bar can have the next props: customTitle, size, rounded. [See there](/storybook/?path=/docs/core-progress-progressbar--docs) to get more information.

## Progress Bar variants

### [Default Progress Bar](/storybook/?path=/story/core-progress-progressbar--default)

```tsx
<ProgressBar value={25} />
```

### [Custom Title](/storybook/?path=/story/core-progress-progressbar--custom-title)

```tsx
const StyledProgressInfo = styled(Subtitle)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 19px;
  margin-bottom: 15px;

  > span:last-of-type {
    color: ${({ theme }) => (theme.type === 'light' ? 'black' : 'white')};
  }
`;

const value = 33;

const Title = (
  <StyledProgressInfo level={3} tag="span">
    <span>{value}%</span> <span>Update in progress..</span>
  </StyledProgressInfo>
);

const CustomTitle = () => {
  return <ProgressBar value={value} customTitle={Title} />;
};
```

---
title: Progress Bar
---

Progress Bar presents a filled line depending on the specified value from 0 to 100%. It is also possible to disable the percentage display.

The Progress Bar has the next props: value, customTitle, progressColor, progressBackground, size, rounded. [See there](/?path=/docs/core-progress-progressbar--docs) to get more information.

[Progress Bar](/?path=/story/core-progress-progressbar--default)

Code:

```tsx
<ProgressBar value={25} />
```

[Custom Title](/?path=/story/core-progress-progressbar--custom-title)

Code:

```tsx
() => {
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
  return <ProgressBar value={value} customTitle={Title} />;
};
```

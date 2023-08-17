---
title: Datepicker
---

Datepicker based on react-datepicker library and uses to get the selected date. Example:

```ts
const Example = ({ ...args }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div style={{ height: '500px' }}>
      <Datepicker {...args} selected={startDate} onChange={setStartDate} />
    </div>
  );
};
```

---
title: Pagination
---

The Pagination allows to select a specific page from a range of pages.

The Pagination can have the next props: total, page, onChange, icons, hidePages, withEdges, siblings. [See there](/storybook/?path=/docs/core-pagination--docs) to get more information.

## Pagination variants

### [Pagination](/storybook/?path=/story/core-pagination--default-pagination)

```tsx
const Pagination = () => {
  const [page, setPage] = useState(1);

  return <Pagination total={10} siblings={1} withEdges hidePages={false} page={page} onChange={setPage} />;
};
```

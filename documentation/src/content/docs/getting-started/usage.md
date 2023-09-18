---
title: Usage
---

After [installation](getting-started/installation/), you can import any Esydev components. But for correct operation you need to use EasydevProvider as shown in the example:

```ts
ReactDOM.createRoot(document.getElementById('root')!).render(
  <EasydevProvider>
    <App />
  </EasydevProvider>
);
```

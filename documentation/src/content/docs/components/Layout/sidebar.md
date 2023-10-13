---
title: Sidebar
---

The Sidebar is a part of Layout component. Here you can add your main content.

## Sidebar variants

### Default Sidebar

```tsx
<Sidebar menu={menuItems} />
```

### Sidebar custom width

```tsx
<Sidebar menu={menuItems} minWidth={100} maxWidth={400}/>
```

### Sidebar with hideButton

```tsx
<Sidebar menu={menuItems} hideButton/>
```

### Controlled Sidebar 

```tsx
<Sidebar menu={menuItems} hideButton collapsed={true} onCollapsed={() => {}}/>
```

### Sidebar with any tag

```tsx
<Sidebar menu={menuItems} as='aside'/>
```
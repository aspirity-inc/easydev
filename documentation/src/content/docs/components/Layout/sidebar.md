---
title: Sidebar
---

The Sidebar is a part of Layout component. Here you can add your navigate items.

## Sidebar variants

### Default Sidebar

```tsx
<Sidebar menu={menuItems} />
```

### Sidebar custom width

```tsx
<Sidebar menu={menuItems} minWidth={100} maxWidth={400} />
```

### Sidebar with hideButton

```tsx
<Sidebar menu={menuItems} hideButton />
```

### Controlled Sidebar

```tsx
<Sidebar menu={menuItems} hideButton collapsed={true} onCollapsed={() => {}} />
```

### Sidebar with any tag

```tsx
<Sidebar menu={menuItems} as="aside" />
```

## CSS

The following class names are useful for styling with CSS.

| Class                               | Description                                                                          |
| ----------------------------------- | ------------------------------------------------------------------------------------ |
| **easy_sidebar-wrap**               | Styles applied to the root element.                                                  |
| **easy_sidebar-sticky-content**     | Styles responsible for sticky behavior of content                                    |
| **easy_sidebar-content**            | Styles applied to the container with sidebar content.                                |
| **easy_sidebar**                    | Styles applied to the container which responsible for collapsed behavior of sidebar. |
| **easy_sidebar-menu**               | Styles applied to the sidebar menu.                                                  |
| **easy_sidebar-toggle_button**      | Styles applied to the toggle button.                                                 |
| **easy_sidebar-dropdown-menu**      | Styles applied to the list of sidebar menu items or submenu.                         |
| **easy_sidebar-dropdown-divider**   | Styles applied to the sidebar menu divider.                                          |
| **easy_sidebar-dropdown-menu-item** | Styles applied to the menu item.                                                     |
| **easy_sidebar-dropdown-submenu**   | Styles applied to the submenu.                                                       |

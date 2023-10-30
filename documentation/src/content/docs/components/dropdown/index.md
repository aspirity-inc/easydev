---
title: Dropdown
---

The Dropdown allows you to toggle contextual overlays for displaying lists, links, and other elements.

The Dropdown have the next props: open, onChangeOpen, disabled, position, trigger, targetTitle, target, content. [See there](/storybook/?path=/docs/core-dropdown--docs) to get more information.

## Dropdown variants

### [Default Dropdown](/storybook/?path=/story/core-dropdown--default-dropdown)

```tsx
const DefaultAvatarIcon = () => <div className="material-symbols-outlined">person</div>;

const DefaultDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <Flex
      align="center"
      justify="center"
      style={{
        width: '100%',
        height: '800px',
      }}
    >
      <Dropdown
        open={open}
        onChangeOpen={setOpen}
        targetTitle="Dropdown"
        content={
          <>
            <MenuLabel>First menu label</MenuLabel>
            <MenuItem>Menu item</MenuItem>
            <MenuItem>
              <DefaultAvatarIcon />
              <span>Menu item with icon</span>
            </MenuItem>
            <MenuDivider />
            <MenuLabel>Second menu label</MenuLabel>
            <MenuItem disabled>Menu item (disabled)</MenuItem>
          </>
        }
      />
    </Flex>
  );
};
```

### [User Button Dropdown](/storybook/?path=/story/core-dropdown--user-button-dropdown)

```tsx
const DefaultAvatarIcon = () => <div className="material-symbols-outlined">person</div>;

const UserButtonDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        height: '400px',
      }}
    >
      <Dropdown
        open={open}
        onChangeOpen={setOpen}
        target={<Button>Dropdown</Button>}
        content={
          <>
            <MenuLabel>First menu label</MenuLabel>
            <MenuItem>Menu item</MenuItem>
            <MenuItem>
              <DefaultAvatarIcon />
              <span>Menu item with icon</span>
            </MenuItem>

            <MenuDivider />
            <MenuLabel>Second menu label</MenuLabel>
            <MenuItem disabled>Menu item (disabled)</MenuItem>
          </>
        }
      />
    </div>
  );
};
```

### [Complex Dropdown With Hover](/storybook/?path=/story/core-dropdown--complex-dropdown-with-hover)

```tsx
const DefaultAvatarIcon = () => <div className="material-symbols-outlined">person</div>;
const DefaultArrow = () => <div className="material-symbols-outlined">keyboard_arrow_right</div>;

const innerMenu = () => {
  return (
    <Dropdown
      position="right-top"
      style={{ width: '100%' }}
      target={
        <MenuItem>
          <Flex justify="space-between" style={{ width: '100%' }}>
            <span>Second menu</span>
            <DefaultArrow />
          </Flex>
        </MenuItem>
      }
      content={
        <>
          <MenuItem>Second menu item</MenuItem>
          <MenuItem>
            <DefaultAvatarIcon />
            <span>Second menu item</span>
          </MenuItem>
        </>
      }
    />
  );
};

const ComplexDropdownWithHover = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        height: '400px',
      }}
    >
      <Dropdown
        trigger="hover"
        open={open}
        onChangeOpen={setOpen}
        targetTitle="Dropdown"
        content={
          <>
            <MenuItem>Menu item</MenuItem>
            {innerMenu()}
            <MenuItem>
              <DefaultAvatarIcon />
              <span>Menu item with icon</span>
            </MenuItem>
            <MenuItem disabled>Menu item (disabled)</MenuItem>
          </>
        }
      />
    </div>
  );
};
```

## CSS

The following class names are useful for styling with CSS.

| Class                           | Description                              |
| ------------------------------- | ---------------------------------------- |
| **easy_dropdown**               | Styles applied to the root element.      |
| **easy_dropdown-menu**          | Styles applied to the root menu element. |
| **easy_dropdown-menu-position** | Styles responsible for menu position.    |
| **easy_dropdown-divider**       | Styles applied to the menu divider.      |
| **easy_dropdown-menu-item**     | Styles applied to the menu item.         |
| **easy_dropdown-menu-label**    | Styles applied to the menu label.        |

---
title: Avatar
---

Avatar description.

The Avatar component can have the next props: online, radius, size. [See there](/storybook/?path=/docs/core-avatar--docs) to get more information.

## Avatar variants

#### [Default Avatar](/storybook/?path=/story/core-avatar--default-avatar)

```tsx
<Avatar />
```

#### [Online Avatar](/storybook/?path=/story/core-avatar--online-avatar)

```tsx
<Avatar online />
```

#### [Offline Avatar](/storybook/?path=/story/core-avatar--offline-avatar)

```tsx
<Avatar online={false} />
```

#### [Image Avatar](/storybook/?path=/story/core-avatar--image-avatar)

```tsx
<Avatar
  alt="photo"
  online
  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1693801961~exp=1693802561~hmac=7555601ef0121b3c969f8485d8595331e3e576d084f4fe459c9c65862ddb422b"
/>
```

#### [Letter Avatar](/storybook/?path=/story/core-avatar--letter-avatar)

```tsx
<Avatar online>AB</Avatar>
```

#### [Custom Icon Avatar](/storybook/?path=/story/core-avatar--custom-icon-avatar)

```tsx
<Avatar online>
  <CustomIcon />
</Avatar>
```

You can wrap any avatars into AvatarGroup. The AvatarGroup component can have the next props: spacing. [See there](/storybook/?path=/docs/core-avatar-group--docs) to get more information.

```tsx
<AvatarGroup spacing={20}>
  <Avatar>A</Avatar>
  <Avatar size={'xxl'}>B</Avatar>
  <Avatar>C</Avatar>
  <Avatar size={'xxs'}>D</Avatar>
  <Avatar>E</Avatar>
  <Avatar size={'xs'}>F</Avatar>
  <Avatar>G</Avatar>
</AvatarGroup>
```

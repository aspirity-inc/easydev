---
title: Card
---

The Card uses to place some content with any elements.

The Card component can have the next props: media, direction, variant, borderedMedia. [See there](/storybook/?path=/docs/core-card--docs) to get more information.

## Card variants

### [Default Card](/storybook/?path=/story/core-card--default-card)

```tsx
const CardImage = () => (
  <img src="https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=" />
);

const DefaultCard = () => {
  return (
    <div
      style={{
        width: '400px',
      }}
    >
      <Card media={CardImage()}>
        <Flex gap={12} direction="column" align="stretch">
          <Text variant="caption" style={{ color: 'lightgreen' }}>
            Nature
          </Text>
          <Title variant="h5">Far far away</Title>
          <Text variant="body2">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
          </Text>
          <Text variant="caption" style={{ color: 'lightgray' }}>
            May 6, 2012
          </Text>
          <Flex gap={10}>
            <Badge size="sm">Nature</Badge>
            <Badge size="sm" color="pink">
              Mountains
            </Badge>
            <Badge size="sm" color="lightblue">
              Travel
            </Badge>
          </Flex>
          <Button rounded="sm">Read more</Button>
        </Flex>
      </Card>
    </div>
  );
};
```

### [No Image Card](/storybook/?path=/story/core-card--no-image-card)

```tsx
<div
  style={{
    width: '400px',
  }}
>
  <Card>
    <Flex gap={12} direction="column" align="stretch">
      <Text variant="caption" style={{ color: 'lightgreen' }}>
        Nature
      </Text>
      <Title variant="h5">Far far away</Title>
      <Text variant="body2">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
      </Text>
      <Text variant="caption" style={{ color: 'lightgray' }}>
        May 6, 2012
      </Text>
      <Flex gap={10}>
        <Badge size="sm">Nature</Badge>
        <Badge size="sm" color="pink">
          Mountains
        </Badge>
        <Badge size="sm" color="lightblue">
          Travel
        </Badge>
      </Flex>
      <Button rounded="sm">Read more</Button>
    </Flex>
  </Card>
</div>
```

## CSS

The following class names are useful for styling with CSS.

| Class                 | Description                            |
| --------------------- | -------------------------------------- |
| **easy_card**         | Styles applied to the root element.    |
| **easy_card-media**   | Styles applied to the media element.   |
| **easy_card-content** | Styles applied to the content element. |

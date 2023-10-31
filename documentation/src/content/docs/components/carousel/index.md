---
title: Carousel
---

The Carousel based on keen-slider library and uses to switch between given children using a smooth animation. [See there](https://keen-slider.io/docs#options) to get more info about KeenSliderOptions.

The Carousel component can have the next props: title, items, arrows, arrowIcon, dots, dotIcons, thumbnails, arrowsType, keenSliderProps, thumbnailsProps, height. [See there](/storybook/?path=/docs/core-carousel--docs) to get more information.

## Carousel variants

### [Default Carousel](/storybook/?path=/story/core-carousel--default-carousel)

```tsx
const Slide = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  background-color: #98abf6;
`;

const DefaultCarousel = () => {
  const items: ReactNode[] = [...Array(6).keys()].map((index) => <Slide key={index}>{index + 1}</Slide>);

  return <Carousel items={items} height={200} />;
};
```

### [Two Slides Carousel](/storybook/?path=/story/core-carousel--two-slides-carousel)

```tsx
const Slide = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  background-color: #98abf6;
`;

const TwoSlidesCarousel = () => {
  const items: ReactNode[] = [...Array(6).keys()].map((index) => <Slide key={index}>{index + 1}</Slide>);

  return (
    <Carousel
      items={items}
      height={200}
      keenSliderProps={{
        slides: {
          perView: 2,
          spacing: 24,
        },
      }}
    />
  );
};
```

### [Thumbnails Carousel](/storybook/?path=/story/core-carousel--thumbnails-carousel)

```tsx
const Slide = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  background-color: #98abf6;
`;

const ThumbnailsCarousel = () => {
  const items: ReactNode[] = [...Array(6).keys()].map((index) => <Slide key={index}>{index + 1}</Slide>);

  return <Carousel items={items} height={200} thumbnails />;
};
```

### [User Icons Carousel](/storybook/?path=/story/core-carousel--user-icons-carousel)

```tsx
const Slide = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  background-color: #98abf6;
`;

const UserIconsCarousel = () => {
  const UserArrowIcon = () => <span className="material-symbols-outlined">keyboard_backspace</span>;
  const UserDotDefaultIcon = () => <span className="material-symbols-outlined">circle</span>;
  const UserDotActiveIcon = () => <span className="material-symbols-outlined">adjust</span>;

  const items: ReactNode[] = [...Array(6).keys()].map((index) => <Slide key={index}>{index + 1}</Slide>);

  return (
    <Carousel
      items={items}
      height={200}
      arrowIcon={<UserArrowIcon />}
      dotIcons={{
        default: <UserDotDefaultIcon />,
        active: <UserDotActiveIcon />,
      }}
    />
  );
};
```

## CSS

The following class names are useful for styling with CSS.

| Class                              | Description                                       |
| ---------------------------------- | ------------------------------------------------- |
| **easy_carousel-wrapper**          | Styles applied to the root element.               |
| **easy_carousel-inner-wrapper**    | Styles applied to the inner wrapper.              |
| **easy_carousel-top-title-arrows** | Styles applied to the top title arrows.           |
| **easy_carousel**                  | Styles applied to the easy carousel.              |
| **keen-slider**                    | Styles applied to the keen slider carousel.       |
| **easy_carousel-slide**            | Styles applied to the easy carousel slide.        |
| **keen-slider__slide**             | Styles applied to the keen slider carousel slide. |
| **easy_carousel-arrows**           | Styles applied to the arrows.                     |
| **easy_carousel-arrow**            | Styles applied to the arrow.                      |
| **easy_carousel-dots**             | Styles applied to the dots.                       |
| **easy_carousel-dot**              | Styles applied to the dot.                        |
| **easy_carousel-thumbnails**       | Styles applied to the thumbnails.                 |
| **easy_carousel-thumbnail**        | Styles applied to the thumbnail.                  |

import { Carousel } from '@aspirity/easydev';
import { StyledImg, StyledImg2 } from './styles';
import 'keen-slider/keen-slider.min.css';

import slide1 from '@src/assets/img/product/1.jpg';
import slide2 from '@src/assets/img/product/2.jpg';
import slide3 from '@src/assets/img/product/3.jpg';
import slide4 from '@src/assets/img/product/4.jpg';
import slide5 from '@src/assets/img/product/5.jpg';

const items = [
  {
    id: 0,
    img: slide1,
  },
  {
    id: 1,
    img: slide2,
  },
  {
    id: 2,
    img: slide3,
  },
  {
    id: 3,
    img: slide4,
  },
  {
    id: 4,
    img: slide5,
  },
];

export const ProductCarousel = () => {
  const slides = items.map((item) => (
    <StyledImg>
      <StyledImg2 key={item.id} src={item.img} />
    </StyledImg>
  ));

  return (
    <div style={{ width: 584 }}>
      <Carousel thumbnails={true} items={slides} />
    </div>
  );
};

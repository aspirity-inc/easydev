import extraslide1 from '@src/assets/img/product/1.jpg';
import extraslide2 from '@src/assets/img/product/2.jpg';
import extraslide3 from '@src/assets/img/product/3.jpg';
import mainslide1 from '@src/assets/img/feedbacks/1.jpg';
import mainslide2 from '@src/assets/img/feedbacks/2.jpg';
import mainslide3 from '@src/assets/img/feedbacks/3.jpg';

const extraslides = [
  {
    id: 1,
    img: extraslide1,
  },
  {
    id: 2,
    img: extraslide2,
  },
  {
    id: 3,
    img: extraslide3,
  },
];

export const feedbacks = [
  {
    id: 0,
    slides: [{ id: 0, img: mainslide1 }, ...extraslides],
    name: 'Gloria J.',
    rating: 4.5,
    review:
      '10/10, the perfect jacket. thought the fabric would be different, this is a little bit like a cloak, but overall everything is fine',
    date: 'May 6, 2023',
  },
  {
    id: 1,
    slides: [{ id: 0, img: mainslide2 }, ...extraslides],
    name: 'Vanessa M.',
    rating: 4.5,
    review:
      '10/10, the perfect jacket. thought the fabric would be different, this is a little bit like a cloak, but overall everything is fine',
    date: 'May 6, 2023',
  },
  {
    id: 2,
    slides: [{ id: 0, img: mainslide3 }, ...extraslides],
    name: 'Natasha R.',
    rating: 4.5,
    review:
      '10/10, the perfect jacket. thought the fabric would be different, this is a little bit like a cloak, but overall everything is fine',
    date: 'May 6, 2023',
  },
];

export function generateLongFeedbacksArray(n: number) {
  const newData = [] as typeof feedbacks;
  let currentId = 1;

  for (let i = 0; i < n; i++) {
    for (const item of feedbacks) {
      newData.push({
        ...item,
        id: currentId,
      });
      currentId++;
    }
  }

  return newData;
}

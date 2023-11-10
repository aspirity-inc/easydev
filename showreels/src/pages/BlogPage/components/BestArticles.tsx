import { Flex, Title, Carousel, Button, Subtitle } from '@aspirity/easydev';

import Carousel1Image from '@src/assets/img/carousel/carousel1.png';
import Carousel2Image from '@src/assets/img/carousel/carousel2.png';
import Carousel3Image from '@src/assets/img/carousel/carousel3.png';

const card1 = () => {
  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <img src={Carousel1Image} style={{ height: '100%', width: '100%' }} />
      <div style={{ position: 'absolute', left: 40, top: 49 }}>
        <Subtitle level={3} style={{ color: '#fff', marginBottom: 16 }}>
          Harry Potter
        </Subtitle>
        <Title variant="h3" style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.3, color: '#fff' }}>
          Harry Potter and the Philosopher's Stone
        </Title>
      </div>
      <Button style={{ position: 'absolute', left: 24, bottom: 53 }} rounded="lg">
        READ FEATURE
      </Button>
    </div>
  );
};
const card2 = () => {
  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <img src={Carousel2Image} style={{ height: '100%', width: '100%' }} />
      <div style={{ position: 'absolute', left: 40, top: 49 }}>
        <Subtitle level={3} style={{ color: '#fff', marginBottom: 16 }}>
          Harry Potter
        </Subtitle>
        <Title variant="h3" style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.3, color: '#fff' }}>
          To Harry Potter - The Boy Who Lived
        </Title>
      </div>
      <Button style={{ position: 'absolute', left: 24, bottom: 53 }} rounded="lg">
        READ FEATURE
      </Button>
    </div>
  );
};
const card3 = () => {
  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <img src={Carousel3Image} style={{ height: '100%', width: '100%' }} />
      <div style={{ position: 'absolute', left: 40, top: 49 }}>
        <Subtitle level={3} style={{ color: '#fff', marginBottom: 16 }}>
          Harry Potter
        </Subtitle>
        <Title variant="h3" style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.3, color: '#fff' }}>
          Alchemy
        </Title>
      </div>
      <Button style={{ position: 'absolute', left: 24, bottom: 53 }} rounded="lg">
        READ FEATURE
      </Button>
    </div>
  );
};

export const BestArticles = () => {
  return (
    <Flex direction="column" align="flex-start">
      <Title variant="h3">Best Articles</Title>
      <Flex
        style={{ marginTop: 57, marginBottom: 96 }}
        direction="row"
        wrap="nowrap"
        className="articles-container"
        gap={60}
      >
        <div style={{ borderRadius: 12 }}>
          <Carousel height={515} items={[card1(), card2(), card3()]} dots={false} />
        </div>
        <div style={{ borderRadius: 12 }}>
          <Carousel height={515} items={[card2(), card3(), card1()]} dots={false} />
        </div>
        <div style={{ borderRadius: 12 }}>
          <Carousel height={515} items={[card3(), card1(), card2()]} dots={false} />
        </div>
      </Flex>
    </Flex>
  );
};

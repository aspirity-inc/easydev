import { Subtitle, Title, Button } from '@aspirity/easydev';
import Carousel2Image from '@src/assets/img/carousel/carousel2.png';

export const Card2 = () => {
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

import { Subtitle, Title, Button } from '@aspirity/easydev';
import Carousel1Image from '@src/assets/img/carousel/carousel1.png';

export const Card1 = () => {
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

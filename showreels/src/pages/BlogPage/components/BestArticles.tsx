import { Flex, Title, Carousel } from '@aspirity/easydev';
import { Card1 } from './ArticleCards/Card1';
import { Card2 } from './ArticleCards/Card2';
import { Card3 } from './ArticleCards/Card3';

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
        <div style={{ borderRadius: 12, width: 'calc(calc(100vw - 220px - 48px - 48px) / 3)' }}>
          <Carousel height={515} items={[Card1(), Card2(), Card3()]} dots={false} />
        </div>
        <div style={{ borderRadius: 12, width: 'calc(calc(100vw - 220px - 48px - 48px) / 3)' }}>
          <Carousel height={515} items={[Card2(), Card3(), Card1()]} dots={false} />
        </div>
        <div style={{ borderRadius: 12, width: 'calc(calc(100vw - 220px - 48px - 48px) / 3)' }}>
          <Carousel height={515} items={[Card3(), Card1(), Card2()]} dots={false} />
        </div>
      </Flex>
    </Flex>
  );
};

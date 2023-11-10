import { Flex, Title, Carousel, Card, Button, Text } from '@aspirity/easydev';

import Carousel4Image from '@src/assets/img/carousel/carousel4.png';
import styled from 'styled-components';

const StyledTitle = styled(Title)`
  color: ${({ theme }) => (theme.type === 'light' ? '#272729' : '#E6E6E6')};
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => (theme.type === 'light' ? '#272729' : '#E6E6E6')};
`;

const StyledCard = styled(Card)`
  height: 100%;
  width: 100%;
  background: ${({ theme }) => (theme.type === 'light' ? '#fff' : 'none')};
  box-shadow: ${({ theme }) => theme.type === 'light' && '0px 2px 7px 0px rgba(0, 0, 0, 0.07);'};
`;

const cards = () => {
  const card = (
    <div style={{ height: '100%' }}>
      <StyledCard
        cardContentProps={{ style: { padding: 0 } }}
        direction="row"
        media={<img src={Carousel4Image} style={{ width: 395, maxWidth: 'none' }} />}
      >
        <Flex align="stretch" direction="column" style={{ padding: '72px 24px 72px 40px', height: '100%' }}>
          <div style={{ paddingBottom: 24 }}>
            <StyledTitle variant="h3" style={{ marginBottom: 16 }}>
              Number Four, Privet Drive
            </StyledTitle>
            <StyledText variant="body1">
              The name of the street where the Dursleys live is a reference to that most suburban plant, the privet
              bush, which makes neat hedges around many English gardens.
            </StyledText>
            <br />
            <StyledText variant="body1">
              I liked the associations with both suburbia and enclosure, the Dursleys being so smugly middle class, and
              so determinedly separate from the wizarding world. The name of their area is ‘Little Whinging’, which
              again sounds appropriately parochial and sniffy, ‘whinging’ being a colloquial term for ‘complaining or
              whining’ in British English.
            </StyledText>
          </div>
          <Button rounded="lg" style={{ height: 48, width: 148 }}>
            Read feature
          </Button>
        </Flex>
      </StyledCard>
    </div>
  );

  return Array(5).fill(card);
};

export const FooterCarousel = () => {
  return (
    <Flex direction="column" align="flex-start">
      <Flex style={{ marginBottom: 96, maxWidth: 1020 }} direction="row" wrap="nowrap" gap={60}>
        <div
          style={{
            borderRadius: 12,
            width: '100%',
          }}
        >
          <Carousel
            keenSliderProps={{ loop: true }}
            arrowsType="withDots"
            items={cards()}
            dots={true}
            carouselDotsProps={{ style: { marginTop: 24 } }}
          />
        </div>
      </Flex>
    </Flex>
  );
};

import { Flex, Title, Card, Badge, Text } from '@aspirity/easydev';
import styled from 'styled-components';

import img4 from '@src/assets/img/cards/4.png';
import img5 from '@src/assets/img/cards/5.png';
import img6 from '@src/assets/img/cards/6.png';
import img7 from '@src/assets/img/cards/7.png';
import img8 from '@src/assets/img/cards/8.png';
import img9 from '@src/assets/img/cards/9.png';

const HPBadge = styled(Badge)`
  color: ${({ theme }) => (theme.type === 'light' ? '#178767' : '#10453B')};
  background-color: ${({ theme }) => (theme.type === 'light' ? '#D5F8EE' : '#DDF9F1')};
`;

const FunBadge = styled(Badge)`
  color: ${({ theme }) => (theme.type === 'light' ? '#1A6BC7' : '#006770')};
  background-color: ${({ theme }) => (theme.type === 'light' ? '#D5E6FA' : '#E3FFFF')};
`;

const HeroesBadge = styled(Badge)`
  color: ${({ theme }) => (theme.type === 'light' ? '#6923FF' : '#8B6CF1')};
  background-color: ${({ theme }) => (theme.type === 'light' ? '#EDE5FF' : '#ECE7FE')};
`;

const StyledTitle = styled(Title)`
  color: ${({ theme }) => (theme.type === 'light' ? '#272729' : '#E6E6E6')};
`;

const StyledMainText = styled(Text)`
  color: ${({ theme }) => (theme.type === 'light' ? '#272729' : '#E6E6E6')};
  font-weight: 175;
`;

const StyleCaptionText = styled(Text)`
  color: ${({ theme }) => (theme.type === 'light' ? '#7B7B7D' : '#9B95A0')};
`;

export const FreshBlogs = () => {
  return (
    <Flex direction="column" align="flex-start">
      <Title variant="h3">Fresh blogs</Title>
      <Flex
        justify="space-between"
        className="fresh-blogs"
        align="flex-start"
        style={{ marginTop: 72, marginBottom: 59, maxWidth: 1020, overflow: 'hidden' }}
      >
        <Card
          style={{ height: 347 }}
          media={<img src={img4} style={{ borderRadius: 'unset', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />}
        >
          <Flex align="stretch" direction="column" gap={12}>
            <StyledTitle variant="h5">Latest & greatest</StyledTitle>
            <StyledMainText variant="body2" className="fixed-text">
              Perhaps no students (even including Harry Potter, Ron Weasley, Hermione Granger and Tom Riddle) have ever
              explored the castle and grounds of Hogwarts as thoroughly and illicitly as the four creators and
              contributors to the Marauder’s Map: James Potter, Sirius Black, Remus Lupin and Peter Pettigrew.
            </StyledMainText>
            <StyleCaptionText variant="caption">May 20, 2012</StyleCaptionText>
            <Flex gap={10}>
              <HPBadge size="sm">HP</HPBadge>
              <HeroesBadge size="sm">Heroes</HeroesBadge>
              <FunBadge size="sm">Fun</FunBadge>
            </Flex>
          </Flex>
        </Card>
        <Card
          style={{ height: 347 }}
          media={<img src={img5} style={{ borderRadius: 'unset', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />}
        >
          <Flex align="stretch" direction="column" gap={12}>
            <StyledTitle variant="h5">The four most well-known dragons in the Harry Potter</StyledTitle>
            <StyledMainText variant="body2" className="fixed-text">
              The four most well-known dragons in the Harry Potter series are probably the ones that were used during
              the Triwizard Tournament in The Goblet of Fire. These four varieties were the Chinese Fireball, the
              Hungarian Horntail, the Swedish Short-Snout.
            </StyledMainText>
            <StyleCaptionText variant="caption">May 17, 2012</StyleCaptionText>
            <Flex gap={10}>
              <HPBadge size="sm">HP</HPBadge>
              <HeroesBadge size="sm">Heroes</HeroesBadge>
            </Flex>
          </Flex>
        </Card>
        <Card
          style={{ height: 347 }}
          media={<img src={img6} style={{ borderRadius: 'unset', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />}
        >
          <Flex align="stretch" direction="column" gap={12}>
            <StyledTitle variant="h5">Quidditch World Cup 2014: Daily Prophet reports</StyledTitle>
            <StyledMainText variant="body2" className="fixed-text">
              Not a single Quaffle thrown, not a single Snitch caught, but the 427th Quidditch World Cup is already
              mired in controversy. Magizoologists have congregated in the desert to contain the mayhem and Healers have
              attended more than 300 crowd.
            </StyledMainText>
            <StyleCaptionText variant="caption">May 19, 2012</StyleCaptionText>
            <Flex gap={10}>
              <HPBadge size="sm">HP</HPBadge>
              <FunBadge size="sm">Fun</FunBadge>
            </Flex>
          </Flex>
        </Card>
        <Card
          style={{ height: 347 }}
          media={<img src={img7} style={{ borderRadius: 'unset', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />}
        >
          <Flex align="stretch" direction="column" gap={12}>
            <StyledTitle variant="h5">10 Things You Didn't Know About Hedwig</StyledTitle>
            <ul style={{ margin: 0 }}>
              <li>
                <StyledMainText variant="body2">Various Owls Played Hedwig.</StyledMainText>
              </li>
              <li>
                <StyledMainText variant="body2">She Flew To France.</StyledMainText>
              </li>
            </ul>
            <StyleCaptionText variant="caption">May 16, 2012</StyleCaptionText>
            <Flex gap={10}>
              <HPBadge size="sm">HP</HPBadge>
              <HeroesBadge size="sm">Heroes</HeroesBadge>
            </Flex>
          </Flex>
        </Card>
        <Card
          style={{ height: 347 }}
          media={<img src={img8} style={{ borderRadius: 'unset', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />}
        >
          <Flex align="stretch" direction="column" gap={12}>
            <StyledTitle variant="h5">King’s Cross Station</StyledTitle>
            <StyledMainText variant="body2" className="fixed-text">
              When Ottaline Gambol commandeered a Muggle train to serve as the new mode of transport for Hogwarts
              students, she also had constructed a small station in the wizarding village of Hogsmeade: a necessary
              adjunct to the train.
            </StyledMainText>
            <StyleCaptionText variant="caption">May 18, 2012</StyleCaptionText>
            <Flex gap={10}>
              <HPBadge size="sm">HP</HPBadge>
              <HeroesBadge size="sm">Heroes</HeroesBadge>
            </Flex>
          </Flex>
        </Card>
        <Card
          style={{ height: 347 }}
          media={<img src={img9} style={{ borderRadius: 'unset', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />}
        >
          <Flex align="stretch" direction="column" gap={12}>
            <StyledTitle variant="h5">Costume party</StyledTitle>
            <StyledMainText variant="body2" className="fixed-text">
              Explore the inner workings of the wizarding world with a collection of writing from J.K. Rowling.
            </StyledMainText>
            <StyleCaptionText variant="caption">May 15, 2012</StyleCaptionText>
            <Flex gap={10}>
              <HPBadge size="sm">HP</HPBadge>
              <HeroesBadge size="sm">Heroes</HeroesBadge>
              <FunBadge size="sm">Fun</FunBadge>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

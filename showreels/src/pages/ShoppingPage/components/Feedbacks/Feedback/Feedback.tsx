import {
  Layout,
  Flex,
  Title,
  Link,
  Text,
  Radio,
  Card,
  Avatar,
  Subtitle,
  Badge,
} from '@easydev';
import {
  StyledImg,
  StyledImg2,
  StyledText,
  StyledVioletBadge,
  StyledBlueBadge,
} from './styles';
import { Carousel } from '@src/easydevlib/Carousel/Carousel';

type FeedBackProps = {
  item: {
    id: number;
    slides: {
      id: number;
      img: string;
    }[];
    name: string;
    rating: number;
    review: string;
    date: string;
  };
};

export const Feedback = ({ item }: FeedBackProps) => {
  const slides = item.slides.map((item) => (
    <StyledImg>
      <StyledImg2 key={item.id} src={item.img} />
    </StyledImg>
  ));

  const getAbbreviation = () => {
    const name = item.name;
    const words = name.split(' ');
    const initials = words.map((word) => word[0].toUpperCase());
    return initials.join('');
  };

  return (
    <Flex gap={32} align="flex-start" wrap="nowrap" className="w-full">
      <div className="w-[250px]">
        <Carousel items={slides} arrowsType="withDots" />
      </div>
      <Card>
        <Flex direction="column" gap={12} align="flex-start">
          <Flex gap={8}>
            <Avatar size="sm">{getAbbreviation()}</Avatar>
            <Flex gap={4} direction="column" align="flex-start">
              <Subtitle level={4}>{item.name}</Subtitle>
              <Text variant="body4">rating {item.rating}</Text>
            </Flex>
          </Flex>
          <Text variant="body2">{item.review}</Text>
          <StyledText variant="caption">{item.date}</StyledText>
          <Flex gap={8}>
            <Badge>Recommend</Badge>
            <StyledVioletBadge>Good fabric</StyledVioletBadge>
            <StyledBlueBadge>Nice shape</StyledBlueBadge>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

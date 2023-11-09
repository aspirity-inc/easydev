import { Flex, Title, Link, Card, Badge, Text, Button } from '@easydev';
import { SizeRadioBtn } from '../SizeRadioBtn/SizeRadioBtn';
import { StyledBadge, StyledGreenBadge, StyledText } from './styles';
import { ColorRadioBtn } from '../ColorRadioBtn/ColorRadioBtn';

export const ProductInfo = () => {
  return (
    <Flex direction="row" align="flex-start" wrap="wrap">
      <Flex
        direction="column"
        align="flex-start"
        className="mb-[40px] w-[334px]"
      >
        <Title variant="h3" className="mb-[24px]">
          Super duper top
        </Title>
        <div className="mb-[16px]">
          rating <Link>4,7 (130 feedbacks)</Link>
        </div>
        <Flex className="mb-[32px]" gap={16}>
          <Link>Description</Link>
          <Link>Characteristics</Link>
        </Flex>
        <Flex gap={24} justify="flex-start">
          <ColorRadioBtn />
          <SizeRadioBtn />
        </Flex>
      </Flex>
      <Flex direction="column" gap={24} className="w-[334px]">
        <Card variant="shadow">
          <Flex
            direction="column"
            align="flex-start"
            gap={12}
            className="mb-[16px] w-[334px]"
          >
            <StyledBadge size="sm" className="leading-none">
              Sale
            </StyledBadge>
            <Title variant="h5" className="leading-none">
              $ 24,84
            </Title>
            <Text variant="body2" className="leading-none">
              there is a discount <Link>here</Link>
            </Text>
            <StyledText variant="caption" className="leading-none">
              On stock: 24 pieces
            </StyledText>
          </Flex>
          <Button className="w-full h-[40px]" rounded="sm">
            Buy
          </Button>
        </Card>
        <Card variant="shadow">
          <Flex
            direction="column"
            align="flex-start"
            gap={12}
            className="w-[334px]"
          >
            <StyledGreenBadge size="sm" className="leading-none">
              Free
            </StyledGreenBadge>
            <Title variant="h5" className="leading-none">
              Delivery
            </Title>
            <Text variant="body2" className="leading-none">
              6 October
            </Text>
            <StyledText variant="caption" className="leading-none">
              $ 8
            </StyledText>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

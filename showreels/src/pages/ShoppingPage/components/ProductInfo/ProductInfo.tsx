import { Flex, Title, Link, Card, Text, Button } from '@aspirity/easydev';
import { SizeRadioBtn } from '../SizeRadioBtn/SizeRadioBtn';
import { StyledBadge, StyledGreenBadge, StyledText } from './styles';
import { ColorRadioBtn } from '../ColorRadioBtn/ColorRadioBtn';

export const ProductInfo = () => {
  return (
    <Flex direction="row" align="flex-start" wrap="wrap">
      <Flex direction="column" align="flex-start" style={{ marginBottom: 40, width: 334 }}>
        <Title variant="h3" style={{ marginBottom: 24 }}>
          Super duper top
        </Title>
        <div style={{ marginBottom: 16 }}>
          rating <Link>4,7 (130 feedbacks)</Link>
        </div>
        <Flex gap={16} style={{ marginBottom: 32 }}>
          <Link>Description</Link>
          <Link>Characteristics</Link>
        </Flex>
        <Flex gap={24} justify="flex-start">
          <ColorRadioBtn />
          <SizeRadioBtn />
        </Flex>
      </Flex>
      <Flex direction="column" gap={24} style={{ width: 334 }}>
        <Card variant="shadow">
          <Flex direction="column" align="flex-start" gap={12} style={{ marginBottom: 16, width: 334 }}>
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
          <Button rounded="sm" style={{ height: 40, width: '100%' }}>
            Buy
          </Button>
        </Card>
        <Card variant="shadow">
          <Flex direction="column" align="flex-start" gap={12} style={{ width: 334 }}>
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

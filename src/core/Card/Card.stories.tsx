import { Meta, StoryFn } from '@storybook/react';

import { Button } from '@core/Button';
import { Badge } from '@core/Badge';
import { Flex } from '@core/Flex';
import { Text, Title } from '@core/Typography';

import { Card, CardVariants, CardDirection } from '.';

export default {
  title: 'Core/Card',
  component: Card,
  argTypes: {
    variant: {
      description: 'Card variant',
      control: 'select',
      options: CardVariants,
    },
    direction: {
      defaultValue: 'column',
      description: 'Card direction',
      control: 'select',
      options: CardDirection,
    },
    maxWidth: {
      type: 'number',
      control: 'number',
      description: 'Maximum width',
    },
  },
} satisfies Meta<typeof Card>;

const Template: StoryFn<typeof Card> = ({ ...args }) => {
  return (
    <Card {...args}>
      <Flex gap={12} direction={'column'} align={'stretch'}>
        <Text variant="caption" color="lightgreen">
          Nature
        </Text>
        <Title variant="h5">Far far away</Title>
        <Text variant="body2">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
        </Text>
        <Text variant="caption" color="lightgray">
          May 6, 2012
        </Text>
        <Flex gap={10}>
          <Badge size="sm">Nature</Badge>
          <Badge size="sm" color="pink">
            Mountains
          </Badge>
          <Badge size="sm" color="lightblue">
            Travel
          </Badge>
        </Flex>
        <Button rounded="sm">Read more</Button>
      </Flex>
    </Card>
  );
};

const CardImage = () => (
  <img src="https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=" />
);

export const DefaultCard: StoryFn<typeof Card> = Template.bind({});
DefaultCard.args = {
  media: CardImage(),
};

export const DefaultCardWithMaxWidth: StoryFn<typeof Card> = Template.bind({});
DefaultCardWithMaxWidth.args = {
  media: CardImage(),
  maxWidth: 400,
};

export const NoImageCard: StoryFn<typeof Card> = Template.bind({});
NoImageCard.args = {};

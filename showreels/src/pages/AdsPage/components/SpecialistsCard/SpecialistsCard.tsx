import { specialists } from '@src/assets/data/specialists';
import { StyledText } from './styles';
import {
  Flex,
  Title,
  Avatar,
  Subtitle,
  Popover,
  AvatarGroup,
  Text,
} from '@aspirity/easydev';

const AvatarGroupChildren = () => {
  const avatars = specialists.map((user) => (
    <Avatar key={user.id} size="xs" alt="photo" src={user.img} />
  ));

  const manyAvatars = [...avatars, ...avatars, ...avatars];

  return manyAvatars;
};

export const SpecialistsCard = () => {
  return (
    <Flex direction="column" gap={40} align="flex-start">
      <Title variant="h4">Popular specialists in your category</Title>
      <Flex
        rowGap={24}
        columnGap={32}
        align="flex-start"
        direction="column"
        style={{ height: 300 }}
      >
        {specialists.map((user) => (
          <Flex key={user.id} gap={8}>
            <Avatar size="sm" alt="photo" src={user.img} />
            <Flex gap={4} direction="column" align="flex-start">
              <Subtitle level={4}>{user.name}</Subtitle>
              <Text variant="body4">{user.work}</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Popover
        body="You can say Hi! Or can’t!"
        placement="left"
        title="Best friends online"
      >
        <Flex direction="column" align="flex-end" gap={8}>
          <AvatarGroup max={10} spacing={12}>
            {AvatarGroupChildren()}
          </AvatarGroup>
          <StyledText level={4}>1,435 Friends</StyledText>
        </Flex>
      </Popover>
    </Flex>
  );
};

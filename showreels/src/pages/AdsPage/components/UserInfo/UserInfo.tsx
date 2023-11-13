import { Flex, Avatar, Title, ProgressBar, Text } from '@aspirity/easydev';
import {
  StyledProgressInfo,
  StyledProgressBar,
  StyledProgressNumber,
  StyledProgressTitle,
} from './styles';
import avatar from '@src/assets/img/avatars/avatar1.png';

export const UserInfo = () => {
  const value = 30;
  const ProgressTitle = (
    <StyledProgressInfo level={3} as="span">
      <StyledProgressNumber level={3}>{value}%</StyledProgressNumber>
      <StyledProgressTitle level={3}>Your progress</StyledProgressTitle>
    </StyledProgressInfo>
  );

  return (
    <Flex gap={32} wrap="nowrap">
      <Avatar radius="xxl" online size="xxl" alt="photo" src={avatar} />
      <Flex direction="column" gap={16} align="flex-start" justify="flex-start">
        <Title variant="h4">Loui Li</Title>
        <Flex
          direction="column"
          gap={8}
          align="flex-start"
          style={{ width: 334 }}
        >
          <Text variant="body1">Make up Artist, proffessional hairstyler</Text>
          <Text variant="body1">Expierence: 5 years</Text>

          <StyledProgressBar>
            <ProgressBar
              size="small"
              value={value}
              customTitle={ProgressTitle}
              style={{ width: 334 }}
            />
          </StyledProgressBar>
        </Flex>
      </Flex>
    </Flex>
  );
};

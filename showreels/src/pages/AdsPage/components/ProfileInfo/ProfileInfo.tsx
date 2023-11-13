import { Flex } from '@aspirity/easydev';
import { SpecialistsCard } from '../SpecialistsCard/SpecialistsCard';
import { SurveyCard } from '../SurveyCard/SurveyCard';
import { UserInfo } from '../UserInfo/UserInfo';

export const ProfileInfo = () => {
  return (
    <Flex
      gap={140}
      wrap="wrap"
      align="flex-start"
      justify="space-between"
      style={{ marginBottom: 42 }}
    >
      <Flex direction="column" align="flex-start" gap={48}>
        <UserInfo />
        <SurveyCard />
      </Flex>
      <SpecialistsCard />
    </Flex>
  );
};

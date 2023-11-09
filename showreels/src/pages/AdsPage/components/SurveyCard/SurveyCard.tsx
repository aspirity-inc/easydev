import { Button, Card, Flex, Radio, Subtitle } from '@aspirity/easydev';
import { StyledCard, StyledRadioWrapper } from './styles';
import { useState } from 'react';

export const SurveyCard = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <StyledCard>
      <Card variant="shadow">
        <Flex direction="column">
          <Subtitle level={4} style={{ marginBottom: 24 }}>
            Do you like our service?
          </Subtitle>
          <StyledRadioWrapper
            direction="column"
            gap={16}
            style={{ paddingTop: 16, paddingBottom: 16, marginBottom: 32 }}
          >
            <Radio
              value="no"
              checked={selectedOption === 'no'}
              onChange={handleOptionChange}
              label="No"
            />
            <Radio
              value="yes"
              checked={selectedOption === 'yes'}
              onChange={handleOptionChange}
              label="Yes"
            />
            <Radio
              value="idk"
              checked={selectedOption === 'idk'}
              onChange={handleOptionChange}
              label="Idk"
            />
          </StyledRadioWrapper>

          <Flex gap={16}>
            <Button
              rounded="sm"
              variant="secondary"
              style={{ height: 40, minWidth: 106, width: 106 }}
            >
              Skip
            </Button>
            <Button
              rounded="sm"
              style={{ height: 40, minWidth: 106, width: 106 }}
            >
              Answer
            </Button>
          </Flex>
        </Flex>
      </Card>
    </StyledCard>
  );
};

import { Flex, Text, Radio } from '@easydev';
import { useState, useEffect } from 'react';
import { StyledRadioWrapper } from './styles';

const colors = [
  {
    id: 0,
    value: 'white',
    code: '#FFF',
  },
  {
    id: 1,
    value: 'blue',
    code: '#7BB1EE',
  },
  {
    id: 2,
    value: 'red',
    code: '#FF2727',
  },
];

export const ColorRadioBtn = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    setSelectedOption(colors[0].value);
  }, []);

  return (
    <Flex direction="column" align="flex-start" gap={16}>
      <Text variant="body4">Colour: {selectedOption}</Text>
      <Flex gap={8}>
        {colors.map((color) => (
          <StyledRadioWrapper key={color.id} $color={color.code}>
            <Radio
              value={color.value}
              checked={selectedOption === color.value}
              onChange={handleOptionChange}
            />
          </StyledRadioWrapper>
        ))}
      </Flex>
    </Flex>
  );
};

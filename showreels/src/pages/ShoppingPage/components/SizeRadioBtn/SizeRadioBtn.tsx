import { Flex, Text, Radio } from '@aspirity/easydev';
import { useState, useEffect } from 'react';
import { StyledRadioWrapper } from './styles';

const sizes = ['xs', 's', 'm', 'l', 'xl'];

export const SizeRadioBtn = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    setSelectedOption(sizes[0]);
  }, []);

  return (
    <Flex direction="column" align="flex-start" gap={16}>
      <Text variant="body4">Size: {selectedOption?.toUpperCase()}</Text>
      <Flex gap={8}>
        {sizes.map((size, index) => (
          <StyledRadioWrapper key={index} $content={size.toUpperCase()}>
            <Radio
              value={size}
              checked={selectedOption === size}
              onChange={handleOptionChange}
            />
          </StyledRadioWrapper>
        ))}
      </Flex>
    </Flex>
  );
};

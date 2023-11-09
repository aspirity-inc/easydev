import { Flex } from '@aspirity/easydev';
import { styled } from 'styled-components';

export const StyledCard = styled('div')`
  width: 290px;
`;

export const StyledRadioWrapper = styled(Flex)`
  & .easy_radio-container {
    width: 160px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

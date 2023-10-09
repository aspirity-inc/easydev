import { styled } from 'styled-components';

import { Box } from '@core/Box';
import { getTextVariants } from '@core/Typography/Text/styles';

export const StyledMenuLabel = styled(Box)`
  height: 36px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  ${getTextVariants('body3')};
  font-weight: 600;

  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['50'])};
`;

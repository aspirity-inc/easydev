import { styled } from 'styled-components';
import { Text } from '@aspirity/easydev';

export const StyledText = styled(Text)`
  color: ${({ theme }) =>
    theme.type === 'light'
      ? theme.colors.surface['700']
      : theme.colors.surface['100']};
`;

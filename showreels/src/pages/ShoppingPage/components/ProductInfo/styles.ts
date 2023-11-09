import { Badge, Text } from '@easydev';
import styled from 'styled-components';

export const StyledBadge = styled(Badge)`
  padding: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.error[600]};
  border: none;
`;

export const StyledGreenBadge = styled(StyledBadge)`
  color: ${({ theme }) => theme.colors.primary[900]};
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) =>
    theme.type === 'light'
      ? theme.colors.surface['600']
      : theme.colors.surface['300']};
`;

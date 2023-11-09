import styled from 'styled-components';
import { Flex, Main, Badge, Breadcrumbs, Text } from '@easydev';

export const StyledImg = styled('div')`
  max-width: 250px;
  min-width: 250px;
  max-height: 170px;
`;

export const StyledImg2 = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const StyledText = styled(Text)`
  color: ${({ theme }) =>
    theme.type === 'light'
      ? theme.colors.surface['600']
      : theme.colors.surface['300']};
`;

export const StyledVioletBadge = styled(Badge)`
  color: ${({ theme }) =>
    theme.type === 'light'
      ? theme.colors.tretiary['700']
      : theme.colors.tretiary['900']};
  background-color: ${({ theme }) => theme.colors.tretiary['50']};
`;

export const StyledBlueBadge = styled(Badge)`
  color: ${({ theme }) =>
    theme.type === 'light'
      ? theme.colors.secondary['700']
      : theme.colors.secondary['900']};
  background-color: ${({ theme }) => theme.colors.secondary['50']};
`;

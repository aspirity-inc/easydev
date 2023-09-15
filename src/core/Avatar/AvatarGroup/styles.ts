import { styled } from 'styled-components';

import { Flex } from '@core/Flex';

import { StyledAvatarGroupProps } from './types';
import { Avatar } from '..';

export const StyledAvatarGroup = styled(Flex)<StyledAvatarGroupProps>`
  padding-left: ${({ $spacing }) => `${$spacing}px`};
`;

export const StyledGroupItem = styled(Avatar)<StyledAvatarGroupProps>`
  z-index: 1;
  margin-left: -${({ $spacing }) => `${$spacing}px`};
  border: 1px solid ${({ theme }) => (theme.type == 'light' ? theme.colors.surface['50'] : theme.colors.surface['900'])};
`;

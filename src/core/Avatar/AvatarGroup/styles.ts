import { styled } from 'styled-components';

import { Flex } from '@core/Flex';

import { Avatar } from '..';
import { StyledAvatarGroupProps } from '../types';

export const StyledAvatarGroup = styled(Flex)<StyledAvatarGroupProps>`
  padding-left: ${({ $spacing }) => `${$spacing}px`};
`;

export const StyledGroupItem = styled(Avatar)<StyledAvatarGroupProps>`
  z-index: 1;
  margin-left: -${({ $spacing }) => `${$spacing}px`};
  border: 1px solid ${({ theme }) => (theme.type == 'light' ? theme.colors.surface['50'] : theme.colors.surface['900'])};
`;

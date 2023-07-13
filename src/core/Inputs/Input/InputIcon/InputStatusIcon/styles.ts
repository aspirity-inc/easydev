import styled from 'styled-components';
import { StatusProps } from '@core/Inputs/types';
import { getStatusColor } from '@core/Inputs/styles';

export const StyledIcon = styled('div')<StatusProps>`
  ${({ $status }) => getStatusColor($status || 'default')};
`;

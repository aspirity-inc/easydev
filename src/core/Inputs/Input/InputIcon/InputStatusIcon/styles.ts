import { styled } from 'styled-components';

import { getStatusColor } from '@core/Inputs/styles';
import { StatusProps } from '@core/Inputs/types';

export const StyledIcon = styled('div')<StatusProps>`
  ${({ $status }) => $status && getStatusColor($status)};
`;

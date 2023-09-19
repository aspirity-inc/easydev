import { styled } from 'styled-components';

import { getStatusColor } from '../../../styles';
import type { StatusProps } from '../../../types';

export const StyledIcon = styled('div')<StatusProps>`
  ${({ $status }) => $status && getStatusColor($status)};
`;

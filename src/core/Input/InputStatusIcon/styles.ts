import styled from 'styled-components';
import { InputStatus, getStatusColor } from '../styles';

type StatusProps = {
  $status: InputStatus;
};

export const StyledIcon = styled('div')<StatusProps>`
  ${({ $status }) => getStatusColor($status)};
`;

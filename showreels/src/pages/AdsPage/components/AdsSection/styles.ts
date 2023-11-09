import styled from 'styled-components';
import { Badge } from '@aspirity/easydev';

export const CheckboxWrapper = styled('div')`
  & .easy_checkbox-container {
    gap: 16px;

    & span:last-child {
      width: 100%;
    }
  }

  & .easy_checkbox-label {
    width: 100%;
  }
`;

export const StyledBadge = styled(Badge)`
  background-color: transparent;
  padding: 0;
  color: ${({ theme }) =>
    theme.type === 'light'
      ? theme.colors.primary['900']
      : theme.colors.primary['700']};
`;

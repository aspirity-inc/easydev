import { styled } from 'styled-components';
import { Select } from '@aspirity/easydev';

export const StyledSelect = styled(Select)`
  width: 288px;

  & .react-select__control {
    height: 48px;
  }

  & .react-select__placeholder {
    color: ${({ theme }) =>
      theme.type === 'light'
        ? theme.colors.surface['600']
        : theme.colors.surface['200']};
  }
`;

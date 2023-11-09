import { styled } from 'styled-components';

export const StyledRadioWrapper = styled('div')<{ $color: string }>`
  .easy_radio-wrapp {
    background-color: ${({ $color }) => $color};
    border: none;
  }

  .easy_radio-item--inner {
    width: inherit;
    height: inherit;
    background-color: transparent;
    border: 1px solid
      ${({ theme }) =>
        theme.type === 'light'
          ? theme.colors.primary[700]
          : theme.colors.primary[400]};
  }
`;

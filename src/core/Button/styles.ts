import { Box } from '@core/Box';
import styled, { css } from 'styled-components';

export type ButtonSize = 'sm' | 'lg';
export type ButtonRounded = 'sm' | 'lg';

type ButtonProps = {
  size?: ButtonSize;
  rounded?: ButtonRounded;
  reversed?: boolean;
};

export const StyledButton = styled(Box)<ButtonProps>`
  display: flex;
  flex-direction: ${({ reversed }) => reversed && 'row-reverse'};
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 9px;
  margin: 0;
  border: none;
  background-color: #25dba7;
  color: #ffffff;
  font-size: 13px;
  line-height: 1.9;
  font-weight: ${({ theme }) => theme.typography.weight['800']};
  text-transform: uppercase;
  cursor: pointer;

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: 16px 8px;
          min-width: 120px;
        `;
      case 'lg':
        return css`
          padding: 16px 30px;
          min-width: 180px;
        `;
      default:
        return css`
          padding: 16px 30px;
          min-width: 180px;
        `;
    }
  }};

  ${({ rounded }) => {
    switch (rounded) {
      case 'sm':
        return css`
          border-radius: 4px;
        `;
      case 'lg':
        return css`
          border-radius: 40px;
        `;
      default:
        return css``;
    }
  }};
`;

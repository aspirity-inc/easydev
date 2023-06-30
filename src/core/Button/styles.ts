import styled, { css, keyframes } from 'styled-components';

export type ButtonSize = 'sm' | 'lg';
export type ButtonRounded = 'sm' | 'lg';

type ButtonProps = {
  size?: ButtonSize;
  rounded?: ButtonRounded;
  reversed?: boolean;
};

export const StyledButton = styled('button')<ButtonProps>`
  display: flex;
  flex-direction: ${({ reversed }) => reversed && 'row-reverse'};
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 9px;
  margin: 0;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary['600']};
  transition: background-color ${({ theme }) => theme.transition.default};
  color: #ffffff;
  font-size: 13px;
  line-height: 1.9;
  font-weight: ${({ theme }) => theme.typography.weight['800']};
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary['700']};
  }
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.primary['800']};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary['300']};
    cursor: disabled;
  }

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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const RotateBox = styled.div`
  display: flex;
  animation: ${rotate} 1s linear infinite;
`;

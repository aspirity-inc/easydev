import styled, { css, keyframes } from 'styled-components';

export type ButtonSize = 'sm' | 'lg';
export type ButtonRounded = 'sm' | 'lg';
export type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  size?: ButtonSize;
  rounded?: ButtonRounded;
  reversed?: boolean;
  variant?: ButtonVariant;
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
  transition: background-color ${({ theme }) => theme.transition.default};
  color: #ffffff;
  font-size: 13px;
  line-height: 1.9;
  font-weight: ${({ theme }) => theme.typography.weight['800']};
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;

  ${({ variant }) => getButtonVariantStyle(variant)}

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: 16px 8px;
          min-width: 120px;
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

const getButtonVariantStyle = (variant: ButtonVariant = 'primary') => {
  const defaultState = css`
    background-color: ${({ theme }) => theme.colors.primary['600']};

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
  `;

  switch (variant) {
    case 'primary':
      return defaultState;
    case 'secondary': {
      const typeColor = 'surface';
      return css`
        background-color: ${({ theme }) => theme.colors[typeColor]['400']};

        &:hover {
          background-color: ${({ theme }) => theme.colors[typeColor]['500']};
        }
        &:focus,
        &:active {
          background-color: ${({ theme }) => theme.colors[typeColor]['600']};
        }
        &:disabled {
          background-color: ${({ theme }) => theme.colors[typeColor]['300']};
          cursor: disabled;
        }
      `;
    }
    default:
      return defaultState;
  }
};

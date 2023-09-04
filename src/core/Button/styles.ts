import { CSSProperties } from 'react';

import { css, keyframes, styled } from 'styled-components';

export type ButtonSize = 'sm' | 'lg';
export type ButtonRounded = 'sm' | 'lg';
export type ButtonVariant = 'primary' | 'secondary';

// type ButtonProps = {
//   size?: ButtonSize;
//   rounded?: ButtonRounded;
//   reversed?: boolean;
//   variant?: ButtonVariant;
//   color?: CSSProperties['color'];
//   bgColor?: CSSProperties['backgroundColor'];
// };

type StyledButtonProps = {
  size?: ButtonSize;
  $rounded?: ButtonRounded;
  reversed?: boolean;
  variant?: ButtonVariant;
  color?: CSSProperties['color'];
  bgColor?: CSSProperties['backgroundColor'];
};

export const StyledButton = styled('button')<StyledButtonProps>`
  display: flex;
  flex-direction: ${({ reversed }) => reversed && 'row-reverse'};
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 9px;
  margin: 0;
  border: none;
  transition: background-color ${({ theme }) => theme.transition.default};
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900'])};
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
          padding: 8px 6px;
          min-width: 120px;
        `;
      default:
        return css`
          padding: 12px 30px;
          min-width: 180px;
        `;
    }
  }};

  ${({ $rounded }) => {
    switch ($rounded) {
      case 'sm':
        return css`
          border-radius: 8px;
        `;
      case 'lg':
        return css`
          border-radius: 40px;
        `;
      default:
        return css``;
    }
  }};

  ${({ color, bgColor }) => css`
    color: ${color};
    background-color: ${bgColor};
  `};
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
    &:focus-visible,
    &:active {
      background-color: ${({ theme }) => theme.colors.primary['800']};
    }
    &:disabled {
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.primary['300'] : theme.colors.primary['900']};
      cursor: not-allowed;
    }
  `;

  switch (variant) {
    case 'primary':
      return defaultState;
    case 'secondary':
      return css`
        background-color: ${({ theme }) =>
          theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['500']};

        &:hover {
          background-color: ${({ theme }) =>
            theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['400']};
        }
        &:focus-visible,
        &:active {
          background-color: ${({ theme }) => theme.colors.surface['600']};
        }
        &:disabled {
          background-color: ${({ theme }) =>
            theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['900']};
          cursor: not-allowed;
        }
      `;
    default:
      return defaultState;
  }
};

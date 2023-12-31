import { css, keyframes, styled } from 'styled-components';

import { Box } from '@core/Box';

import type { ButtonVariantsType, StyledButtonProps } from './types';

export const StyledButton = styled(Box)<StyledButtonProps>`
  display: flex;
  flex-direction: ${({ $reversed }) => $reversed && 'row-reverse'};
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 9px;
  border: none;
  transition: background-color ${({ theme }) => theme.transition.default};
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900'])};
  font-size: 13px;
  line-height: 1.2;
  font-weight: ${({ theme }) => theme.typography.weight['800']};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  outline: none;

  ${({ $variant }) => getButtonVariantStyle($variant)}

  width: max-content;

  ${({ $size }) => {
    return css`
      padding: ${$size === 'sm' ? 8 : 12}px;
    `;
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

const getButtonVariantStyle = (variant: ButtonVariantsType = 'primary') => {
  const defaultState = css`
    background-color: ${({ theme }) => theme.colors.primary['600']};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary['700']};
    }
    &:focus-visible,
    &:active,
    &:focus {
      background-color: ${({ theme }) => theme.colors.primary['800']};
      outline: none;
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

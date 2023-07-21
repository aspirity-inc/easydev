import { styled } from 'styled-components';

import { getTitleVariant } from '@core/Typography/styles.ts';

import { StyledStepper } from '../styles.ts';

export const StyledStep = styled('div')`
  --color: ${({ theme }) => (theme.type === 'light' ? theme.colors.secondary['500'] : theme.colors.surface['400'])};

  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid var(--color);
  color: var(--color);
  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};

  ${getTitleVariant('h4')}

  &.active {
    background-color: var(--color);
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800'])};
  }

  &.done {
    .material-symbols-rounded {
      line-height: 1.6;
    }
  }
`;

export const StyledNumericStepper = styled(StyledStepper)`
  &:before {
    content: '';
    position: absolute;
    display: block;
    width: calc(100% - 40px);
    height: 2px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.secondary['500'] : theme.colors.surface['400']};
    z-index: -1;
  }
`;

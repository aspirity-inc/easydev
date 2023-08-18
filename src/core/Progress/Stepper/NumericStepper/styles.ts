import { styled } from 'styled-components';

import { getTitleVariant } from '@core/Typography/styles.ts';

import { StyledStepper } from '../styles.ts';

export const StyledStep = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid var(--mainColor);
  color: var(--mainColor);
  background-color: var(--secondaryNumericColor);

  ${getTitleVariant('h4')}

  &.active {
    background-color: var(--mainColor);
    color: var(--secondaryNumericColor);
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
    background-color: var(--mainColor);
    z-index: -1;
  }
`;
